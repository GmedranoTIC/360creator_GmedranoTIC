
import React, { useState, useEffect } from 'react';
import { Scene, Tour, Hotspot, HotspotType } from './types';
import Viewer from './components/Viewer';
import EditorSidebar from './components/EditorSidebar';
import HotspotPanel from './components/HotspotPanel';
import { exportTourAsHTML } from './utils/exportTour';
import { db } from './utils/db';
import { Plus, Download, Eye, Edit3, Image as ImageIcon, FolderOpen, Save, ShieldAlert, Trash2, Info, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [tour, setTour] = useState<Tour>({
    title: 'My 360 Tour',
    startSceneId: '',
    scenes: [],
  });
  const [activeSceneId, setActiveSceneId] = useState<string>('');
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [directoryHandle, setDirectoryHandle] = useState<any | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [isSecureContext, setIsSecureContext] = useState(true);
  const [isFileSystemSupported, setIsFileSystemSupported] = useState(false);

  const activeScene = tour.scenes.find((s) => s.id === activeSceneId);
  const selectedHotspot = activeScene?.hotspots.find((h) => h.id === selectedHotspotId);

  useEffect(() => {
    // Check if we are in a secure context (localhost or HTTPS)
    const secure = window.isSecureContext;
    const fsSupported = 'showDirectoryPicker' in window;
    
    setIsSecureContext(secure);
    setIsFileSystemSupported(fsSupported);
    
    // Auto-load last project from IndexedDB on startup
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
      console.error("Failed to load from browser storage", e);
    }
  };

  const getFileUrl = async (dirHandle: any, fileName: string) => {
    try {
      const fileHandle = await dirHandle.getFileHandle(fileName);
      const file = await fileHandle.getFile();
      return URL.createObjectURL(file);
    } catch (e) {
      console.error(`Could not load file: ${fileName}`, e);
      return '';
    }
  };

  const openProjectFolder = async () => {
    if (!isFileSystemSupported || !isSecureContext) {
      alert("Local folder access is only available on 'localhost' or 'HTTPS'. Using browser storage instead.");
      return;
    }

    try {
      const handle = await (window as any).showDirectoryPicker({ mode: 'readwrite' });
      setDirectoryHandle(handle);

      try {
        const fileHandle = await handle.getFileHandle('tour.json');
        const file = await fileHandle.getFile();
        const text = await file.text();
        const savedTour: Tour = JSON.parse(text);

        // Re-generate blob URLs for the current session
        const hydratedScenes = await Promise.all(
          savedTour.scenes.map(async (s) => ({
            ...s,
            imageSource: await getFileUrl(handle, s.imageFileName)
          }))
        );

        setTour({ ...savedTour, scenes: hydratedScenes });
        if (hydratedScenes.length > 0) setActiveSceneId(hydratedScenes[0].id);
        setIsDirty(false);
      } catch (e) {
        console.log("No tour.json found in folder. Starting new project in this directory.");
      }
    } catch (e) {
      console.error("Directory picker failed", e);
    }
  };

  const saveProject = async () => {
    try {
      // 1. Try saving to real folder if connected
      if (directoryHandle) {
        const fileHandle = await directoryHandle.getFileHandle('tour.json', { create: true });
        const writable = await fileHandle.createWritable();
        // Remove large image blobs from JSON before saving to file
        const tourToSave = {
          ...tour,
          scenes: tour.scenes.map(({ imageSource, ...rest }) => rest)
        };
        await writable.write(JSON.stringify(tourToSave, null, 2));
        await writable.close();
      }
      
      // 2. Always save to IndexedDB (Browser Storage) to allow saving while editing
      await db.save('current-tour', tour);
      
      setIsDirty(false);
      alert("Project saved locally!");
    } catch (e) {
      console.error("Save failed", e);
      alert("Save failed. If using a folder, ensure you accepted write permissions.");
    }
  };

  const addScene = async (file: File) => {
    try {
      const imageSource = URL.createObjectURL(file);
      
      // If a folder is connected, try to physically copy the image there
      if (directoryHandle) {
        try {
          const fileHandle = await directoryHandle.getFileHandle(file.name, { create: true });
          const writable = await fileHandle.createWritable();
          await writable.write(file);
          await writable.close();
        } catch (err) {
          console.warn("Folder write failed, image stays in session only", err);
        }
      }

      const newScene: Scene = {
        id: crypto.randomUUID(),
        name: file.name.split('.')[0],
        imageFileName: file.name,
        imageSource: imageSource,
        hotspots: [],
      };

      setTour((prev) => ({
        ...prev,
        scenes: [...prev.scenes, newScene],
        startSceneId: prev.startSceneId || newScene.id,
      }));
      setActiveSceneId(newScene.id);
      setIsDirty(true);
    } catch (e) {
      console.error("Failed to add scene", e);
    }
  };

  const updateHotspot = (updated: Hotspot) => {
    setTour((prev) => ({
      ...prev,
      scenes: prev.scenes.map((s) =>
        s.id === activeSceneId
          ? { ...s, hotspots: s.hotspots.map((h) => (h.id === updated.id ? updated : h)) }
          : s
      ),
    }));
    setIsDirty(true);
  };

  const removeScene = (id: string) => {
    if (!confirm("Remove this scene?")) return;
    setTour((prev) => {
      const nextScenes = prev.scenes.filter((s) => s.id !== id);
      return {
        ...prev,
        scenes: nextScenes,
        startSceneId: prev.startSceneId === id ? (nextScenes[0]?.id || '') : prev.startSceneId,
      };
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
    setTour((prev) => ({
      ...prev,
      scenes: prev.scenes.map((s) =>
        s.id === activeSceneId ? { ...s, hotspots: [...s.hotspots, newHotspot] } : s
      ),
    }));
    setSelectedHotspotId(newHotspot.id);
    setIsDirty(true);
  };

  const removeHotspot = (id: string) => {
    setTour((prev) => ({
      ...prev,
      scenes: prev.scenes.map((s) =>
        s.id === activeSceneId ? { ...s, hotspots: s.hotspots.filter((h) => h.id !== id) } : s
      ),
    }));
    setSelectedHotspotId(null);
    setIsDirty(true);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      <EditorSidebar
        tour={tour}
        activeSceneId={activeSceneId}
        directoryHandle={directoryHandle}
        onOpenFolder={openProjectFolder}
        onSelectScene={setActiveSceneId}
        onAddScene={addScene}
        onRemoveScene={removeScene}
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
              onClick={saveProject}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all border border-slate-700 font-medium"
            >
              <Save size={18} />
              Save Project
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

        <main className="flex-1 relative overflow-hidden">
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
                {!isSecureContext && (
                  <div className="flex flex-col items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-8">
                    <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider">
                      <AlertTriangle size={16} />
                      Limited Mode
                    </div>
                    <p className="text-[11px] text-slate-400">
                      You are running from a local file (`file://`). Folder access is disabled. Your project will be saved in <b>Browser Storage</b> instead.
                    </p>
                  </div>
                )}
                
                <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-500">
                  <ImageIcon size={40} />
                </div>
                
                <h2 className="text-3xl font-black mb-4 tracking-tight">Virtual Tour Editor</h2>
                <p className="text-slate-400 mb-10 leading-relaxed text-sm">
                  Create immersive 360 experiences. Upload your first panorama to begin.
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
                  
                  {isSecureContext && isFileSystemSupported && !directoryHandle && (
                    <button
                      onClick={openProjectFolder}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold transition-all border border-slate-700"
                    >
                      <FolderOpen size={20} />
                      Pick Local Folder
                    </button>
                  )}
                </div>
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
