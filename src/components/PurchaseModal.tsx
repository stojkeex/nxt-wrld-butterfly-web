import React from 'react';
import { X, Instagram, Mail, MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  material: string;
  care: string;
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const PurchaseModal = ({ isOpen, onClose, product }: PurchaseModalProps) => {
  if (!isOpen || !product) return null;

  const purchaseOptions = [
    {
      platform: 'Instagram',
      icon: <Instagram size={24} />,
      handle: '@nxtwrld.wear',
      action: () => window.open('https://instagram.com/nxtwrld.wear', '_blank'),
      description: 'Send us a direct message on Instagram',
      color: 'hover:bg-pink-600'
    },
    {
      platform: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      handle: '+386 51 656 615',
      action: () => window.open('https://wa.me/38651656615', '_blank'),
      description: 'Contact us via WhatsApp',
      color: 'hover:bg-green-600'
    },
    {
      platform: 'Email',
      icon: <Mail size={24} />,
      handle: 'nxtwrld.wear@gmail.com',
     action: () => window.open('mailto:nxtwrld.wear@gmail.com?subject=Order: ' + product.name, '_blank'),
      description: 'Send us an email with your order',
      color: 'hover:bg-blue-600'
    }
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 glass-card p-2 hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8 text-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider mb-4">
              PURCHASE <span className="text-primary">VIA</span>
            </h2>
            <div className="glass-card p-4 mb-6">
              <h3 className="font-bebas text-lg sm:text-xl tracking-wider">{product.name}</h3>
              <p className="text-primary font-space font-bold text-base sm:text-lg">{product.price}</p>
            </div>
            <p className="text-gray-300 text-sm">
              Choose your preferred channel to complete your purchase. Our team will assist you.
            </p>
          </div>

          {/* Purchase Options */}
          <div className="space-y-4">
            {purchaseOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className={`w-full glass-card p-4 sm:p-6 ${option.color} transition-all duration-300 group hover:scale-105`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bebas text-lg sm:text-xl tracking-wider">{option.platform}</h3>
                    <p className="text-gray-300 text-sm">{option.handle}</p>
                    <p className="text-gray-400 text-xs mt-1">{option.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm">
            <p className="text-gray-400">
              💝 Free shipping on orders over 50€
            </p>
            <p className="text-gray-400 mt-1">
              🔄 14-day return guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
