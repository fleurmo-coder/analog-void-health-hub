
import React from 'react';
import { TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

const DigitalHealthPromise = () => {
  const challenges = [
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-400" />,
      title: "Healthcare System Under Pressure",
      description: "Rising demand and costs coupled with a shrinking workforce are creating unprecedented strain on healthcare systems worldwide."
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-emerald-400" />,
      title: "Innovation Gap",
      description: "While this cannot be solved without innovation, over 90% of science-based digital health innovations fail to reach the market."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-emerald-400" />,
      title: "A New Approach Needed",
      description: "To fulfill the true promise of digital health innovation, we need a fundamentally different approach to translating science into solutions."
    }
  ];

  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="heading">
            Digital Health Promise <span className="text-emerald-400">Remains Unfulfilled</span>
          </h2>
          <p className="subheading">
            Despite tremendous scientific advances, the healthcare industry faces critical challenges that prevent digital innovations from reaching the patient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{challenge.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{challenge.title}</h3>
              <p className="text-gray-300">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalHealthPromise;
