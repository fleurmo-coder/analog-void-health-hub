
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-blue-300/10 filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-blue-400/10 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className={cn(
        "container relative z-10 px-4 mx-auto flex flex-col items-center text-center",
        "pt-20 pb-12 md:pb-24"
      )}>
        <div className="animate-fade-in">
          {/* Large Company Name with Logo */}
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="/lovable-uploads/35bb0d07-c38e-4e29-bab2-f163d8bab4f7.png" 
              alt="No Analog Ventures Logo" 
              className="h-16 md:h-24 lg:h-32 w-auto mb-6"
            />
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-white nav-w-logo">
              <span className="logo-no">No</span> <span className="logo-analog">Analog</span>
              <span className="text-blue-300 font-light">.Ventures</span>
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight">
            Building the Future of Digital Health
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We step in where others don't, focusing on high-growth healthcare areas 
            with end-to-end support from founding to exit.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#approach" 
              className="bg-blue-300 hover:bg-blue-400 text-slate-900 px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Our Approach
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Partner With Us
            </a>
          </div>
        </div>
        
        {/* Hero Stats */}
        <div className="mt-24 w-full max-w-4xl relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-8 rounded-lg border border-white/20">
              <div className="text-blue-300 text-4xl font-bold">4</div>
              <div className="text-gray-200 mt-2">Near ventures in our portfolio</div>
            </div>
            <div className="glass-card p-8 rounded-lg border border-white/20">
              <div className="text-blue-300 text-4xl font-bold">60</div>
              <div className="text-gray-200 mt-2">Venture propositions in the pipeline</div>
            </div>
            <div className="glass-card p-8 rounded-lg border border-white/20">
              <div className="text-blue-300 text-4xl font-bold">30+</div>
              <div className="text-gray-200 mt-2">Combined years experience in venture building</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator positioned below stats and centered on page */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce pointer-events-none">
        <span className="text-white text-sm mb-2 text-center bg-slate-900/80 px-3 py-1 rounded-full">Scroll to explore</span>
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
