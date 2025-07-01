import React, { useState, useCallback } from 'react';
import { ShoppingBag, Sparkles, Zap, Sun, Moon, Droplet, Eye, Volume2, Contrast, ChevronDown, X, Languages, Accessibility, Keyboard, Route, Mic, Undo2, Monitor } from 'lucide-react';
import { Link, BrowserRouter } from 'react-router-dom';

// --- TIPI PODATKOV (TYPESCRIPT) ---
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

// --- KOMPONENTE ZA MENI DOSTOPNOSTI ---

const AccessibilityIcon = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-2 p-3 text-center border rounded-lg transition-all duration-200 w-full h-full ${
      isActive ? 'bg-primary text-black border-primary-dark shadow-lg' : 'bg-white/5 border-gray-700 hover:bg-white/10'
    }`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-700">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-100 hover:bg-gray-700/50"
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
        <div className="p-4 bg-black/20">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const AccessibilityMenu = ({ onClose, settings, onSettingsChange, initialSettings }) => {
  const [openSections, setOpenSections] = useState({
    navigation: true,
    color: true,
    profiles: false,
  });
  const [activeColorTab, setActiveColorTab] = useState('backgrounds');

  const toggleSection = (section) => setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));

  const handleColorChange = (type, value) => {
    const keyMap = { backgrounds: 'background', headings: 'heading', contents: 'content' };
    onSettingsChange(prev => ({
      ...prev,
      customColors: { ...prev.customColors, [keyMap[type]]: value },
    }));
  };
  
  const resetColors = () => onSettingsChange(prev => ({ ...prev, customColors: initialSettings.customColors }));
  const handleSettingToggle = (key) => onSettingsChange(prev => ({ ...prev, [key]: !prev[key] }));
  const handleColorModeChange = (mode) => onSettingsChange(prev => ({ ...prev, colorMode: prev.colorMode === mode ? 'normal' : mode }));

  const iconProps = { className: "w-8 h-8 mx-auto", strokeWidth: 1.5 };
  const navigationAdjustments = [
    { id: 'screenReader', label: 'Screen Reader', icon: <Accessibility {...iconProps} /> },
    { id: 'keyboardNav', label: 'Keyboard Nav', icon: <Keyboard {...iconProps} /> },
    { id: 'smartNav', label: 'Smart Nav', icon: <Route {...iconProps} /> },
    { id: 'textReader', label: 'Text Reader', icon: <Volume2 {...iconProps} /> },
    { id: 'voiceCommands', label: 'Voice Commands', icon: <Mic {...iconProps} /> },
  ];
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
      <div className="w-full max-w-sm h-full bg-gray-900/80 shadow-2xl flex flex-col text-white" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-gray-700 bg-black/50 flex justify-between items-center">
          <h2 className="text-xl font-bold">Accessibility</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700"><X className="w-6 h-6" /></button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <CollapsibleSection title="Color Adjustment" isOpen={openSections.color} onToggle={() => toggleSection('color')}>
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

// --- GLAVNA KOMPONENTA STRANI ---

const initialSettings: AccessibilitySettings = {
  screenReader: false, keyboardNav: false, smartNav: false, textReader: false, voiceCommands: false,
  colorMode: 'normal',
  customColors: { background: '#0a0a0a', heading: '#ffffff', content: '#a0a0a0' },
};

const BlogSection = () => <div className="py-20"><h2 className="font-bebas text-5xl text-center">From the Blog</h2></div>;
const LiveDrop = () => <div className="py-20"><h2 className="font-bebas text-5xl text-center">Live Drop</h2></div>;
const NewsletterModal = () => null;

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(initialSettings);

  const handleSettingsChange = (newSettings) => {
    if (typeof newSettings === 'function') setSettings(newSettings);
    else setSettings(prev => ({ ...prev, ...newSettings }));
  };

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
        case 'dark-contrast': style.backgroundColor = '#000000'; style.color = '#FFFFFF'; break;
        case 'bright-contrast': style.backgroundColor = '#FFFFFF'; style.color = '#000000'; break;
        case 'contrast': filter += ' contrast(150%)'; break;
    }
    if (filter) style.filter = filter.trim();
    return style;
  }, [settings]);
  
  const getHeadingStyle = useCallback(() => ({
    color: settings.customColors.heading
  }), [settings.customColors.heading]);

  return (
    <div style={getAppStyle()} className="min-h-screen text-white">
      <button onClick={() => setIsMenuOpen(true)} className="fixed bottom-5 left-5 bg-secondary text-black p-4 rounded-full shadow-lg hover:bg-primary z-40" aria-label="Odpri meni dostopnosti">
        <Eye className="w-8 h-8" />
      </button>

      {isMenuOpen && (
        <AccessibilityMenu 
          onClose={() => setIsMenuOpen(false)} 
          settings={settings}
          onSettingsChange={handleSettingsChange}
          initialSettings={initialSettings}
        />
      )}

      <NewsletterModal />
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 style={getHeadingStyle()} className="font-sans-serif text-8xl md:text-9xl lg:text-[12rem] tracking-wider mb-8">
            <span className="text-gradient-primary">NXT</span>WRLD
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-space max-w-2xl mx-auto leading-relaxed" style={{color: settings.customColors.content}}>
            Step into the future of fashion. Where innovation meets style in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/shop" className="glass-card px-8 py-4 hover:bg-primary hover:text-black transition-all duration-300 group flex items-center space-x-3">
              <ShoppingBag className="group-hover:scale-110 transition-transform" size={24} />
              <span className="font-bebas text-xl tracking-wider">EXPLORE COLLECTION</span>
            </Link>
            <Link to="/about" className="glass-card px-8 py-4 hover:bg-white/20 transition-colors flex items-center space-x-3">
              <Sparkles size={24} />
              <span className="font-bebas text-xl tracking-wider">DISCOVER STORY</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 style={getHeadingStyle()} className="font-bebas text-5xl md:text-6xl text-center mb-16 tracking-wider">
            THE <span className="text-gradient-primary">FUTURE</span> IS NOW
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:bg-white/10 transition-colors">
              <Zap className="mx-auto mb-6 text-secondary" size={48} />
              <h3 style={getHeadingStyle()} className="font-bebas text-2xl mb-4 tracking-wider">INNOVATIVE DESIGN</h3>
              <p className="font-space" style={{color: settings.customColors.content}}>
                Cutting-edge fashion that pushes the boundaries of traditional streetwear.
              </p>
            </div>
            <div className="glass-card p-8 text-center hover:bg-white/10 transition-colors">
              <Sparkles className="mx-auto mb-6 text-secondary" size={48} />
              <h3 style={getHeadingStyle()} className="font-bebas text-2xl mb-4 tracking-wider">PREMIUM QUALITY</h3>
              <p className="font-space" style={{color: settings.customColors.content}}>
                Only the finest materials and craftsmanship go into every piece we create.
              </p>
            </div>
            <div className="glass-card p-8 text-center hover:bg-white/10 transition-colors">
              <ShoppingBag className="mx-auto mb-6 text-secondary" size={48} />
              <h3 style={getHeadingStyle()} className="font-bebas text-2xl mb-4 tracking-wider">LIMITED DROPS</h3>
              <p className="font-space" style={{color: settings.customColors.content}}>
                Exclusive collections released in limited quantities for true collectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />
      <LiveDrop />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 style={getHeadingStyle()} className="font-bebas text-4xl md:text-5xl mb-6 tracking-wider">
              JOIN THE <span className="text-gradient-primary">REVOLUTION</span>
            </h2>
            <p className="text-xl mb-8 font-space" style={{color: settings.customColors.content}}>
              Be part of the next generation of fashion enthusiasts
            </p>
            <Link to="/shop" className="inline-flex items-center space-x-3 bg-primary text-black px-8 py-4 hover:bg-secondary transition-colors font-bebas text-xl tracking-wider btn-gradient-primary">
              <span>SHOP NOW</span>
              <ShoppingBag size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// POPRAVEK: Glavna komponenta, ki vključuje BrowserRouter
// Napaka se je zgodila, ker komponente <Link> ne morete uporabljati brez nadrejene komponente <BrowserRouter>.
// Ta nova komponenta 'App' ovije 'HomePage' in tako reši težavo.
const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;

