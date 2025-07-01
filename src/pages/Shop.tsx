import React, { useState } from 'react';
import { ShoppingBag, Filter, Search } from 'lucide-react';

// Predpostavljamo, da sta ti komponenti v vaši strukturi projekta.
// import ProductModal from '../components/ProductModal';
// import PurchaseModal from '../components/PurchaseModal';

// --- PRIMERI KOMPONENT ---
// Placeholderji za modalna okna. Uporabite svoje dejanske komponente.
const ProductModal = ({ product, isOpen, onClose, onPurchaseClick }) => {
  if (!isOpen || !product) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>{product.name}</h2>
        <p style={{ color: 'var(--content-color)' }}>{product.description}</p>
        <button onClick={onPurchaseClick} className="mt-4 bg-primary text-black px-4 py-2 rounded">Purchase</button>
      </div>
    </div>
  );
};
const PurchaseModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>Confirm Purchase</h2>
        <p style={{ color: 'var(--content-color)' }}>You are about to buy {product.name}.</p>
        <button onClick={onClose} className="mt-4 bg-primary text-black px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};


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
      id: 1, name: "NXT WRLD T-SHIRT", price: "$50,00", category: "T-SHIRTS",
      image: "/nxtwrldtshirt.webp", images: ["/nxtwrldtshirt.webp", "/nxtwrldtshirt2.webp"],
      description: "Black T-Shirt made from love for better World!", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black"], material: "80% cotton, 20% polyester", care: "Machine wash at 30°C, no bleach"
    },
    {
      id: 2, name: "NXT WRLD T-SHIRT", price: "$50,00", category: "T-SHIRTS",
      image: "/nxtwrldtshirtwhite.webp", images: ["/nxtwrldtshirtwhite.webp", "/nxtwrldtshirtwhite2.webp"],
      description: "White T-Shirt made from love for better World!", sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White"], material: "80% polyester", care: "Machine wash at 30°C, no bleach"
    },
    {
      id: 3, name: "NXT WRLD EXCLUSIVE", price: "$120,00", category: "T-SHIRTS",
      image: "/nxtwrldtshirtexclusive.webp", images: ["/nxtwrldtshirtexclusive.webp"],
      description: "Limited Item (Only 100 Made) for better World!", sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Cameleon"], material: "80% polyester", care: "Machine wash at 30°C, no bleach"
    },
    {
      id: 4, name: "NXT WRLD HOODIE", price: "$80,00", category: "HOODIES",
      image: "/nxtwrldhoodie2.webp", images: ["/nxtwrldhoodie2.webp", "/nxtwrldhoodie.webp"],
      description: "Are you cool? Not without the NXT WRLD Hoodie!", sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black"], material: "80% polyester", care: "Machine wash at 30°C, no bleach"
    }
  ];

  const categories = ["ALL", "HOODIES", "PANTS", "T-SHIRTS", "JACKETS", "SHOES", "ACCESSORIES", "EXCLUSIVE"];

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
    <div 
      className="min-h-screen pt-24"
      style={{ 
        backgroundImage: 'var(--bg-image)', 
        color: 'var(--content-color)' 
      }}
    >
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wider text-center mb-8" style={{ color: 'var(--heading-color)' }}>
            <span className="text-gradient-primary">NXT</span> SHOP
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
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
                style={{color: 'var(--heading-color)'}}
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
                    className={`px-4 py-2 font-space text-sm tracking-wider transition-colors rounded-md ${
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
                      <h3 className="font-bebas text-xl tracking-wider" style={{ color: 'var(--heading-color)' }}>{product.name}</h3>
                      <p className="text-sm">{product.category}</p>
                    </div>
                    <span className="text-gradient-primary font-space font-bold">{product.price}</span>
                  </div>
                  <p className="text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">
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
              <p className="text-xl">No products found for your search term.</p>
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
