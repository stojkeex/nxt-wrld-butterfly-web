
import React, { useState } from 'react';
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

  const products: Product[] = [
    {
      id: 1,
      name: "NXT WRLD T-SHIRT",
      price: "Not Yet",
      category: "T-SHIRTS",
      image: "/nxtwrldtshirt.webp",
      images: [
        "/nxtwrldtshirt.webp",
        "/nxtwrldtshirt2.webp"
      ],
      description: "Comfortable hoodie with neon details, perfect for urban lifestyle.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black"],
      material: "80% cotton, 20% polyester",
      care: "Machine wash at 30°C, no bleach"
    },
    {
      id: 2,
      name: "NXT WRLD T-SHIRT",
      price: "Not Yet",
      category: "T-SHIRTS",
      image: "/nxtwrldtshirtwhite.webp",
      images: [
        "/nxtwrldtshirtwhite.webp",
        "/nxtwrldtshirtwhite2.webp"
      ],
      description: "Futuristic joggers with reflective elements for maximum style.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White"],
      material: "80% polyester",
      care: "Machine wash at 30°C, no bleach"
    },
    {
      id: 3,
      name: "GALAXY TEE",
      price: "$39.99",
      category: "T-SHIRTS",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&h=800&fit=crop"
      ],
      description: "Soft t-shirt with galaxy print, made from organic cotton.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "White"],
      material: "100% organic cotton",
      care: "Machine wash at 30°C, turn inside out"
    },
    {
      id: 4,
      name: "FUTURE JACKET",
      price: "$159.99",
      category: "JACKETS",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=600&h=800&fit=crop"
      ],
      description: "Innovative jacket with water-resistant technology and modern design.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Military Green"],
      material: "Nylon with water-resistant coating",
      care: "Dry clean recommended"
    },
    {
      id: 5,
      name: "NEON SNEAKERS",
      price: "$119.99",
      category: "SHOES",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop"
      ],
      description: "Glowing sneakers with neon details for urban style.",
      sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
      colors: ["Black/Neon", "White/Pink", "Gray/Blue"],
      material: "Synthetic materials, rubber sole",
      care: "Clean with damp cloth"
    },
    {
      id: 6,
      name: "HOLOGRAM CAP",
      price: "$29.99",
      category: "ACCESSORIES",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=800&fit=crop"
      ],
      description: "Holographic cap with adjustable size and futuristic design.",
      sizes: ["One Size"],
      colors: ["Hologram", "Black/Hologram"],
      material: "100% cotton, holographic panel",
      care: "Hand wash only"
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
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wider text-center mb-8">
            <span className="text-primary">NXT</span> SHOP
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
                    <span className="text-primary font-space font-bold">{product.price}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {product.sizes.length} sizes
                    </span>
                    <ShoppingBag className="text-primary group-hover:scale-110 transition-transform" size={20} />
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
