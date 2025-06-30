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
  const [broadcastMessage, setBroadcastMessage] = useState<string | null>(null);

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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/6862cb320a9288190d1bbe2c/1iv0ujgl2';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const message = localStorage.getItem("broadcastMessage");
      if (message) setBroadcastMessage(message);
    };

    window.addEventListener("storage", handleStorage);
    handleStorage();

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <AnimatedButterflies />
           {broadcastMessage && (
            <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center p-4 z-[9999] animate-pulse">
           {broadcastMessage}
            </div>
             )}

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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
