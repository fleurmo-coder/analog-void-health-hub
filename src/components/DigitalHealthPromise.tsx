
import React from 'react';
import { TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

const DigitalHealthPromise = () => {
  const challenges = [
    {
      icon: <TrendingUp className="w-12 h-12 text-red-400" />,
      title: "Healthcare System Under Pressure",
      description: "Rising demand and costs coupled with a shrinking workforce are creating unprecedented strain on healthcare systems worldwide."
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-yellow-400" />,
      title: "Innovation Gap",
      description: "While innovation is the only viable solution, over 90% of science-based digital health innovations fail to reach the market."
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
            Digital Health Promise <span className="text-red-400">Remains Unfulfilled</span>
          </h2>
          <p className="subheading">
            Despite tremendous scientific advances, the healthcare industry faces critical challenges that prevent digital innovations from reaching those who need them most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        <div className="glass-card rounded-lg overflow-hidden border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Circuit board technology representing digital health challenges" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">The Innovation Paradox</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">The Problem</h4>
                  <p className="text-gray-300">
                    Healthcare systems worldwide are buckling under increasing demand, rising costs, and workforce shortages. 
                    The need for innovative solutions has never been greater.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">The Barrier</h4>
                  <p className="text-gray-300">
                    Despite breakthrough research and promising technologies, over 90% of science-based digital health 
                    innovations never make it to market, leaving patients without access to potentially life-changing solutions.
                  </p>
                </div>
                
                <div className="border-l-4 border-emerald-400 pl-4">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">The Solution</h4>
                  <p className="text-gray-300">
                    Breaking this cycle requires a new approach that bridges the gap between scientific discovery 
                    and real-world implementation with comprehensive support from concept to commercialization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHealthPromise;
