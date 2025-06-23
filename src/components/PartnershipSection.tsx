
import React from 'react';
import { Handshake } from 'lucide-react';

const PartnershipSection = () => {
  const partnerTypes = [
    {
      title: "Hospital Groups",
      description: "We collaborate with forward-thinking hospitals and health systems to implement digital health solutions that enhance patient care and optimize operations.",
      benefits: [
        "Access to cutting-edge healthcare technologies",
        "Custom solutions for specific clinical needs",
        "Improved patient outcomes and experiences",
        "Reduced operational costs through digital efficiency"
      ]
    },
    {
      title: "Development Partners",
      description: "Our technical partnerships bring specialized expertise to our ventures, accelerating development timelines and enhancing solution capabilities.",
      benefits: [
        "Collaborative innovation opportunities",
        "Access to healthcare market insights",
        "Shared intellectual property development",
        "Long-term strategic partnership potential"
      ]
    },
    {
      title: "Industry Partners",
      description: "We work with pharmaceutical companies, medical device manufacturers, and other healthcare organizations to develop complementary digital solutions.",
      benefits: [
        "Digital extension of existing products",
        "New revenue streams through digital channels",
        "Enhanced data collection and analytics capabilities",
        "Increased patient engagement and adherence"
      ]
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
            Collaborate with us to drive innovation and transformation in healthcare delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
            >
              <div className="h-2 bg-emerald-400"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-white">{partner.title}</h3>
                <p className="text-gray-300 mb-6">{partner.description}</p>
                <h4 className="text-emerald-400 font-semibold mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span className="text-gray-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-emerald-400/20 border border-emerald-400/30">
              <Handshake className="w-12 h-12 text-emerald-400" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Our Collaborative Approach</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            At No Analog Ventures, we believe that meaningful healthcare innovation happens through 
            strategic collaboration. We bring together diverse expertise, unique perspectives, 
            and complementary resources to create solutions that address complex healthcare challenges.
          </p>
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
