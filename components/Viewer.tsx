
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

  // Sync hotspots refs
  useEffect(() => {
    hotspotsRef.current = [];
  }, [scene.hotspots]);

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
    
    // We use BackSide so we can see it from within, and raycasting works on the inside.
    const material = new THREE.MeshBasicMaterial({ side: THREE.BackSide });
    const sphere = new THREE.Mesh(geometry, material);
    sceneThree.add(sphere);
    sphereRef.current = sphere;

    const updateHotspotPositions = () => {
      if (!cameraRef.current || !containerRef.current) return;
      
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      hotspotsRef.current.forEach((el) => {
        if (!el) return;
        const hs = (el as any).userData as Hotspot;
        if (!hs) return;
        const pos = new THREE.Vector3(hs.position.x, hs.position.y, hs.position.z);
        pos.project(cameraRef.current!);

        if (pos.z > 1) {
          el.style.display = 'none';
        } else {
          const x = (pos.x * 0.5 + 0.5) * w;
          const y = (pos.y * -0.5 + 0.5) * h;
          el.style.display = 'flex';
          el.style.left = `${x}px`;
          el.style.top = `${y}px`;
        }
      });
    };

    let animationFrameId: number;
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
      animationFrameId = requestAnimationFrame(animate);
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
      lon.current = (onPointerDownMouseX.current - e.clientX) * 0.15 + onPointerDownLon.current;
      lat.current = (e.clientY - onPointerDownMouseY.current) * 0.15 + onPointerDownLat.current;
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isInteracting.current) return;
      isInteracting.current = false;
      
      const moveX = Math.abs(e.clientX - onPointerDownMouseX.current);
      const moveY = Math.abs(e.clientY - onPointerDownMouseY.current);
      
      // If the movement was minimal, consider it a click to add a hotspot
      if (moveX < 10 && moveY < 10 && !isPreviewMode) {
        if (!rendererRef.current || !cameraRef.current || !containerRef.current || !sphereRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const mouse = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -((e.clientY - rect.top) / rect.height) * 2 + 1
        );
        
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, cameraRef.current);
        
        // Sphere is scaled -1, so we are inside. Raycasting still works.
        const intersects = raycaster.intersectObject(sphereRef.current);
        if (intersects.length > 0) {
          onAddHotspot(intersects[0].point);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!cameraRef.current) return;
      cameraRef.current.fov = THREE.MathUtils.clamp(cameraRef.current.fov + e.deltaY * 0.05, 20, 90);
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

    const element = containerRef.current;
    element.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    element.addEventListener('wheel', handleWheel);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      if (element) {
        element.removeEventListener('pointerdown', handlePointerDown);
        element.removeEventListener('wheel', handleWheel);
      }
      renderer.dispose();
      if (element) element.innerHTML = '';
    };
  }, [isPreviewMode, onAddHotspot]); // Re-init only when essential props change

  // Texture loading
  useEffect(() => {
    if (!sphereRef.current || !scene.imageSource) return;
    const loader = new THREE.TextureLoader();
    loader.load(scene.imageSource, (texture) => {
      if (sphereRef.current) {
        const mat = sphereRef.current.material as THREE.MeshBasicMaterial;
        mat.map = texture;
        mat.needsUpdate = true;
      }
    });
  }, [scene.imageSource]);

  return (
    <div ref={containerRef} className="w-full h-full bg-black relative overflow-hidden touch-none">
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
          <div className="absolute top-12 opacity-0 group-hover:opacity-100 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap pointer-events-none transition-all uppercase tracking-wider border border-white/10 shadow-xl">
            {hs.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewer;
