import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Sun, Moon, Droplet, Eye, Volume2, Contrast, ChevronDown, X, Monitor, Undo2 } from 'lucide-react';

// --- TIPI PODATKOV (TYPESCRIPT) ---
interface ColorSettings {
  background: string;
  heading: string;
  content: string;
}

interface AccessibilitySettings {
  colorMode: 'normal' | 'monochrome' | 'dark-contrast' | 'bright-contrast' | 'low-saturation' | 'high-saturation' | 'contrast';
  customColors: ColorSettings;
}

// --- ZAČETNE NASTAVITVE ---
const initialSettings: AccessibilitySettings = {
  colorMode: 'normal',
  customColors: { background: '#0a0a0a', heading: '#ffffff', content: '#a0a0a0' },
};

// --- POD-KOMPONENTE MENIJA ---
const AccessibilityIcon = ({ icon, label, isActive, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center space-y-2 p-3 text-center border rounded-lg transition-all duration-200 w-full h-full ${isActive ? 'bg-primary text-black border-primary-dark shadow-lg' : 'bg-white/5 border-gray-700 hover:bg-white/10'}`}>
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-700">
    <button onClick={onToggle} className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-100 hover:bg-gray-700/50">
      <span>{title}</span>
      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden"><div className="p-4 bg-black/20">{children}</div></div>
    </div>
  </div>
);

// --- GLAVNA KOMPONENTA MENIJA ---
const AccessibilityMenu = ({ onClose, settings, onSettingsChange }) => {
  const [openSections, setOpenSections] = useState({ color: true });
  const [activeColorTab, setActiveColorTab] = useState('backgrounds');

  const handleColorChange = (type, value) => {
    const keyMap = { backgrounds: 'background', headings: 'heading', contents: 'content' };
    onSettingsChange(prev => ({ ...prev, customColors: { ...prev.customColors, [keyMap[type]]: value } }));
  };
  
  const resetColors = () => onSettingsChange(prev => ({ ...prev, customColors: initialSettings.customColors }));
  const handleColorModeChange = (mode) => onSettingsChange(prev => ({ ...prev, colorMode: prev.colorMode === mode ? 'normal' : mode }));

  const iconProps = { className: "w-8 h-8 mx-auto", strokeWidth: 1.5 };
  const colorAdjustments = [
    { id: 'monochrome', label: 'Monochrome', icon: <Monitor {...iconProps} /> },
    { id: 'dark-contrast', label: 'Dark Contrast', icon: <Moon {...iconProps} /> },
    { id: 'bright-contrast', label: 'Bright Contrast', icon: <Sun {...iconProps} /> },
    { id: 'low-saturation', label: 'Low Saturation', icon: <Droplet {...iconProps} /> },
    { id: 'high-saturation', label: 'High Saturation', icon: <Droplet className="w-8 h-8 mx-auto fill-current" /> },
    { id: 'contrast', label: 'Contrast Mode', icon: <Contrast {...iconProps} /> },
  ];

  const colorTabKeyMap = { backgrounds: 'background', headings: 'heading', contents: 'content' };
  const colorTabKey = colorTabKeyMap[activeColorTab];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-start" onClick={onClose}>
      <div className="w-full max-w-sm h-full bg-gray-900/90 shadow-2xl flex flex-col text-white" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-gray-700 bg-black/50 flex justify-between items-center">
          <h2 className="text-xl font-bold">Accessibility</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700"><X className="w-6 h-6" /></button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <CollapsibleSection title="Color Adjustment" isOpen={openSections.color} onToggle={() => setOpenSections(s => ({...s, color: !s.color}))}>
            <div className="grid grid-cols-3 gap-2">
              {colorAdjustments.map(item => <AccessibilityIcon key={item.id} icon={item.icon} label={item.label} isActive={settings.colorMode === item.id} onClick={() => handleColorModeChange(item.id)} />)}
            </div>
          </CollapsibleSection>
          <div className="border-b border-gray-700 p-4">
            <h3 className="font-semibold text-gray-100 mb-3">Custom Color</h3>
            <div className="bg-black/20 p-3 rounded-lg border border-gray-700">
              <div className="flex border-b border-gray-700 mb-3">
                {['backgrounds', 'headings', 'contents'].map(tab => (
                  <button key={tab} onClick={() => setActiveColorTab(tab)} className={`capitalize px-4 py-2 text-sm font-medium transition-colors ${activeColorTab === tab ? 'border-b-2 border-secondary text-secondary' : 'text-gray-400 hover:text-white'}`}>{tab}</button>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="color-picker" className="text-sm capitalize">{activeColorTab}</label>
                <input id="color-picker" type="color" value={settings.customColors[colorTabKey] || '#000000'} onChange={(e) => handleColorChange(activeColorTab, e.target.value)} className="w-24 h-8 p-0 border-none rounded cursor-pointer bg-transparent" />
              </div>
              <button onClick={resetColors} className="mt-4 w-full flex items-center justify-center text-sm text-secondary hover:underline"><Undo2 className="w-4 h-4 mr-2" />Reset colors</button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-black/30 border-t border-gray-700">
          <button onClick={() => onSettingsChange(initialSettings)} className="w-full px-4 py-2 bg-red-600 text-white rounded-md text-sm font-semibold hover:bg-red-700">Turn Off All</button>
        </div>
      </div>
    </div>
  );
};

// --- GLAVNA IZVOŽENA KOMPONENTA ---
const AccessibilityProvider = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(initialSettings);

  useEffect(() => {
    const root = document.documentElement;
    
    // Posodobljeno: Namesto background-color, nastavimo background-image
    // To prepreči, da bi drugi gradienti prekrili našo barvo.
    const bgColor = settings.customColors.background;
    root.style.setProperty('--bg-image', `linear-gradient(to bottom, ${bgColor}, ${bgColor})`);
    
    root.style.setProperty('--heading-color', settings.customColors.heading);
    root.style.setProperty('--content-color', settings.customColors.content);
    
    let filter = '';
    let bgImageOverride = '';

    switch(settings.colorMode) {
        case 'monochrome': filter = 'grayscale(100%)'; break;
        case 'low-saturation': filter = 'saturate(50%)'; break;
        case 'high-saturation': filter = 'saturate(200%)'; break;
        case 'dark-contrast': 
            bgImageOverride = 'linear-gradient(to bottom, #000000, #000000)';
            root.style.setProperty('--content-color', '#FFFFFF');
            break;
        case 'bright-contrast': 
            bgImageOverride = 'linear-gradient(to bottom, #FFFFFF, #FFFFFF)';
            root.style.setProperty('--content-color', '#000000');
            break;
        case 'contrast': filter = 'contrast(150%)'; break;
    }
    
    if (bgImageOverride) {
        root.style.setProperty('--bg-image', bgImageOverride);
    }
    
    root.style.filter = filter;

    return () => {
        root.style.removeProperty('--bg-image');
        root.style.removeProperty('--heading-color');
        root.style.removeProperty('--content-color');
        root.style.filter = 'none';
    }
  }, [settings]);

  return ReactDOM.createPortal(
    <>
      <style>{`
        body, .root-app-container {
          /* Uporabimo --bg-image namesto background-color */
          background-image: var(--bg-image);
          color: var(--content-color, #a0a0a0);
          transition: color 0.3s; /* Odstranimo prehod za ozadje, ker je slika */
        }
        h1, h2, h3, h4, h5, h6 {
          color: var(--heading-color, #ffffff);
        }
      `}</style>
      <button onClick={() => setIsMenuOpen(true)} className="fixed bottom-5 left-5 bg-secondary text-black p-4 rounded-full shadow-lg hover:bg-primary z-[99998]" aria-label="Odpri meni dostopnosti">
        <Eye className="w-8 h-8" />
      </button>

      {isMenuOpen && (
        <AccessibilityMenu 
          onClose={() => setIsMenuOpen(false)} 
          settings={settings}
          onSettingsChange={setSettings}
        />
      )}
    </>,
    document.body
  );
};

export default AccessibilityProvider;
