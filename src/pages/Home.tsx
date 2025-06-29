
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Globe } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Star className="text-primary" size={32} />,
      title: "PREMIUM KVALITETA",
      description: "Vsak izdelek je skrbno izbran in preverjen za vrhunsko kakovost."
    },
    {
      icon: <Zap className="text-secondary" size={32} />,
      title: "HITRA DOSTAVA",
      description: "Hitro in zanesljivo dostavljamo po vsej Sloveniji."
    },
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "GLOBALNA MODA",
      description: "Najnovejši trendi iz celega sveta na enem mestu."
    }
  ];

  const showcaseItems = [
    {
      title: "STREETWEAR",
      description: "Urbani stili za moderno generacijo",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop"
    },
    {
      title: "PREMIUM",
      description: "Luksuzni kosi za posebne priložnosti",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=600&fit=crop"
    },
    {
      title: "ACCESSORIES",
      description: "Dopolni svoj stil z našimi dodatki",
      image: "https://images.unsplash.com/photo-1506629905607-0214999bd8ca?w=500&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <img 
            src="/lovable-uploads/8669a517-0f9f-4238-af67-ec96af8c379c.png" 
            alt="NXT WRLD Logo" 
            className="h-32 mx-auto mb-8"
          />
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider text-white">
            WELCOME TO THE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              NXT WRLD
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Odkrijte prihodnost mode z našimi edinstvenimi kolekcijami. 
            Kjer se srečajo stil, kakovost in inovacija.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/shop"
              className="glass-card px-8 py-4 hover:bg-primary hover:text-black transition-all duration-300 group flex items-center justify-center space-x-2"
            >
              <span className="font-bebas text-lg tracking-wider">NAKUPUJ ZDAJ</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/about"
              className="glass-card px-8 py-4 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <span className="font-bebas text-lg tracking-wider">VEČ O NAS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 tracking-wider">
            ZAKAJ <span className="text-primary">NXT WRLD</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="font-bebas text-2xl mb-4 tracking-wider">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 tracking-wider">
            NAŠE <span className="text-secondary">KOLEKCIJE</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <div key={index} className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bebas text-2xl mb-2 tracking-wider">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <Link
                    to="/shop"
                    className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                  >
                    <span className="font-space font-medium">Raziskuj</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="font-bebas text-4xl md:text-6xl mb-6 tracking-wider">
              PRIPRAVLJEN NA <span className="text-primary">SPREMEMBO</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Pridruži se naši skupnosti in bodi prvi, ki izvê za nove kolekcije in ekskluzivne ponudbe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="glass-card px-8 py-4 hover:bg-primary hover:text-black transition-all duration-300 group flex items-center justify-center space-x-2"
              >
                <span className="font-bebas text-lg tracking-wider">ZAČNI NAKUPOVATI</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
