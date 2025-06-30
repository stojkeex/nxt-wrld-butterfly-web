import React, { useState, useEffect } from 'react';
import { ShoppingBag, Filter, Search } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import PurchaseModal from '../components/PurchaseModal';

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

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showNotice, setShowNotice] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    if (showNotice || showPasswordPrompt) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showNotice, showPasswordPrompt]);

  const handlePasswordSubmit = () => {
    if (passwordInput === 'Mikerike123') {
      setShowPasswordPrompt(false);
      setShowNotice(true);
      setTimeout(() => {
        setShowNotice(false);
      }, 30000);
    } else {
      alert('Incorrect password.');
    }
  };

  const products: Product[] = [
    {
      id: 1,
      name: "NXT WRLD T-SHIRT",
      price: "$15,00",
      category: "T-SHIRTS",
      image: "/nxtwrldtshirt.webp",
      images: ["/nxtwrldtshirt.webp", "/nxtwrldtshirt2.webp"],
      description: "Comfortable hoodie with neon details, perfect for urban lifestyle.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black"],
      material: "80% cotton, 20% polyester",
      care: "Machine wash at 30°C, no bleach"
    },
    {
      id: 2,
      name: "NXT WRLD T-SHIRT",
      price: "$15,00",
      category: "T-SHIRTS",
      image: "/nxtwrldtshirtwhite.webp",
      images: ["/nxtwrldtshirtwhite.webp", "/nxtwrldtshirtwhite2.webp"],
      description: "Futuristic joggers with reflective elements for maximum style.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White"],
      material: "80% polyester",
      care: "Machine wash at 30°C, no bleach"
    },
    {
      id: 3,
      name: "NXT WRLD HOODIE",
      price: "15,00$",
      category: "HOODIES",
      image: "/nxtwrldhoodie2.webp",
      images: ["/nxtwrldhoodie2.webp", "/nxtwrldhoodie.webp"],
      description: "Futuristic joggers with reflective elements for maximum style.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black"],
      material: "80% polyester",
      care: "Machine wash at 30°C, no bleach"
    }
  ];

  const categories = ["ALL", "HOODIES", "PANTS", "T-SHIRTS", "JACKETS", "SHOES", "ACCESSORIES"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handlePurchaseClick = () => {
    setShowPurchaseModal(true);
  };

  return (
    <div className="min-h-screen pt-24 relative">
      {/* Password Prompt */}
      {showPasswordPrompt && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-white text-2xl md:text-3xl font-bebas mb-4">Enter Access Password</h2>
          <input
            type="password"
            className="mb-4 px-4 py-2 rounded-md bg-gray-800 text-white w-full max-w-sm"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Password"
          />
          <button
            onClick={handlePasswordSubmit}
            className="bg-primary text-black px-6 py-2 rounded-md font-space hover:opacity-90"
          >
            Enter
          </button>
        </div>
      )}

      {/* Warning Overlay */}
      {showNotice && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-red-500 text-3xl md:text-4xl font-bebas animate-pulse mb-6">STRICTLY CONFIDENTIAL</h2>
          <p className="text-gray-200 text-lg md:text-xl font-space max-w-2xl mb-8">
            This page is private and must not be shared under any circumstances. Sharing this link violates our policies and will result in legal action against the individual responsible.
          </p>
          <button
            onClick={() => setShowNotice(false)}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-space font-semibold animate-pulse"
          >
            I UNDERSTAND AND AGREE
          </button>
        </div>
      )}

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onPurchaseClick={handlePurchaseClick}
      />

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Shop;
