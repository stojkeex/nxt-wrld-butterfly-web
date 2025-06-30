// src/components/MobileMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 text-white flex flex-col items-center justify-center transition-all duration-300">
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-primary transition">
        <X size={28} />
      </button>
      <nav className="space-y-8 text-3xl font-bebas tracking-widest text-center">
        <Link to="/" onClick={onClose} className="hover:text-primary transition">Home</Link>
        <Link to="/shop" onClick={onClose} className="hover:text-primary transition">Shop</Link>
        <Link to="/about" onClick={onClose} className="hover:text-primary transition">About</Link>
        <Link to="/contact" onClick={onClose} className="hover:text-primary transition">Contact</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
