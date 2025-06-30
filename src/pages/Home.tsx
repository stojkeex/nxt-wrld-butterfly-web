import React from 'react';
import { ShoppingBag, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import LiveDrop from '../components/LiveDrop'; // ✅ pot popravi glede na lokacijo

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-bebas text-8xl md:text-9xl lg:text-[12rem] tracking-wider mb-8">
            <span className="text-primary">NXT</span> WRLD
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-space max-w-2xl mx-auto leading-relaxed">
            Step into the future of fashion. Where innovation meets style in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/shop"
              className="glass-card px-8 py-4 hover:bg-primary hover:text-black transition-all duration-300 group flex items-center space-x-3"
            >
              <ShoppingBag className="group-hover:scale-110 transition-transform" size={24} />
              <span className="font-bebas text-xl tracking-wider">EXPLORE COLLECTION</span>
            </Link>
            <Link 
              to="/about"
              className="glass-card px-8 py-4 hover:bg-white/20 transition-colors flex items-center space-x-3"
            >
              <Sparkles size={24} />
              <span className="font-bebas text-xl tracking-wider">DISCOVER STORY</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 tracking-wider">
            THE <span className="text-secondary">FUTURE</span> IS NOW
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:bg-white/10 transition-colors">
              <Zap className="mx-auto mb-6 text-primary" size={48} />
              <h3 className="font-bebas text-2xl mb-4 tracking-wider">INNOVATIVE DESIGN</h3>
              <p className="text-gray-300 font-space">
                Cutting-edge fashion that pushes the boundaries of traditional streetwear.
              </p>
            </div>
            <div className="glass-card p-8 text-center hover:bg-white/10 transition-colors">
              <Sparkles className="mx-auto mb-6 text-secondary" size={48} />
              <h3 className="font-bebas text-2xl mb-4 tracking-wider">PREMIUM QUALITY</h3>
              <p className="text-gray-300 font-space">
                Only the finest materials and craftsmanship go into every piece we create.
              </p>
            </div>
            <div className="glass-card p-8 text-center hover:bg-white/10 transition-colors">
              <ShoppingBag className="mx-auto mb-6 text-primary" size={48} />
              <h3 className="font-bebas text-2xl mb-4 tracking-wider">LIMITED DROPS</h3>
              <p className="text-gray-300 font-space">
                Exclusive collections released in limited quantities for true collectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Live Drop Section */}
      <LiveDrop />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="font-bebas text-4xl md:text-5xl mb-6 tracking-wider">
              JOIN THE <span className="text-primary">REVOLUTION</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-space">
              Be part of the next generation of fashion enthusiasts
            </p>
            <Link 
              to="/shop"
              className="inline-flex items-center space-x-3 bg-primary text-black px-8 py-4 hover:bg-secondary transition-colors font-bebas text-xl tracking-wider"
            >
              <span>SHOP NOW</span>
              <ShoppingBag size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
