import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
};

export default HomePage;