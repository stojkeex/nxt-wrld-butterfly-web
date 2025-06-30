import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';

interface NavigationProps {
  onSupportClick: () => void;
}

const Navigation = ({ onSupportClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/shop', label: 'SHOP' },
    { path: '/contact', label: 'CONTACT' },
    { path: '/terms', label: 'TERMS' },
    { path: '/exclusive', label: 'EXCLUSIVE' },
    { path: '/widwedihweidwhedwieduhweuid', label: '*' }
  ];

  const isActivePath = (path: string) => location.pathname === path;

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/ccb51599-35ea-4864-918e-4d6f9cbb43ea.png"
              alt="NXT WRLD Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bebas text-lg tracking-wider transition-colors hover:text-gradient-primary ${
                  isActivePath(item.path) ? 'text-gradient-primary' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Hamburger icon (mobile only) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden glass-card p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-10 transition-all duration-300">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gradient-primary transition"
          >
            <X size={32} />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-bebas tracking-widest transition hover:text-gradient-primary ${
                isActivePath(item.path) ? 'text-gradient-primary' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Live Support Button */}
      <button
        onClick={onSupportClick}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 glass-card p-4 hover:bg-primary hover:text-black transition-all duration-300 group shadow-2xl rounded-l-lg rounded-r-none"
        title="Live Support"
      >
        <MessageCircle className="group-hover:scale-110 transition-transform" size={24} />
      </button>
    </>
  );
};

export default Navigation;
