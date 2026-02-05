
import React from 'react';
import { Tour, Scene } from '../types';
import { Plus, Trash2, Home, Map, FolderOpen, RefreshCcw } from 'lucide-react';

interface EditorSidebarProps {
  tour: Tour;
  activeSceneId: string;
  directoryHandle: any | null;
  onOpenFolder: () => void;
  onSelectScene: (id: string) => void;
  onAddScene: (file: File) => void;
  onRemoveScene: (id: string) => void;
  onUpdateTourTitle: (title: string) => void;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({
  tour,
  activeSceneId,
  directoryHandle,
  onOpenFolder,
  onSelectScene,
  onAddScene,
  onRemoveScene,
  onUpdateTourTitle,
}) => {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col z-20">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-blue-400 font-black tracking-tighter text-xl uppercase italic">
            <Map size={24} strokeWidth={3} />
            Pano
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="p-1.5 text-slate-500 hover:text-white transition-colors"
            title="Reload App"
          >
            <RefreshCcw size={14} />
          </button>
        </div>
        
        <div className="mb-6">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
            Storage Target
          </label>
          {directoryHandle ? (
            <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
              <span className="text-xs text-emerald-400 font-medium truncate flex items-center gap-2">
                <FolderOpen size={14} />
                {directoryHandle.name}
              </span>
              <button onClick={onOpenFolder} className="text-[10px] text-slate-400 hover:text-white underline font-bold">Switch</button>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-blue-500/5 border border-blue-500/10 rounded-lg px-3 py-2">
              <span className="text-xs text-blue-400/70 font-medium">Browser Storage</span>
              <button onClick={onOpenFolder} className="text-[10px] text-blue-400 hover:text-blue-300 underline font-bold">Pick Folder</button>
            </div>
          )}
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
            Project Name
          </label>
          <input
            type="text"
            value={tour.title}
            onChange={(e) => onUpdateTourTitle(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
            placeholder="Enter tour title..."
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scenes ({tour.scenes.length})</h2>
          <label className="p-1.5 bg-blue-600 hover:bg-blue-500 rounded-full cursor-pointer transition-all shadow-lg shadow-blue-900/20">
            <Plus size={16} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && onAddScene(e.target.files[0])}
            />
          </label>
        </div>

        <div className="space-y-3">
          {tour.scenes.length === 0 && (
            <div className="text-center py-12 px-4 border-2 border-dashed border-slate-800 rounded-xl">
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">No scenes added</p>
            </div>
          )}
          {tour.scenes.map((scene) => (
            <div
              key={scene.id}
              onClick={() => onSelectScene(scene.id)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                activeSceneId === scene.id ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="aspect-[2/1] bg-slate-800 relative">
                {scene.imageSource && (
                  <img
                    src={scene.imageSource}
                    alt={scene.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold truncate pr-4 uppercase tracking-tighter">{scene.name}</span>
                    {tour.startSceneId === scene.id && (
                      <Home size={12} className="text-emerald-400 shrink-0" />
                    )}
                  </div>
                </div>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveScene(scene.id);
                }}
                className="absolute top-2 right-2 p-1.5 bg-red-500/90 hover:bg-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-slate-950/50 border-t border-slate-800">
        <div className="text-[9px] text-slate-600 text-center font-bold uppercase tracking-widest">
          Panocraft Studio v1.2.0
        </div>
      </div>
    </aside>
  );
};

export default EditorSidebar;
