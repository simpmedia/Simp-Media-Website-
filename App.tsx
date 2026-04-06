
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GrowthSystem from './components/GrowthSystem';
import WhyChooseSimp from './components/WhyChooseSimp';
import StrategicPillars from './components/StrategicPillars';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ProcessImpact from './components/ProcessImpact';
import ScaleSection from './components/ScaleSection';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import HeroMoon from './components/HeroMoon';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <GrowthSystem />
        <WhyChooseSimp />
        <StrategicPillars />
        <Services />
        <CaseStudies />
        <ProcessImpact />
        <ScaleSection />
        <Testimonials />
        <CtaSection />
        <HeroMoon />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
