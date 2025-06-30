import React, { useEffect } from 'react';
import Home from './Home';

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/6862cb320a9288190d1bbe2c/1iv0ujgl2';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return <Home />;
};

export default Index;
