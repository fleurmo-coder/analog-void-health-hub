
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pitch-gradient">
      {/* Background Design Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-emerald-400/10 filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-blue-400/10 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className={cn(
        "container relative z-10 px-4 mx-auto flex flex-col items-center text-center",
        "pt-20 pb-12 md:pb-24"
      )}>
        <div className="animate-fade-in">
          {/* Large Company Name */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-white nav-w-logo">
              <span className="logo-no">No</span> <span className="logo-analog">Analog</span>
              <span className="text-emerald-400 font-light">.Ventures</span>
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
              className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Our Approach
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Partner With Us
            </a>
          </div>
        </div>
        
        {/* Hero Stats */}
        <div className="mt-24 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-emerald-400 text-4xl font-bold">100%</div>
              <div className="text-gray-200 mt-2">Success in translating scientific advancements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-emerald-400 text-4xl font-bold">50+</div>
              <div className="text-gray-200 mt-2">Healthcare partnerships worldwide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-emerald-400 text-4xl font-bold">10+</div>
              <div className="text-gray-200 mt-2">Years of digital health expertise</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-emerald-400 text-sm mb-2">Scroll to explore</span>
        <svg className="w-6 h-6 text-emerald-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
