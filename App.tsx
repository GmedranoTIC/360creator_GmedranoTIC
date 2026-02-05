
import React, { useState, useEffect, useCallback } from 'react';
import { Scene, Tour, Hotspot, HotspotType } from './types';
import Viewer from './components/Viewer';
import EditorSidebar from './components/EditorSidebar';
import HotspotPanel from './components/HotspotPanel';
import { exportTourAsHTML } from './utils/exportTour';
import { db } from './utils/db';
import JSZip from 'jszip';
import { Plus, Download, Eye, Edit3, Image as ImageIcon, FileArchive, Save, Trash2, Info, Upload } from 'lucide-react';

const App: React.FC = () => {
  const [tour, setTour] = useState<Tour>({
    title: 'My 360 Tour',
    startSceneId: '',
    scenes: [],
  });
  const [activeSceneId, setActiveSceneId] = useState<string>('');
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const activeScene = tour.scenes.find((s) => s.id === activeSceneId);
  const selectedHotspot = activeScene?.hotspots.find((h) => h.id === selectedHotspotId);

  useEffect(() => {
    loadFromBrowserStorage();
  }, []);

  const loadFromBrowserStorage = async () => {
    try {
      const savedTour = await db.load('current-tour');
      if (savedTour && savedTour.scenes) {
        setTour(savedTour);
        if (savedTour.scenes.length > 0) setActiveSceneId(savedTour.scenes[0].id);
      }
    } catch (e) {
      console.error("Failed to auto-load", e);
    }
  };

  const saveToZip = async () => {
    try {
      setIsLoading(true);
      const zip = new JSZip();
      
      // Separate images from the JSON to save them as actual files in the zip
      const cleanScenes = await Promise.all(tour.scenes.map(async (scene) => {
        const { imageSource, ...rest } = scene;
        if (imageSource) {
          const response = await fetch(imageSource);
          const blob = await response.blob();
          zip.file(`images/${scene.imageFileName}`, blob);
        }
        return rest;
      }));

      const projectJson = { ...tour, scenes: cleanScenes };
      zip.file('project.json', JSON.stringify(projectJson, null, 2));

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tour.title.replace(/\s+/g, '_')}_project.pano`;
      a.click();
      URL.revokeObjectURL(url);
      
      // Also cache in IndexedDB
      await db.save('current-tour', tour);
      setIsDirty(false);
    } catch (e) {
      console.error("ZIP export failed", e);
      alert("Failed to create project file.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadFromZip = async (file: File) => {
    try {
      setIsLoading(true);
      const zip = await JSZip.loadAsync(file);
      const jsonFile = zip.file('project.json');
      if (!jsonFile) throw new Error("Not a valid project file (missing project.json)");

      const jsonText = await jsonFile.async('string');
      const loadedTour: Tour = JSON.parse(jsonText);

      // Restore images
      const hydratedScenes = await Promise.all(loadedTour.scenes.map(async (scene) => {
        const imgFile = zip.file(`images/${scene.imageFileName}`);
        if (imgFile) {
          const blob = await imgFile.async('blob');
          return { ...scene, imageSource: URL.createObjectURL(blob) };
        }
        return scene;
      }));

      const finalTour = { ...loadedTour, scenes: hydratedScenes };
      setTour(finalTour);
      if (finalTour.scenes.length > 0) setActiveSceneId(finalTour.scenes[0].id);
      setIsDirty(false);
      await db.save('current-tour', finalTour);
    } catch (e) {
      console.error("ZIP import failed", e);
      alert("Error loading project file. Is it a .pano file?");
    } finally {
      setIsLoading(false);
    }
  };

  const addScene = useCallback(async (file: File) => {
    const imageSource = URL.createObjectURL(file);
    const newScene: Scene = {
      id: crypto.randomUUID(),
      name: file.name.split('.')[0],
      imageFileName: file.name,
      imageSource: imageSource,
      hotspots: [],
    };

    setTour((prev) => {
      const updated = {
        ...prev,
        scenes: [...prev.scenes, newScene],
        startSceneId: prev.startSceneId || newScene.id,
      };
      db.save('current-tour', updated);
      return updated;
    });
    setActiveSceneId(newScene.id);
    setIsDirty(true);
  }, []);

  const updateHotspot = (updated: Hotspot) => {
    setTour((prev) => {
      const next = {
        ...prev,
        scenes: prev.scenes.map((s) =>
          s.id === activeSceneId
            ? { ...s, hotspots: s.hotspots.map((h) => (h.id === updated.id ? updated : h)) }
            : s
        ),
      };
      db.save('current-tour', next);
      return next;
    });
    setIsDirty(true);
  };

  const removeScene = (id: string) => {
    if (!confirm("Remove this scene?")) return;
    setTour((prev) => {
      const nextScenes = prev.scenes.filter((s) => s.id !== id);
      const updated = {
        ...prev,
        scenes: nextScenes,
        startSceneId: prev.startSceneId === id ? (nextScenes[0]?.id || '') : prev.startSceneId,
      };
      db.save('current-tour', updated);
      return updated;
    });
    if (activeSceneId === id) {
      setActiveSceneId(tour.scenes.find((s) => s.id !== id)?.id || '');
    }
    setIsDirty(true);
  };

  const addHotspot = (position: { x: number; y: number; z: number }) => {
    if (!activeSceneId || isPreviewMode) return;
    const newHotspot: Hotspot = {
      id: crypto.randomUUID(),
      type: HotspotType.SCENE,
      position,
      label: 'New Hotspot',
      targetSceneId: '',
      targetUrl: '',
      contentImageUrl: '',
    };
    setTour((prev) => {
      const updated = {
        ...prev,
        scenes: prev.scenes.map((s) =>
          s.id === activeSceneId ? { ...s, hotspots: [...s.hotspots, newHotspot] } : s
        ),
      };
      db.save('current-tour', updated);
      return updated;
    });
    setSelectedHotspotId(newHotspot.id);
    setIsDirty(true);
  };

  const removeHotspot = (id: string) => {
    setTour((prev) => {
      const updated = {
        ...prev,
        scenes: prev.scenes.map((s) =>
          s.id === activeSceneId ? { ...s, hotspots: s.hotspots.filter((h) => h.id !== id) } : s
        ),
      };
      db.save('current-tour', updated);
      return updated;
    });
    setSelectedHotspotId(null);
    setIsDirty(true);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      <EditorSidebar
        tour={tour}
        activeSceneId={activeSceneId}
        onSelectScene={setActiveSceneId}
        onAddScene={addScene}
        onRemoveScene={removeScene}
        onLoadProject={loadFromZip}
        onUpdateTourTitle={(title) => { setTour((prev) => ({ ...prev, title })); setIsDirty(true); }}
      />

      <div className="flex-1 relative flex flex-col">
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {tour.title}
            </h1>
            {isDirty && (
              <span className="flex items-center gap-1.5 text-[10px] bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-full border border-amber-500/20 uppercase font-black tracking-widest">
                <Info size={12} />
                Unsaved
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={saveToZip}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all border border-slate-700 font-medium disabled:opacity-50"
            >
              <Save size={18} />
              {isLoading ? 'Processing...' : 'Save Project (.pano)'}
            </button>
            <div className="w-px h-6 bg-slate-800 mx-1" />
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${
                isPreviewMode ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {isPreviewMode ? <Edit3 size={18} /> : <Eye size={18} />}
              {isPreviewMode ? 'Exit Preview' : 'Preview'}
            </button>
            <button
              onClick={() => exportTourAsHTML(tour)}
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-all shadow-lg shadow-blue-900/20 font-bold"
            >
              <Download size={18} />
              Export HTML5
            </button>
          </div>
        </header>

        <main className="flex-1 relative overflow-hidden bg-black">
          {activeScene ? (
            <Viewer
              scene={activeScene}
              onAddHotspot={addHotspot}
              onHotspotClick={(hs) => {
                if (isPreviewMode) {
                  if (hs.type === HotspotType.SCENE && hs.targetSceneId) setActiveSceneId(hs.targetSceneId);
                  else if (hs.type === HotspotType.LINK && hs.targetUrl) window.open(hs.targetUrl, '_blank');
                } else {
                  setSelectedHotspotId(hs.id);
                }
              }}
              selectedHotspotId={selectedHotspotId}
              isPreviewMode={isPreviewMode}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 p-8 text-center">
              <div className="max-w-md w-full p-10 bg-slate-900/50 rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-xl">
                <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-500">
                  <ImageIcon size={40} />
                </div>
                
                <h2 className="text-3xl font-black mb-4 tracking-tight">Virtual Tour Editor</h2>
                <p className="text-slate-400 mb-10 leading-relaxed text-sm">
                  Create immersive 360 experiences. No complex setup, works in your browser.
                </p>
                
                <div className="flex flex-col gap-3">
                  <label className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold shadow-xl shadow-blue-900/30 transition-all active:scale-95 cursor-pointer">
                    <Plus size={20} />
                    Add First 360 Image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && addScene(e.target.files[0])}
                    />
                  </label>
                  
                  <label className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold transition-all border border-slate-700 cursor-pointer">
                    <Upload size={20} />
                    Load .pano Project
                    <input
                      type="file"
                      accept=".pano"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && loadFromZip(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {!isPreviewMode && activeScene && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Click on the image to add a hotspot
              </div>
            </div>
          )}

          {isPreviewMode && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-emerald-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl border border-white/20 pointer-events-none z-50 flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Live Preview
            </div>
          )}
        </main>
      </div>

      {!isPreviewMode && (
        <HotspotPanel
          hotspot={selectedHotspot || null}
          scenes={tour.scenes}
          onUpdate={updateHotspot}
          onRemove={removeHotspot}
          onClose={() => setSelectedHotspotId(null)}
        />
      )}
    </div>
  );
};

export default App;
