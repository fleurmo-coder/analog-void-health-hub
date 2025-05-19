
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
        isScrolled ? 'bg-noanalog-dark/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-noanalog-green">No</span>Analog
          <span className="text-xs text-noanalog-green font-normal ml-1">Ventures</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#approach" className="text-gray-300 hover:text-noanalog-green transition-colors">
            Our Approach
          </a>
          <a href="#focus" className="text-gray-300 hover:text-noanalog-green transition-colors">
            Focus Areas
          </a>
          <a href="#partners" className="text-gray-300 hover:text-noanalog-green transition-colors">
            Partnerships
          </a>
          <a 
            href="#contact" 
            className="bg-noanalog-green hover:bg-noanalog-green-dark text-black px-4 py-2 rounded-md transition-colors"
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
        <div className="md:hidden bg-noanalog-dark border-t border-gray-800 animate-fade-in">
          <div className="container px-4 py-4 mx-auto flex flex-col space-y-4">
            <a 
              href="#approach" 
              className="text-gray-300 py-2 hover:text-noanalog-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Approach
            </a>
            <a 
              href="#focus" 
              className="text-gray-300 py-2 hover:text-noanalog-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Focus Areas
            </a>
            <a 
              href="#partners" 
              className="text-gray-300 py-2 hover:text-noanalog-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partnerships
            </a>
            <a 
              href="#contact" 
              className="bg-noanalog-green hover:bg-noanalog-green-dark text-black py-2 px-4 rounded-md transition-colors inline-block"
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
