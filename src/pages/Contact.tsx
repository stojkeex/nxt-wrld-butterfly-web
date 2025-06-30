import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bebas text-6xl md:text-8xl tracking-wider mb-8">
            GET IN <span className="text-gradient-primary">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300 font-space">
            Ready to join the future of fashion? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h2 className="font-bebas text-3xl mb-8 tracking-wider text-gradient-primary">CONTACT INFO</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="icon-gradient" size={24} />
                  <div>
                    <p className="font-space font-medium">Email</p>
                    <p className="text-gray-300">nxtwrld.contact@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="icon-gradient" size={24} />
                  <div>
                    <p className="font-space font-medium">Phone</p>
                    <p className="text-gray-300">+386 51 656 615</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="icon-gradient" size={24} />
                  <div>
                    <p className="font-space font-medium">Address</p>
                    <p className="text-gray-300">Not Yet</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="font-bebas text-xl mb-4 tracking-wider">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a href="#" className="glass-card p-3 hover:bg-primary hover:text-black transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="glass-card p-3 hover:bg-secondary hover:text-black transition-colors">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-bebas text-2xl mb-6 tracking-wider text-gradient-primary">BUSINESS HOURS</h3>
              <div className="space-y-2 text-gray-300 font-space">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="font-bebas text-3xl mb-8 tracking-wider text-gradient-primary">SEND MESSAGE</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-space font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-space font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-space font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-space font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full glass-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full glass-card p-4 hover:bg-primary hover:text-black transition-all duration-300 group flex items-center justify-center space-x-3"
              >
                <Send className="group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bebas text-lg tracking-wider">SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
