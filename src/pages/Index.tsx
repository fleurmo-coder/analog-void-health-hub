
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import DigitalHealthPromise from '@/components/DigitalHealthPromise';
import OurApproach from '@/components/OurApproach';
import FocusAreas from '@/components/FocusAreas';
import PartnershipSection from '@/components/PartnershipSection';
import TeamOverview from '@/components/TeamOverview';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <HeroSection />
      <DigitalHealthPromise />
      <OurApproach />
      <FocusAreas />
      <PartnershipSection />
      <TeamOverview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
