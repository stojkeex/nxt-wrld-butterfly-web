import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Droplet, Eye, Volume2, Type, CircleDot, Palette, Monitor, Contrast, ChevronDown, X, Languages, Accessibility, Keyboard, Route, Mic, Undo2 } from 'lucide-react';

// --- TIPI PODATKOV (TYPESCRIPT) ---
// Določimo tipe za nastavitve dostopnosti za večjo varnost in preglednost kode.
interface ColorSettings {
  background: string;
  heading: string;
  content: string;
}

interface AccessibilitySettings {
  screenReader: boolean;
  keyboardNav: boolean;
  smartNav: boolean;
  textReader: boolean;
  voiceCommands: boolean;
  colorMode: 'normal' | 'monochrome' | 'dark-contrast' | 'bright-contrast' | 'low-saturation' | 'high-saturation' | 'contrast';
  customColors: ColorSettings;
}

// --- Ikone kot Komponente ---
// Uporabimo komponente za ikone za lažjo uporabo in stiliziranje.
const AccessibilityIcon = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-2 p-3 text-center border rounded-lg transition-all duration-200 w-full h-full ${
      isActive ? 'bg-blue-600 text-white border-blue-700 shadow-lg' : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
    }`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 dark:border-gray-600">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      <span>{title}</span>
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
      />
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
          {children}
        </div>
      </div>
    </div>
  </div>
);

// --- GLAVNA KOMPONENTA MENIJA ---
const AccessibilityMenu = ({ onClose, settings, onSettingsChange }) => {
  const [openSections, setOpenSections] = useState({
    navigation: true,
    color: true,
    profiles: false,
  });
  
  const [activeColorTab, setActiveColorTab] = useState('backgrounds');

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleColorChange = (type, value) => {
    onSettingsChange({
      ...settings,
      customColors: {
        ...settings.customColors,
        [type]: value,
      },
    });
  };

  const resetColors = () => {
    onSettingsChange({
      ...settings,
      customColors: {
        background: '#ffffff',
        heading: '#000000',
        content: '#000000',
      },
    });
  };
  
  const handleSettingToggle = (key) => {
     onSettingsChange(prev => ({...prev, [key]: !prev[key]}));
  }

  const handleColorModeChange = (mode) => {
    onSettingsChange(prev => ({...prev, colorMode: prev.colorMode === mode ? 'normal' : mode}));
  }

  // Ikone, ki jih bomo uporabili v meniju
  const iconProps = { className: "w-8 h-8 mx-auto", strokeWidth: 1.5 };

  const navigationAdjustments = [
    { id: 'screenReader', label: 'Screen Reader Adjustment', icon: <Accessibility {...iconProps} />, onClick: () => handleSettingToggle('screenReader') },
    { id: 'keyboardNav', label: 'Keyboard Navigation', icon: <Keyboard {...iconProps} />, onClick: () => handleSettingToggle('keyboardNav') },
    { id: 'smartNav', label: 'Smart Navigation', icon: <Route {...iconProps} />, onClick: () => handleSettingToggle('smartNav') },
    { id: 'textReader', label: 'Text Reader', icon: <Volume2 {...iconProps} />, onClick: () => handleSettingToggle('textReader') },
    { id: 'voiceCommands', label: 'Voice Commands', icon: <Mic {...iconProps} />, onClick: () => handleSettingToggle('voiceCommands') },
  ];

  const colorAdjustments = [
    { id: 'monochrome', label: 'Monochrome', icon: <Monitor {...iconProps} />, onClick: () => handleColorModeChange('monochrome') },
    { id: 'dark-contrast', label: 'Dark High-Contrast', icon: <Moon {...iconProps} />, onClick: () => handleColorModeChange('dark-contrast') },
    { id: 'bright-contrast', label: 'Bright High-Contrast', icon: <Sun {...iconProps} />, onClick: () => handleColorModeChange('bright-contrast') },
    { id: 'low-saturation', label: 'Low saturation', icon: <Droplet {...iconProps} />, onClick: () => handleColorModeChange('low-saturation') },
    { id: 'high-saturation', label: 'High saturation', icon: <Droplet className="w-8 h-8 mx-auto fill-current" strokeWidth={1.5} />, onClick: () => handleColorModeChange('high-saturation') },
    { id: 'contrast', label: 'Contrast Mode', icon: <Contrast {...iconProps} />, onClick: () => handleColorModeChange('contrast') },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-start" onClick={onClose}>
      <div
        className="w-full max-w-sm h-full bg-white dark:bg-gray-800 shadow-2xl flex flex-col text-gray-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- GLAVA MENIJA --- */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-black text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Accessibility</h2>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-sm">
              <Languages className="w-5 h-5" />
              <span>English (American)</span>
            </button>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- VSEBINA MENIJA (z drsnikom) --- */}
        <div className="flex-grow overflow-y-auto">
          <CollapsibleSection title="Accessibility Profiles" isOpen={openSections.profiles} onToggle={() => toggleSection('profiles')}>
             <p className="text-sm text-gray-600 dark:text-gray-400">Tukaj lahko dodate vnaprej določene profile dostopnosti.</p>
          </CollapsibleSection>

          <CollapsibleSection title="Navigation Adjustment" isOpen={openSections.navigation} onToggle={() => toggleSection('navigation')}>
            <div className="grid grid-cols-3 gap-2">
              {navigationAdjustments.map(item => (
                <AccessibilityIcon key={item.id} icon={item.icon} label={item.label} isActive={settings[item.id]} onClick={item.onClick} />
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Color Adjustment" isOpen={openSections.color} onToggle={() => toggleSection('color')}>
            <div className="grid grid-cols-3 gap-2">
               {colorAdjustments.map(item => (
                <AccessibilityIcon key={item.id} icon={item.icon} label={item.label} isActive={settings.colorMode === item.id} onClick={item.onClick} />
              ))}
            </div>
          </CollapsibleSection>

          {/* --- BARVE PO MERI --- */}
          <div className="border-b border-gray-200 dark:border-gray-600 p-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Custom Color</h3>
            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
              <p className="text-sm font-medium mb-2">Change the site's colors</p>
              <div className="flex border-b border-gray-200 dark:border-gray-600 mb-3">
                {['backgrounds', 'headings', 'contents'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveColorTab(tab)}
                    className={`capitalize px-4 py-2 text-sm font-medium transition-colors ${
                      activeColorTab === tab
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="space-y-3">
                 <div className="flex items-center justify-between">
                    <label htmlFor="color-picker" className="text-sm capitalize">{activeColorTab}</label>
                    <input 
                        id="color-picker"
                        type="color" 
                        value={settings.customColors[activeColorTab.slice(0, -1)] || ''} 
                        onChange={(e) => handleColorChange(activeColorTab.slice(0, -1), e.target.value)}
                        className="w-24 h-8 p-0 border-none rounded cursor-pointer bg-transparent"
                    />
                 </div>
                 {/* Placeholder for color slider */}
                 <div className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full"></div>
              </div>

              <button onClick={resetColors} className="mt-4 w-full flex items-center justify-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                <Undo2 className="w-4 h-4 mr-2" />
                Reset colors
              </button>
            </div>
          </div>
        </div>

        {/* --- NOGA MENIJA --- */}
        <div className="p-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <button onClick={() => onSettingsChange(initialSettings)} className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-semibold hover:bg-red-700">Turn Off</button>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:underline text-gray-600 dark:text-gray-300">Accessibility Statement</a>
              <a href="#" className="hover:underline text-gray-600 dark:text-gray-300">Send Feedback</a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">Powered by EqualWeb</p>
        </div>
      </div>
    </div>
  );
};


// --- GLAVNA APLIKACIJA ---
// Ta komponenta prikazuje, kako uporabiti meni dostopnosti.
const initialSettings: AccessibilitySettings = {
  screenReader: false,
  keyboardNav: false,
  smartNav: false,
  textReader: false,
  voiceCommands: false,
  colorMode: 'normal',
  customColors: {
    background: '#ffffff',
    heading: '#111827',
    content: '#374151',
  },
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(initialSettings);

  // Funkcija za posodabljanje nastavitev
  const handleSettingsChange = (newSettings) => {
    if (typeof newSettings === 'function') {
        setSettings(newSettings);
    } else {
        setSettings(prev => ({ ...prev, ...newSettings }));
    }
  };
  
  // Uporaba nastavitev na glavni strani (simulacija)
  const getAppStyle = useCallback(() => {
    let style: React.CSSProperties = {
        transition: 'background-color 0.3s, color 0.3s',
        backgroundColor: settings.customColors.background,
        color: settings.customColors.content,
    };
    let filter = '';

    switch(settings.colorMode) {
        case 'monochrome': filter += ' grayscale(100%)'; break;
        case 'low-saturation': filter += ' saturate(50%)'; break;
        case 'high-saturation': filter += ' saturate(200%)'; break;
        case 'dark-contrast':
            style.backgroundColor = '#121212';
            style.color = '#E0E0E0';
            break;
        case 'bright-contrast':
            style.backgroundColor = '#FFFFFF';
            style.color = '#000000';
            // Povečamo kontrast besedila, kar je težje simulirati samo z barvo
            break;
        case 'contrast': filter += ' contrast(150%)'; break;
    }
    
    if (filter) {
        style.filter = filter.trim();
    }

    return style;
  }, [settings]);
  
  const getHeadingStyle = useCallback(() => ({
    color: settings.customColors.heading
  }), [settings.customColors.heading]);

  return (
    <div style={getAppStyle()} className="min-h-screen font-sans">
      <div className="relative p-8">
        {/* Gumb za odpiranje menija */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed bottom-5 left-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-30"
          aria-label="Odpri meni dostopnosti"
        >
          <Eye className="w-8 h-8" />
        </button>

        {isMenuOpen && (
          <AccessibilityMenu 
            onClose={() => setIsMenuOpen(false)} 
            settings={settings}
            onSettingsChange={handleSettingsChange}
          />
        )}

       
      </div>
    </div>
  );
}
