import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

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

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onPurchaseClick: () => void;
}

const ProductModal = ({ product, isOpen, onClose, onPurchaseClick }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handlePurchase = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color.');
      return;
    }
    onPurchaseClick();
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] glass-card overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 glass-card p-2 hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="h-64 lg:h-full relative overflow-hidden">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-2 hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-2 hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-space font-medium">{product.category}</span>
                  {/* Like/Share buttons removed */}
                </div>
                <h2 className="font-bebas text-3xl lg:text-4xl tracking-wider">{product.name}</h2>
                <p className="text-2xl text-primary font-space font-bold mt-2">{product.price}</p>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="font-space font-medium mb-3">SIZE</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 font-space text-sm border transition-colors ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-black'
                          : 'border-white/20 hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h4 className="font-space font-medium mb-3">COLOR</h4>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 font-space text-sm border transition-colors ${
                        selectedColor === color
                          ? 'border-secondary bg-secondary text-black'
                          : 'border-white/20 hover:border-secondary'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-space font-medium mb-2">MATERIAL</h4>
                  <p className="text-gray-300 text-sm">{product.material}</p>
                </div>
                <div>
                  <h4 className="font-space font-medium mb-2">CARE</h4>
                  <p className="text-gray-300 text-sm">{product.care}</p>
                </div>
              </div>

              {/* Purchase Button */}
              <button
                onClick={handlePurchase}
                className="w-full glass-card p-4 hover:bg-primary hover:text-black transition-all duration-300 group flex items-center justify-center space-x-3"
              >
                <ShoppingBag className="group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bebas text-lg tracking-wider">BUY NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
