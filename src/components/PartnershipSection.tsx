
import React from 'react';

const PartnershipSection = () => {
  const partnerTypes = [
    {
      title: "Hospital Groups",
      description: "We collaborate with forward-thinking hospitals and health systems to implement digital health solutions that revolutionize patient care."
    },
    {
      title: "Development Partners",
      description: "Our technical partnerships bring specialized expertise to our ventures, accelerating development, and elevate the product."
    },
    {
      title: "Industry Partners",
      description: "We work with big tech, medical device, pharmaceutical, and other healthcare focused companies to develop digital solutions."
    },
    {
      title: "Funding Partners",
      description: "We partner with investors, venture capital firms, and funding organizations to promote our vision of transforming healthcare through innovative digital solutions."
    },
  ];

  return (
    <section id="partners" className="section-padding bg-slate-800/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading">
            <span className="text-emerald-400">Partnership</span> Opportunities
          </h2>
          <p className="subheading">
            Collaborate with us to drive essential digital innovation in healthcare
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerTypes.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
            >
              <div className="h-2 bg-emerald-400"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-white">{partner.title}</h3>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#contact" 
            className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-8 py-3 rounded-md transition-colors inline-block font-medium"
          >
            Explore Partnership Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
