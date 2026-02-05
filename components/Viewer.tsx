
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Scene, Hotspot, HotspotType } from '../types';

interface ViewerProps {
  scene: Scene;
  onAddHotspot: (pos: { x: number; y: number; z: number }) => void;
  onHotspotClick: (hs: Hotspot) => void;
  selectedHotspotId: string | null;
  isPreviewMode: boolean;
}

const Viewer: React.FC<ViewerProps> = ({ scene, onAddHotspot, onHotspotClick, selectedHotspotId, isPreviewMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const hotspotsRef = useRef<HTMLDivElement[]>([]);
  
  const lon = useRef(0);
  const lat = useRef(0);
  const isInteracting = useRef(false);
  const onPointerDownMouseX = useRef(0);
  const onPointerDownMouseY = useRef(0);
  const onPointerDownLon = useRef(0);
  const onPointerDownLat = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const sceneThree = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial();
    const sphere = new THREE.Mesh(geometry, material);
    sceneThree.add(sphere);
    sphereRef.current = sphere;

    const animate = () => {
      if (!rendererRef.current || !cameraRef.current) return;
      
      lat.current = Math.max(-85, Math.min(85, lat.current));
      const phi = THREE.MathUtils.degToRad(90 - lat.current);
      const theta = THREE.MathUtils.degToRad(lon.current);

      const x = 500 * Math.sin(phi) * Math.cos(theta);
      const y = 500 * Math.cos(phi);
      const z = 500 * Math.sin(phi) * Math.sin(theta);

      cameraRef.current.lookAt(x, y, z);
      rendererRef.current.render(sceneThree, cameraRef.current);
      updateHotspotPositions();
      requestAnimationFrame(animate);
    };

    const updateHotspotPositions = () => {
      if (!cameraRef.current || !containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      hotspotsRef.current.forEach((el) => {
        const hs = (el as any).userData as Hotspot;
        const pos = new THREE.Vector3(hs.position.x, hs.position.y, hs.position.z);
        pos.project(cameraRef.current!);

        if (pos.z > 1) {
          el.style.display = 'none';
        } else {
          const x = (pos.x * 0.5 + 0.5) * width;
          const y = (pos.y * -0.5 + 0.5) * height;
          el.style.display = 'flex';
          el.style.left = `${x}px`;
          el.style.top = `${y}px`;
        }
      });
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      isInteracting.current = true;
      onPointerDownMouseX.current = e.clientX;
      onPointerDownMouseY.current = e.clientY;
      onPointerDownLon.current = lon.current;
      onPointerDownLat.current = lat.current;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isInteracting.current) return;
      lon.current = (onPointerDownMouseX.current - e.clientX) * 0.1 + onPointerDownLon.current;
      lat.current = (e.clientY - onPointerDownMouseY.current) * 0.1 + onPointerDownLat.current;
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isInteracting.current) return;
      isInteracting.current = false;
      
      const moveX = Math.abs(e.clientX - onPointerDownMouseX.current);
      const moveY = Math.abs(e.clientY - onPointerDownMouseY.current);
      
      if (moveX < 5 && moveY < 5 && !isPreviewMode) {
        if (!rendererRef.current || !cameraRef.current || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouse = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -((e.clientY - rect.top) / rect.height) * 2 + 1
        );
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, cameraRef.current);
        const intersects = raycaster.intersectObject(sphereRef.current!);
        if (intersects.length > 0) {
          onAddHotspot(intersects[0].point);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!cameraRef.current) return;
      cameraRef.current.fov = THREE.MathUtils.clamp(cameraRef.current.fov + e.deltaY * 0.05, 10, 75);
      cameraRef.current.updateProjectionMatrix();
    };

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    containerRef.current.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    containerRef.current.addEventListener('wheel', handleWheel);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [isPreviewMode]);

  useEffect(() => {
    if (!sphereRef.current || !scene.imageSource) return;
    const loader = new THREE.TextureLoader();
    loader.load(scene.imageSource, (texture) => {
      if (sphereRef.current) {
        (sphereRef.current.material as THREE.MeshBasicMaterial).map = texture;
        (sphereRef.current.material as THREE.MeshBasicMaterial).needsUpdate = true;
      }
    });
  }, [scene.imageSource]);

  return (
    <div ref={containerRef} className="w-full h-full bg-black relative overflow-hidden">
      {scene.hotspots.map((hs) => (
        <div
          key={hs.id}
          ref={(el) => {
            if (el) {
              (el as any).userData = hs;
              if (!hotspotsRef.current.includes(el)) hotspotsRef.current.push(el);
            }
          }}
          onClick={(e) => { e.stopPropagation(); onHotspotClick(hs); }}
          className={`absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full cursor-pointer transition-all z-10 group
            ${selectedHotspotId === hs.id && !isPreviewMode ? 'ring-4 ring-blue-500 scale-125 shadow-blue-500/50' : 'hover:scale-110'}
            ${hs.type === HotspotType.SCENE ? 'bg-blue-600' : hs.type === HotspotType.LINK ? 'bg-orange-600' : 'bg-purple-600'}
            border-2 border-white shadow-lg`}
        >
          <span className="text-white text-lg">
            {hs.type === HotspotType.SCENE ? '🚪' : hs.type === HotspotType.LINK ? '🔗' : '🖼️'}
          </span>
          <div className="absolute top-12 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none transition-opacity uppercase tracking-wider">
            {hs.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewer;
