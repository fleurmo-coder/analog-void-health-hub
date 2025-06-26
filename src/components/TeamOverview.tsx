
import React from 'react';
import { Users, UserCheck, Briefcase } from 'lucide-react';

const TeamOverview = () => {
  const teamMembers = [
    { role: 'CEO', name: 'WILLEM FONTIJN' },
    { role: 'CFO', name: 'Confidential' },
    { role: 'Venture Builder', name: 'FLEUR MOORLAG' },
    { role: 'Venture Builder', name: 'WESSEL LIGTENBERG' },
    { role: 'Partnerships', name: 'Confidential' },
    { role: 'Technology Specialist', name: 'VALERIA GOTTARDO' },
    { role: 'Investment Analyst', name: 'SEWA OJUTIKU' }
  ];

  const advisors = [
    { role: 'Medical Expert', name: 'BART GEERTS' },
    { role: 'Venture Partner', name: 'Confidential' },
    { role: 'Venture Partner', name: 'Confidential' }
  ];

  return (
    <section id="team" className="section-padding bg-slate-800/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="heading">
            Team <span className="text-blue-300">Overview</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
            Very experienced and complete team: 3x serial entrepreneurs, 2x MD (GP, Medical specialist) 
            4x corporate experience and combined 30 years of venture building experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Team Members */}
          <div className="glass-card p-8 rounded-lg border border-white/20">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Core Team</h3>
                <p className="text-gray-300">7 dedicated members</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/60 p-4 rounded-lg border border-white/10 hover:border-blue-300/30 transition-colors"
                >
                  <div className="flex items-start">
                    <Briefcase className="w-4 h-4 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-gray-200 text-sm font-medium">{member.role}</div>
                      <div className="text-blue-300 text-xs font-semibold mt-1">{member.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div className="glass-card p-8 rounded-lg border border-white/20">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-full mr-4">
                <UserCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Advisory Board</h3>
                <p className="text-gray-300">3 strategic advisors</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {advisors.map((advisor, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/60 p-4 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <UserCheck className="w-4 h-4 text-emerald-400 mb-2 flex-shrink-0" />
                    <div>
                      <div className="text-gray-200 text-sm font-medium">{advisor.role}</div>
                      <div className="text-emerald-400 text-xs font-semibold mt-1">{advisor.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Combined Expertise - Now separate section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Combined Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                <span>3x Serial Entrepreneurs</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                <span>2x Medical Doctors (GP, Medical Specialist)</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                <span>4x Corporate Experience</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                <span>30+ Years Venture Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;
