import React from 'react';
import { ShoppingBag, Sparkles, Zap, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="min-h-screen flex items-center justify-center px-4 relative"
      >
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
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 tracking-wider">
            THE <span className="text-secondary">FUTURE</span> IS NOW
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Zap className="mx-auto mb-6 text-primary" size={48} />,
              title: 'INNOVATIVE DESIGN',
              desc: 'Cutting-edge fashion that pushes the boundaries of traditional streetwear.'
            }, {
              icon: <Sparkles className="mx-auto mb-6 text-secondary" size={48} />,
              title: 'PREMIUM QUALITY',
              desc: 'Only the finest materials and craftsmanship go into every piece we create.'
            }, {
              icon: <ShoppingBag className="mx-auto mb-6 text-primary" size={48} />,
              title: 'LIMITED DROPS',
              desc: 'Exclusive collections released in limited quantities for true collectors.'
            }].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 text-center hover:bg-white/10 transition-all"
              >
                {f.icon}
                <h3 className="font-bebas text-2xl mb-4 tracking-wider">{f.title}</h3>
                <p className="text-gray-300 font-space">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🔥 Live Drop Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-1 rounded-full uppercase tracking-wide text-xs font-bold mb-4">
              <Flame size={16} className="mr-2" /> Live Drop
            </div>
            <h2 className="font-bebas text-5xl tracking-wider">
              NEW <span className="text-primary">LIMITED EDITION</span>
            </h2>
            <p className="text-gray-400 mt-4 font-space max-w-xl mx-auto">
              Discover the latest drop — available now while stocks last.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="glass-card p-6 group transition-all"
              >
                <div className="h-60 bg-white/5 rounded-lg mb-4 group-hover:shadow-xl transition-shadow" />
                <h3 className="font-bebas text-xl tracking-wider mb-1">Drop #{i}</h3>
                <p className="text-gray-300 text-sm font-space mb-3">Limited release streetwear item</p>
                <Link 
                  to="/shop"
                  className="text-primary hover:underline text-sm font-space"
                >
                  View Item →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-12"
          >
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
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
