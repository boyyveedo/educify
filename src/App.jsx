import React from 'react';
import Feature from './components/Feature';
import Header from './components/Header';
import Hero from './components/Hero';
import Tutor from './components/Tutor';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero/>
      <Tutor/>
      <Feature />
      <Testimonial/>
    
    </div>
  );
};

export default App;
