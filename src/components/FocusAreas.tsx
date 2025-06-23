
import React from 'react';
import { Heart, BarChart, Users, Check } from 'lucide-react';

const FocusAreas = () => {
  const areas = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Remote Patient Monitoring",
      description: "Developing technologies that enable healthcare providers to monitor patients outside of conventional clinical settings, improving access to care while reducing costs."
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "AI Diagnostics & Imaging",
      description: "Leveraging artificial intelligence to improve diagnostic accuracy, speed, and accessibility across various medical specialties."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Digital Therapeutics",
      description: "Creating evidence-based therapeutic interventions driven by high-quality software programs to prevent, manage, or treat a medical disorder or disease."
    },
    {
      icon: <Check className="w-12 h-12" />,
      title: "Healthcare Workflow Optimization",
      description: "Building solutions that streamline clinical workflows, reduce administrative burden, and improve healthcare delivery efficiency."
    }
  ];

  return (
    <section id="focus" className="section-padding">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading">
            Focus <span className="text-emerald-400">Areas</span>
          </h2>
          <p className="subheading">
            We target high-growth sectors in healthcare where digital innovation can create the most significant impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/20 to-slate-900/90 z-10"></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 h-full p-8 transition-all duration-300 relative z-20 group-hover:bg-white/15">
                <div className="p-3 bg-slate-800 rounded-full inline-block mb-6 text-emerald-400 border border-white/20">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-300">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Why Digital Health Is The Future</h3>
                <p className="text-gray-300 mb-8">
                  The healthcare industry is undergoing a profound transformation, driven by technological advances, 
                  changing consumer expectations, and the need for more efficient, effective care delivery models.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 p-5 rounded-lg border border-white/10">
                    <div className="text-emerald-400 text-2xl font-bold mb-2">$660B</div>
                    <div className="text-sm text-gray-300">Global digital health market by 2028</div>
                  </div>
                  <div className="bg-slate-800/50 p-5 rounded-lg border border-white/10">
                    <div className="text-emerald-400 text-2xl font-bold mb-2">19.7%</div>
                    <div className="text-sm text-gray-300">Annual growth rate (CAGR)</div>
                  </div>
                  <div className="bg-slate-800/50 p-5 rounded-lg border border-white/10">
                    <div className="text-emerald-400 text-2xl font-bold mb-2">76%</div>
                    <div className="text-sm text-gray-300">Patients using digital health tools</div>
                  </div>
                  <div className="bg-slate-800/50 p-5 rounded-lg border border-white/10">
                    <div className="text-emerald-400 text-2xl font-bold mb-2">$5.1T</div>
                    <div className="text-sm text-gray-300">US healthcare spending by 2025</div>
                  </div>
                </div>
              </div>
              <div className="h-full">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="AI Digital Health Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
