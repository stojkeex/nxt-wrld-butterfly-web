
import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="text-primary" size={40} />,
      title: "NAŠA VIZIJA",
      description: "Postati vodilna modniska znamka, ki združuje inovativnost, kakovost in dostopnost za vsakogar."
    },
    {
      icon: <Heart className="text-secondary" size={40} />,
      title: "NAŠA STRAST",
      description: "Strast do mode in dizajna, ki navdihuje ljudi, da izrazijo svojo edinstveno osebnost."
    },
    {
      icon: <Users className="text-primary" size={40} />,
      title: "NAŠA SKUPNOST",
      description: "Gradimo skupnost posameznikov, ki se ne bojijo biti drugačni in slediti svojim sanjem."
    },
    {
      icon: <Award className="text-secondary" size={40} />,
      title: "NAŠA KAKOVOST",
      description: "Vsak izdelek je skrbno izbran in preverjen, da zagotovimo vrhunsko kakovost in trajnost."
    }
  ];

  const team = [
    {
      name: "ALEX NOVAK",
      role: "KREATIVNI DIREKTOR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "SARA KRALJ",
      role: "OBLIKOVALKA",
      image: "https://images.unsplash.com/photo-1494790108755-2616c88d3e1e?w=300&h=300&fit=crop"
    },
    {
      name: "MARK JENSEN",
      role: "BRAND MANAGER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wider mb-8">
            O <span className="text-primary">NXT WRLD</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            NXT WRLD ni samo modna znamka - smo gibanje, ki predstavlja prihodnost stila. 
            Naša zgodba se je začela z vizijo ustvarjanja oblačil, ki presegajo meje 
            konvencionalnega oblikovanja.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-bebas text-4xl md:text-6xl tracking-wider">
                NAŠA <span className="text-secondary">ZGODBA</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Ustanovljena leta 2020, je NXT WRLD nastala iz želje po ustvarjanju 
                  nečesa povsem novega v svetu mode. Naši ustanovitelji so prepoznali 
                  potrebo po znamki, ki bi govorila jeziku mladih, ambicioznih posameznikov.
                </p>
                <p className="text-lg">
                  V treh letih smo zrasli iz majhne ideje v mednarodno prepoznano znamko, 
                  ki navdihuje tisoče ljudi po vsem svetu. Naši kosi se ne osredotočajo 
                  samo na estetiko, temveč tudi na funkcionalnost in udobje.
                </p>
                <p className="text-lg">
                  Danes NXT WRLD predstavlja več kot le oblačila - predstavlja življenjski 
                  slog, kjer se tradicija sreča z inovacijo, kjer se kakovost združuje z dostopnostjo.
                </p>
              </div>
            </div>
            <div className="glass-card p-2">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop"
                alt="NXT WRLD Story"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 tracking-wider">
            NAŠE <span className="text-primary">VREDNOTE</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="font-bebas text-xl mb-4 tracking-wider">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl text-center mb-16 tracking-wider">
            NAŠA <span className="text-secondary">EKIPA</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bebas text-2xl mb-2 tracking-wider">{member.name}</h3>
                  <p className="text-primary font-space font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="font-bebas text-4xl md:text-6xl mb-8 tracking-wider">
              NAŠE <span className="text-primary">POSLANSTVO</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Naše poslanstvo je preoblikovanje modne industrije z inovativnimi rešitvami, 
              ki spoštujejo tako posameznika kot okolje. Verjamemo, da moda ni le obleka, 
              temveč izraz naše notranje moči in kreativnosti."
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
