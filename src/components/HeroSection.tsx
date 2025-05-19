
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-noanalog-green/10 filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-noanalog-green/5 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className={cn(
        "container relative z-10 px-4 mx-auto flex flex-col items-center text-center",
        "pt-20 pb-12 md:pb-24" // Added padding to account for navbar
      )}>
        <div className="animate-fade-in">
          <h1 className="heading mb-4">
            <span className="block text-noanalog-green">Building The Future</span>
            <span className="block">of Digital Health</span>
          </h1>
          
          <p className="subheading max-w-3xl mx-auto">
            We step in where others don't, focusing on high-growth healthcare areas 
            with end-to-end support from founding to exit.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#approach" 
              className="bg-noanalog-green hover:bg-noanalog-green-dark text-black px-6 py-3 rounded-md transition-colors font-medium"
            >
              Our Approach
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/5 border border-noanalog-green text-noanalog-green px-6 py-3 rounded-md transition-colors font-medium"
            >
              Partner With Us
            </a>
          </div>
        </div>
        
        {/* Hero Stats */}
        <div className="mt-20 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-noanalog-light p-6 rounded-lg">
              <div className="text-noanalog-green text-4xl font-bold">100%</div>
              <div className="text-gray-400 mt-2">Success in translating scientific advancements</div>
            </div>
            <div className="bg-noanalog-light p-6 rounded-lg">
              <div className="text-noanalog-green text-4xl font-bold">50+</div>
              <div className="text-gray-400 mt-2">Healthcare partnerships worldwide</div>
            </div>
            <div className="bg-noanalog-light p-6 rounded-lg">
              <div className="text-noanalog-green text-4xl font-bold">10+</div>
              <div className="text-gray-400 mt-2">Years of digital health expertise</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-noanalog-green text-sm mb-2">Scroll to explore</span>
        <svg className="w-6 h-6 text-noanalog-green" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
