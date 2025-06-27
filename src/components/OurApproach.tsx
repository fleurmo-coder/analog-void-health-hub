
import React from 'react';
import { Check, Heart, Users, BarChart } from 'lucide-react';

const OurApproach = () => {
  const approachItems = [
    {
      icon: <Heart className="w-12 h-12 text-emerald-400" />,
      title: "Patient-Centered Innovation",
      description: "We develop solutions that prioritize improving patient outcomes and experiences, making healthcare more accessible, cost-effective, and personalized."
    },
    {
      icon: <BarChart className="w-12 h-12 text-emerald-400" />,
      title: "Data-Driven Insights",
      description: "Our ventures leverage advanced analytics and AI to transform healthcare data into actionable insights that drive better clinical decision-making."
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-400" />,
      title: "Development & End-to-End Support",
      description: "From concept to commercialization, we provide comprehensive support through funding, strategy, development, and market entry."
    },
    {
      icon: <Check className="w-12 h-12 text-emerald-400" />,
      title: "Focus on High-Growth Areas",
      description: "We strategically target sectors in healthcare with significant growth potential and opportunities for digital innovation."
    }
  ];

  return (
    <section id="approach" className="section-padding bg-slate-800/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading">
            <span className="text-emerald-400">Our Approach</span>
          </h2>
          <p className="subheading">
            We step in where others don't, providing end-to-end venture development, support and strategic guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Translating Science to Solutions</h3>
              <p className="text-gray-300 mb-6">
                No Analog Ventures bridges the gap between scientific innovation and practical healthcare solutions. 
                We identify promising research, technologies, and clinical advances to develop products and services that make a real difference in healthcare delivery, usability and patient outcomes.
              </p>
              <div className="space-y-3">
                {["Identify scientific breakthroughs with commercial potential", 
                  "Develop targeted business and product strategies", 
                  "Secure necessary funding and resources",
                  "Accelerate commercialization, market entry, and adoption"].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                        <Check className="w-3 h-3 text-slate-900" />
                      </div>
                    </div>
                    <span className="ml-3 text-gray-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-lg overflow-hidden border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-transparent opacity-30 rounded-lg"></div>
                <img 
                  src="/lovable-uploads/7996abde-021a-40ae-801e-05674f4ec6ee.png" 
                  alt="Digital health innovation with DNA, pills, and medical technology" 
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
