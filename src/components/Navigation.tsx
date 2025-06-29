
import React, { useState } from 'react';
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
    { path: '/contact', label: 'CONTACT' }
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/8669a517-0f9f-4238-af67-ec96af8c379c.png" 
                alt="NXT WRLD Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-bebas text-lg tracking-wider transition-colors hover:text-primary ${
                    isActivePath(item.path) ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={onSupportClick}
                className="flex items-center space-x-2 glass-card px-4 py-2 hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={18} />
                <span className="font-space text-sm">SUPPORT</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-card p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-white/10">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-bebas text-lg tracking-wider transition-colors hover:text-primary ${
                    isActivePath(item.path) ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  onSupportClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 glass-card px-4 py-2 hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={18} />
                <span className="font-space text-sm">SUPPORT</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
