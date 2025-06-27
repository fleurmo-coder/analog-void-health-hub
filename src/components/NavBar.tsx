import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-light text-white flex items-center gap-3 nav-w-logo">
          <img 
            src="/lovable-uploads/35bb0d07-c38e-4e29-bab2-f163d8bab4f7.png" 
            alt="No Analog Ventures Logo" 
            className="h-8 w-auto"
          />
          <span className="logo-no">No</span> <span className="logo-analog">Analog</span><span className="text-blue-300 font-light"> . Ventures</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#approach" className="text-gray-200 hover:text-blue-300 transition-colors">
            Our Approach
          </a>
          <a href="#focus" className="text-gray-200 hover:text-blue-300 transition-colors">
            Focus Areas
          </a>
          <a href="#partners" className="text-gray-200 hover:text-blue-300 transition-colors">
            Partnerships
          </a>
          <a 
            href="#contact" 
            className="bg-blue-300 hover:bg-blue-400 text-slate-900 px-4 py-2 rounded-md transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-gray-700 animate-fade-in">
          <div className="container px-4 py-4 mx-auto flex flex-col space-y-4">
            <a 
              href="#approach" 
              className="text-gray-200 py-2 hover:text-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Approach
            </a>
            <a 
              href="#focus" 
              className="text-gray-200 py-2 hover:text-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Focus Areas
            </a>
            <a 
              href="#partners" 
              className="text-gray-200 py-2 hover:text-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partnerships
            </a>
            <a 
              href="#contact" 
              className="bg-blue-300 hover:bg-blue-400 text-slate-900 py-2 px-4 rounded-md transition-colors inline-block font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
