
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
      handle: '@nxtworld.official',
      action: () => window.open('https://instagram.com/nxtworld.official', '_blank'),
      description: 'Pošljite nam direktno sporočilo na Instagramu',
      color: 'hover:bg-pink-600'
    },
    {
      platform: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      handle: '+386 40 123 456',
      action: () => window.open('https://wa.me/38640123456', '_blank'),
      description: 'Kontaktirajte nas preko WhatsApp',
      color: 'hover:bg-green-600'
    },
    {
      platform: 'Email',
      icon: <Mail size={24} />,
      handle: 'shop@nxtworld.com',
      action: () => window.open('mailto:shop@nxtworld.com?subject=Naročilo: ' + product.name, '_blank'),
      description: 'Pošljite nam email z vašim naročilom',
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
      <div className="relative w-full max-w-2xl glass-card">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 glass-card p-2 hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-bebas text-4xl tracking-wider mb-4">
              KUPITE <span className="text-primary">VIA</span>
            </h2>
            <div className="glass-card p-4 mb-6">
              <h3 className="font-bebas text-xl tracking-wider">{product.name}</h3>
              <p className="text-primary font-space font-bold text-lg">{product.price}</p>
            </div>
            <p className="text-gray-300">
              Izberite kanal za dokončanje nakupa. Naš tim vam bo pomagal z vašim naročilom.
            </p>
          </div>

          {/* Purchase Options */}
          <div className="space-y-4">
            {purchaseOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className={`w-full glass-card p-6 ${option.color} transition-all duration-300 group hover:scale-105`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bebas text-xl tracking-wider">{option.platform}</h3>
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
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              💝 Brezplačna dostava za naročila nad 50€
            </p>
            <p className="text-gray-400 text-sm mt-1">
              🔄 14-dnevna garancija vračila
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
