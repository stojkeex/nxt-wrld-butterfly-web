
import React, { useState } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

interface LiveSupportProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiveSupport = ({ isOpen, onClose }: LiveSupportProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'support',
      text: 'Pozdravljeni! Kako vam lahko pomagamo?',
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
      
      // Simulacija odgovora
      setTimeout(() => {
        const supportReply = {
          id: messages.length + 2,
          sender: 'support',
          text: 'Hvala za vaše sporočilo! Naš agent vas bo kmalu kontaktiral.',
          time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, supportReply]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Support Window */}
      <div className="relative w-full max-w-lg h-full max-h-[600px] glass-card flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <MessageCircle className="text-primary" size={24} />
            <div>
              <h3 className="font-bebas text-xl">LIVE SUPPORT</h3>
              <p className="text-sm text-muted-foreground">Na voljo 24/7</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="glass-card p-2 hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-primary text-black'
                    : 'glass-card'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs opacity-60 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Vnesite vaše sporočilo..."
              className="flex-1 glass-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSendMessage}
              className="glass-card p-2 hover:bg-primary hover:text-black transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Odgovorili vam bomo v najkrajšem možnem času
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;
