import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-light text-white flex items-center gap-3 nav-w-logo mb-4">
              <img 
                src="/lovable-uploads/35bb0d07-c38e-4e29-bab2-f163d8bab4f7.png" 
                alt="No Analog Ventures Logo" 
                className="h-8 w-auto"
              />
              <span className="logo-no">No</span> <span className="logo-analog">Analog</span>
              <span className="text-blue-300 font-light">. Ventures</span>
            </a>
            <p className="text-gray-300 mb-6">
              Building the future of digital health together.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/willemfontijn/" className="text-gray-400 hover:text-blue-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#approach" className="text-gray-300 hover:text-blue-300 transition-colors">Our Approach</a>
              </li>
              <li>
                <a href="#focus" className="text-gray-300 hover:text-blue-300 transition-colors">Focus Areas</a>
              </li>
              <li>
                <a href="#partners" className="text-gray-300 hover:text-blue-300 transition-colors">Partnerships</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} No Analog Ventures. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Building the future of digital health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
