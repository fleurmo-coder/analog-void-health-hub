
import React from 'react';
import { Check, Heart, Users, Chart } from 'lucide-react';

const OurApproach = () => {
  const approachItems = [
    {
      icon: <Heart className="w-12 h-12 text-noanalog-green" />,
      title: "Patient-Centered Innovation",
      description: "We develop solutions that prioritize improving patient outcomes and experiences, making healthcare more accessible, efficient, and personal."
    },
    {
      icon: <Chart className="w-12 h-12 text-noanalog-green" />,
      title: "Data-Driven Insights",
      description: "Our ventures leverage advanced analytics and AI to transform healthcare data into actionable insights that drive better clinical decision-making."
    },
    {
      icon: <Users className="w-12 h-12 text-noanalog-green" />,
      title: "End-to-End Support",
      description: "From concept to commercialization, we provide comprehensive support through funding, strategy development, and market entry."
    },
    {
      icon: <Check className="w-12 h-12 text-noanalog-green" />,
      title: "Focus on High-Growth Areas",
      description: "We strategically target underserved sectors in healthcare with significant growth potential and opportunities for innovation."
    }
  ];

  return (
    <section id="approach" className="section-padding bg-noanalog-darker">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading">
            <span className="text-noanalog-green">Our Approach</span>
          </h2>
          <p className="subheading">
            We step in where others don't, providing end-to-end venture support and strategic guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-noanalog-light p-8 rounded-lg hover:shadow-lg hover:shadow-noanalog-green/10 transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-noanalog-light rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Translating Science to Solutions</h3>
              <p className="text-gray-400 mb-6">
                No Analog Ventures bridges the gap between scientific innovation and practical healthcare solutions. 
                We identify promising research, technologies, and clinical advances that can be developed into 
                products and services that make a real difference in healthcare delivery and patient outcomes.
              </p>
              <div className="space-y-3">
                {["Identify scientific breakthroughs with commercial potential", 
                  "Develop targeted business strategies", 
                  "Secure necessary funding and resources",
                  "Accelerate market entry and adoption"].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-noanalog-green flex items-center justify-center">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                    </div>
                    <span className="ml-3 text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="relative bg-gradient-to-br from-noanalog-dark to-black p-1 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-noanalog-green/20 to-transparent opacity-30 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Medical innovation" 
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
