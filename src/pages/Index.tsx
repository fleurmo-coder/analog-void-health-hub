
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import OurApproach from '@/components/OurApproach';
import FocusAreas from '@/components/FocusAreas';
import PartnershipSection from '@/components/PartnershipSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-noanalog-dark text-white">
      <NavBar />
      <HeroSection />
      <OurApproach />
      <FocusAreas />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
