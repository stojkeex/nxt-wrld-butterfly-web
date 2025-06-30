import React, { useState } from 'react';
import { X, Send, MessageCircle, HelpCircle, Users, FileText, Phone, Mail, Instagram } from 'lucide-react';

interface LiveSupportProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiveSupport = ({ isOpen, onClose }: LiveSupportProps) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'support',
      text: 'Hello! How can we help you today?',
      time: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: message,
        time: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      setTimeout(() => {
        const supportReply = {
          id: messages.length + 2,
          sender: 'support',
          text: 'Thank you for your message! Our agent will contact you shortly.',
          time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, supportReply]);
      }, 1000);
    }
  };

  const faqs = [
    { question: "How do I track my order?", answer: "You can track your order using the tracking number sent to your email after purchase." },
    { question: "What's your return policy?", answer: "We offer 30-day returns on all items in original condition with tags attached." },
    { question: "Do you ship internationally?", answer: "Yes, we ship worldwide! Shipping costs vary by location." },
    { question: "How do I know my size?", answer: "Check our size guide on each product page for detailed measurements." },
    { question: "When will my order arrive?", answer: "Standard shipping takes 3-7 business days, express shipping takes 1-3 business days." }
  ];

  const agents = [
    { name: "Maj S.", role: "CEO", status: "online", avatar: "/crnistojke.webp" },
    { name: "Rubens K.", role: "CEO", status: "online", avatar: "" }
  ];

  const rules = [
    "Be respectful and courteous to all team members and customers",
    "Response time goal: Under 2 minutes during business hours",
    "Always provide accurate product information and sizing details",
    "Escalate complex issues to senior support immediately",
    "Follow up on all customer inquiries within 24 hours",
    "Maintain customer privacy and data protection standards"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full h-full glass-card flex flex-col max-w-4xl mx-auto m-4">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <MessageCircle className="text-gradient-primary" size={28} />
            <div>
              <h2 className="font-bebas text-2xl tracking-wider text-gradient-primary">LIVE SUPPORT</h2>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
            </div>
          </div>
          <button onClick={onClose} className="glass-card p-3 hover:bg-white/20 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex border-b border-white/10">
          {[{ id: 'chat', label: 'CHAT', icon: MessageCircle }, { id: 'faq', label: 'FAQ', icon: HelpCircle }, { id: 'agents', label: 'AGENTS', icon: Users }, { id: 'rules', label: 'RULES', icon: FileText }].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 transition-colors font-bebas tracking-wider ${
                activeTab === tab.id ? 'bg-white text-black border-b-2 border-white' : 'hover:bg-white/10 text-gradient-primary'
              }`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-hidden">
          {activeTab === 'chat' && (
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-black' : 'glass-card'}`}>
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-60 mt-2">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-white/10">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 glass-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button onClick={handleSendMessage} className="glass-card px-6 py-3 hover:bg-primary hover:text-black transition-colors">
                    <Send size={20} />
                  </button>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  <a href="#" className="flex items-center space-x-2 glass-card px-4 py-2 hover:bg-primary hover:text-black transition-colors">
                    <Instagram size={16} />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 glass-card px-4 py-2 hover:bg-secondary hover:text-black transition-colors">
                    <MessageCircle size={16} />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 glass-card px-4 py-2 hover:bg-primary hover:text-black transition-colors">
                    <Mail size={16} />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="h-full overflow-y-auto p-6">
              <h3 className="font-bebas text-2xl mb-6 tracking-wider text-gradient-primary">FREQUENTLY ASKED QUESTIONS</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass-card p-4">
                    <h4 className="font-space font-medium mb-2 text-gradient-primary">{faq.question}</h4>
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'agents' && (
            <div className="h-full overflow-y-auto p-6">
              <h3 className="font-bebas text-2xl mb-6 tracking-wider text-gradient-primary">SUPPORT AGENTS</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {agents.map((agent, index) => (
                  <div key={index} className="glass-card p-4 flex items-center space-x-4">
                    <img src={agent.avatar} alt={agent.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <h4 className="font-space font-medium">{agent.name}</h4>
                      <p className="text-sm text-gray-400">{agent.role}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${agent.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{agent.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rules' && (
            <div className="h-full overflow-y-auto p-6">
              <h3 className="font-bebas text-2xl mb-6 tracking-wider text-gradient-primary">SUPPORT RULES</h3>
              <div className="space-y-3">
                {rules.map((rule, index) => (
                  <div key={index} className="glass-card p-4 flex items-start space-x-3">
                    <span className="text-gradient-primary font-bebas text-lg">{index + 1}.</span>
                    <p className="text-gray-300 font-space text-sm">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;
