
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Hvala za vaše sporočilo! Odgovorili vam bomo v najkrajšem času.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "EMAIL",
      info: "hello@nxtworld.com",
      action: () => window.open('mailto:hello@nxtworld.com', '_blank')
    },
    {
      icon: <Phone className="text-secondary" size={24} />,
      title: "TELEFON",
      info: "+386 40 123 456",
      action: () => window.open('tel:+38640123456', '_blank')
    },
    {
      icon: <Instagram className="text-primary" size={24} />,
      title: "INSTAGRAM",
      info: "@nxtworld.official",
      action: () => window.open('https://instagram.com/nxtworld.official', '_blank')
    },
    {
      icon: <MapPin className="text-secondary" size={24} />,
      title: "LOKACIJA",
      info: "Ljubljana, Slovenija",
      action: () => {}
    }
  ];

  const businessHours = [
    { day: "Ponedeljek - Petek", hours: "09:00 - 18:00" },
    { day: "Sobota", hours: "10:00 - 16:00" },
    { day: "Nedelja", hours: "Zaprto" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wider mb-8">
            <span className="text-primary">KONTAKT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Imate vprašanje ali potrebujete pomoč? Radi vam pomagamo!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 pb-20">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="font-bebas text-3xl tracking-wider mb-6">
              POŠLJITE <span className="text-primary">SPOROČILO</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-space font-medium mb-2">
                    IME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-space font-medium mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="vas.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-space font-medium mb-2">
                  ZADEVA
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Zadeva sporočila"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-space font-medium mb-2">
                  SPOROČILO
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Vaše sporočilo..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full glass-card p-4 hover:bg-primary hover:text-black transition-all duration-300 group flex items-center justify-center space-x-3"
              >
                <Send className="group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bebas text-lg tracking-wider">POŠLJI SPOROČILO</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h2 className="font-bebas text-3xl tracking-wider mb-6">
                KONTAKTNI <span className="text-secondary">PODATKI</span>
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    onClick={item.action}
                    className="flex items-center space-x-4 p-4 glass hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-space font-medium text-sm text-gray-400">{item.title}</h3>
                      <p className="text-white">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="text-primary" size={24} />
                <h2 className="font-bebas text-2xl tracking-wider">ODPIRALNI ČASI</h2>
              </div>
              <div className="space-y-4">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                    <span className="text-gray-300">{item.day}</span>
                    <span className="font-space font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass-card p-8 text-center">
              <h3 className="font-bebas text-2xl tracking-wider mb-4">
                POTREBUJETE <span className="text-primary">HITRO POMOČ</span>?
              </h3>
              <p className="text-gray-300 mb-6">
                Za nujne zadeve ali takojšnjo pomoč nas kontaktirajte preko WhatsApp.
              </p>
              <button
                onClick={() => window.open('https://wa.me/38640123456', '_blank')}
                className="glass-card px-6 py-3 hover:bg-green-600 transition-all duration-300 group"
              >
                <span className="font-bebas tracking-wider">WHATSAPP PODPORA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
