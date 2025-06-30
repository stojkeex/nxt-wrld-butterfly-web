import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const LiveDrop = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge + Title */}
        <div className="inline-flex items-center bg-red-600 text-white px-4 py-1 rounded-full uppercase tracking-wide text-xs font-bold mb-4">
          <Flame size={16} className="mr-2" /> Live Drop
        </div>
        <h2 className="font-bebas text-5xl tracking-wider mb-4">
          LIMITED <span className="text-primary">DROP</span>
        </h2>
        <p className="text-gray-400 font-space mb-10">
          Coming Soon...
        </p>

        {/* Product Card */}
        <motion.div 
          whileHover={{ scale: 1.03 }} 
          className="glass-card p-6 sm:flex items-center gap-6 max-w-3xl mx-auto"
        >
          {/* Product Image */}
          <div className="sm:w-1/2 mb-6 sm:mb-0">
            <img 
              src="/live-drop.png" // ← zamenjaj to pot s tvojo sliko
              alt="Live Drop Item"
              className="rounded-lg w-full object-cover h-64 sm:h-auto"
            />
          </div>

          {/* Info */}
          <div className="sm:w-1/2 text-left space-y-4">
            <h3 className="font-bebas text-3xl tracking-wider">NXT WRLD - Exlusive</h3>
            <p className="text-gray-300 font-space text-sm leading-relaxed">
              Coming in 11.11.2025!
            </p>
            <Link 
              to="/shop"
              className="inline-block bg-primary text-black px-6 py-3 font-bebas tracking-wider hover:bg-secondary transition-colors text-sm"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LiveDrop;
