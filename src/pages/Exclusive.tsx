import React from 'react';
import { Sparkles, Lock, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Exclusive = () => {
  const features = [
    {
      icon: Lock,
      title: 'Private Access',
      description: 'Get behind the scenes with content and drops unavailable to the public.',
    },
    {
      icon: Star,
      title: 'Elite Drops',
      description: 'Be first to grab premium and limited edition releases before anyone else.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Priority',
      description: 'Exclusive customers enjoy priority security, support, and processing.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center py-20 max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-bebas tracking-widest mb-6">
          <span className="text-gradient-primary">EXCLUSIVE</span> ACCESS
        </h1>
        <p className="text-xl text-gray-300 font-space max-w-2xl mx-auto">
          Welcome to the inner circle. Experience fashion the world doesn’t know exists yet.
        </p>
      </motion.section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-10 text-center hover:scale-105 transition-transform duration-300"
            >
              <feature.icon size={48} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bebas tracking-wider mb-3 text-gradient-primary">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300 font-space leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Showcase */}
      <motion.section
        className="py-24 bg-white/5 backdrop-blur-xl border-y border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bebas text-gradient-primary mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            THE FUTURE IS NOW
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg font-space mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Limited drops, AR access, smart-fabrics, and more. Only available through NXT WRLD EXCLUSIVE.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6"
              >
                <h4 className="text-xl font-bebas text-gradient-primary mb-2">Drop #{i + 1}</h4>
                <p className="text-sm text-gray-300 font-space">
                  Preview of a future-exclusive piece or experience with immersive tech, collabs, and unreleased styling.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Exclusive;
