
import React from 'react';
import { Hotspot, HotspotType, Scene } from '../types';
import { X, Trash2, Link as LinkIcon, Image as ImageIcon, DoorOpen } from 'lucide-react';

interface HotspotPanelProps {
  hotspot: Hotspot | null;
  scenes: Scene[];
  onUpdate: (hs: Hotspot) => void;
  onRemove: (id: string) => void;
  onClose: () => void;
}

const HotspotPanel: React.FC<HotspotPanelProps> = ({ hotspot, scenes, onUpdate, onRemove, onClose }) => {
  if (!hotspot) {
    return (
      <div className="w-80 bg-slate-900 border-l border-slate-800 flex flex-col items-center justify-center p-8 text-center text-slate-500">
        <SettingsIcon className="w-12 h-12 mb-4 opacity-20" />
        <p className="text-sm">Select a hotspot or click on the sphere to add one</p>
      </div>
    );
  }

  const handleChange = (field: keyof Hotspot, value: any) => {
    onUpdate({ ...hotspot, [field]: value });
  };

  return (
    <aside className="w-80 bg-slate-900 border-l border-slate-800 flex flex-col z-20">
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <h2 className="text-lg font-bold">Hotspot Settings</h2>
        <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded-lg">
          <X size={20} />
        </button>
      </div>

      <div className="p-6 space-y-6 overflow-y-auto flex-1">
        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-3">
            Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: HotspotType.SCENE, icon: <DoorOpen size={18} />, label: 'Scene' },
              { id: HotspotType.LINK, icon: <LinkIcon size={18} />, label: 'Link' },
              { id: HotspotType.IMAGE, icon: <ImageIcon size={18} />, label: 'Image' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => handleChange('type', t.id)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${
                  hotspot.type === t.id
                    ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                    : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                {t.icon}
                <span className="text-[10px] font-bold">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
              Display Label
            </label>
            <input
              type="text"
              value={hotspot.label}
              onChange={(e) => handleChange('label', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Living Room"
            />
          </div>

          {hotspot.type === HotspotType.SCENE && (
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
                Target Scene
              </label>
              <select
                value={hotspot.targetSceneId}
                onChange={(e) => handleChange('targetSceneId', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a scene...</option>
                {scenes.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {hotspot.type === HotspotType.LINK && (
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
                External URL
              </label>
              <input
                type="url"
                value={hotspot.targetUrl}
                onChange={(e) => handleChange('targetUrl', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
              />
            </div>
          )}

          {hotspot.type === HotspotType.IMAGE && (
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
                Content Image
              </label>
              <div className="space-y-3">
                {hotspot.contentImageUrl ? (
                  <div className="relative group rounded-lg overflow-hidden border border-slate-700">
                    <img src={hotspot.contentImageUrl} alt="Hotspot" className="w-full h-32 object-cover" />
                    <button
                      onClick={() => handleChange('contentImageUrl', '')}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-slate-800 rounded-xl hover:border-slate-700 transition-colors cursor-pointer bg-slate-800/30">
                    <ImageIcon className="text-slate-600 mb-2" size={24} />
                    <span className="text-xs text-slate-500 font-medium">Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => handleChange('contentImageUrl', ev.target?.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 border-t border-slate-800">
        <button
          onClick={() => onRemove(hotspot.id)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors font-semibold"
        >
          <Trash2 size={18} />
          Remove Hotspot
        </button>
      </div>
    </aside>
  );
};

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default HotspotPanel;
