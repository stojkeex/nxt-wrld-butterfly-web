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
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotice(false);
    }, 30000); // 30 seconds
    return () => clearTimeout(timer);
  }, []);

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

      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wider text-center mb-8">
            <span className="text-gradient-primary">NXT</span> SHOP
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Discover our latest collection of futuristic clothing and accessories
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full glass-card pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 font-space text-sm tracking-wider transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-black'
                        : 'glass-card hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="glass-card overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bebas text-xl tracking-wider">{product.name}</h3>
                      <p className="text-sm text-gray-400">{product.category}</p>
                    </div>
                    <span className="text-gradient-primary font-space font-bold">{product.price}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {product.sizes.length} sizes
                    </span>
                    <ShoppingBag className="text-gradient-primary group-hover:scale-110 transition-transform" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No products found for your search term.</p>
            </div>
          )}
        </div>
      </section>

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
