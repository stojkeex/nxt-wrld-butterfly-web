
import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wider mb-8">
            ABOUT <span className="text-primary">NXT WRLD</span>
          </h1>
          <p className="text-xl text-gray-300 font-space leading-relaxed">
            Born from the vision of creating fashion that transcends traditional boundaries, 
            NXT WRLD represents the intersection of technology, creativity, and street culture.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8">
              <h2 className="font-bebas text-4xl mb-6 tracking-wider text-secondary">OUR STORY</h2>
              <p className="text-gray-300 font-space mb-6 leading-relaxed">
                Founded in 2024, NXT WRLD emerged from a simple idea: fashion should be as 
                dynamic and forward-thinking as the world we live in. We saw a gap between 
                traditional streetwear and the digital-first generation that demands more.
              </p>
              <p className="text-gray-300 font-space leading-relaxed">
                Our designs blend futuristic aesthetics with premium comfort, creating pieces 
                that don't just look good – they represent a lifestyle, a mindset, and a 
                movement towards the future of fashion.
              </p>
            </div>
            <div className="glass-card p-8 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ccb51599-35ea-4864-918e-4d6f9cbb43ea.png" 
                alt="NXT WRLD Logo" 
                className="max-w-full h-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            <h2 className="font-bebas text-4xl mb-6 tracking-wider text-primary">OUR MISSION</h2>
            <p className="text-gray-300 font-space mb-6 leading-relaxed">
              To redefine streetwear for the digital age by creating innovative, 
              high-quality apparel that empowers individuals to express their unique 
              identity and embrace the future with confidence.
            </p>
            <p className="text-gray-300 font-space leading-relaxed">
              Every piece tells a story of innovation, rebellion against the ordinary, 
              and a commitment to pushing the boundaries of what fashion can be.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl text-center mb-16 tracking-wider">
            OUR <span className="text-secondary">VALUES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-colors">
              <Users className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bebas text-xl mb-3 tracking-wider">COMMUNITY</h3>
              <p className="text-gray-300 font-space text-sm">
                Building connections that transcend fashion
              </p>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-colors">
              <Target className="mx-auto mb-4 text-secondary" size={40} />
              <h3 className="font-bebas text-xl mb-3 tracking-wider">INNOVATION</h3>
              <p className="text-gray-300 font-space text-sm">
                Constantly pushing creative boundaries
              </p>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-colors">
              <Award className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bebas text-xl mb-3 tracking-wider">QUALITY</h3>
              <p className="text-gray-300 font-space text-sm">
                Premium materials and craftsmanship
              </p>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-colors">
              <Globe className="mx-auto mb-4 text-secondary" size={40} />
              <h3 className="font-bebas text-xl mb-3 tracking-wider">SUSTAINABILITY</h3>
              <p className="text-gray-300 font-space text-sm">
                Responsible fashion for future generations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl text-center mb-16 tracking-wider">
            THE <span className="text-primary">TEAM</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Users className="text-white" size={48} />
              </div>
              <h3 className="font-bebas text-2xl mb-4 tracking-wider text-primary">ALEX CHEN</h3>
              <p className="text-gray-300 font-space mb-4">Creative Director & Founder</p>
              <p className="text-gray-300 font-space text-sm leading-relaxed">
                Visionary behind NXT WRLD's innovative designs. Alex brings 8+ years of 
                streetwear experience and a passion for pushing creative boundaries.
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Target className="text-white" size={48} />
              </div>
              <h3 className="font-bebas text-2xl mb-4 tracking-wider text-secondary">JORDAN MARTINEZ</h3>
              <p className="text-gray-300 font-space mb-4">Head of Design & Innovation</p>
              <p className="text-gray-300 font-space text-sm leading-relaxed">
                Master of blending technology with fashion. Jordan's expertise in sustainable 
                materials and futuristic aesthetics drives our product development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
