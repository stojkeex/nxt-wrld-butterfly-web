import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AnimatedButterflies from "./components/AnimatedButterflies";
import LiveSupport from "./components/LiveSupport";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Exclusive from "./pages/Exclusive";
import Vip from "./pages/Vip";

const queryClient = new QueryClient();

const App = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [broadcastMessages, setBroadcastMessages] = useState<string[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (isSupportOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSupportOpen]);
 const script = document.createElement("script")
    script.innerHTML = `
      window.interdeal = {
        "sitekey": "dbb17f7e13528197947d91f3e2bec607",
        "Position": "Left",
        "domains": {
            "js": "https://cdn.equalweb.com/",
            "acc": "https://access.equalweb.com/"
        },
        "Menulang": "EN",
        "btnStyle": {
            "vPosition": ["80%", "80%"],
            "scale": ["0.5", "0.5"],
            "color": {
                "main": "#1876c9",
                "second": "#ffffff"
            },
            "icon": {
                "outline": false,
                "type": 9,
                "shape": "circle"
            }
        }
      };
      (function(doc, head, body){
          var coreCall = doc.createElement('script');
          coreCall.src = interdeal.domains.js + 'core/5.1.13/accessibility.js';
          coreCall.defer = true;
          coreCall.integrity = 'sha512-70/AbMe6C9H3r5hjsQleJEY4y5l9ykt4WYSgyZj/WjpY/ord/26LWfva163b9W+GwWkfwbP0iLT+h6KRl+LoXA==';
          coreCall.crossOrigin = 'anonymous';
          coreCall.setAttribute('data-cfasync', true);
          body ? body.appendChild(coreCall) : head.appendChild(coreCall);
      })(document, document.head, document.body);
    `
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch('/announcement.json?_=' + new Date().getTime());
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data?.messages)) {
          setBroadcastMessages(data.messages);
        } else if (data?.message) {
          setBroadcastMessages([data.message]);
        } else {
          setBroadcastMessages([]);
        }
      } catch (err) {
        console.error('Error fetching announcement:', err);
      }
    };

    fetchMessage();
    const interval = setInterval(fetchMessage, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (broadcastMessages.length > 1) {
      const rotate = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % broadcastMessages.length);
      }, 20000);
      return () => clearInterval(rotate);
    }
  }, [broadcastMessages]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <AnimatedButterflies />
            <Navigation onSupportClick={() => setIsSupportOpen(true)} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/exclusive" element={<Exclusive />} />
              <Route path="/jwoedjwidjwdwiedjwedwo" element={<Vip />} />
            </Routes>
            <LiveSupport 
              isOpen={isSupportOpen} 
              onClose={() => setIsSupportOpen(false)} 
            />
          </div>
          {broadcastMessages.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center p-4 z-[9999] animate-pulse">
              {broadcastMessages[currentMessageIndex]}
            </div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
