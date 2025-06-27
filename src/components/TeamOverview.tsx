
import React from 'react';
import { Users, UserCheck, Briefcase } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamOverview = () => {
  const teamMembers = [
    { role: 'CEO', name: 'WILLEM FONTIJN', isAffiliate: false, image: '/lovable-uploads/8a3c18d3-2707-40cc-961a-53b60c9c2138.png' },
    { role: 'CFO', name: 'Confidential', isAffiliate: false },
    { role: 'Venture Builder', name: 'FLEUR MOORLAG', isAffiliate: false },
    { role: 'Venture Builder', name: 'WESSEL LIGTENBERG', isAffiliate: false },
    { role: 'Partnerships', name: 'Confidential', isAffiliate: false },
    { role: 'Technology Specialist', name: 'VALERIA GOTTARDO', isAffiliate: false },
    { role: 'Investment Analyst', name: 'SEWA OJUTIKU', isAffiliate: false },
    { role: 'Medical Expert', name: 'BART GEERTS', isAffiliate: true },
    { role: 'Venture Partner (x2)', name: 'Confidential', isAffiliate: true }
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

        <div className="max-w-6xl mx-auto">
          {/* Combined Team */}
          <div className="glass-card p-8 rounded-lg border border-white/20">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Core Team</h3>
                <p className="text-gray-300">9 dedicated members</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border transition-colors ${
                    member.isAffiliate 
                      ? 'bg-emerald-800/60 border-emerald-400/20 hover:border-emerald-400/40' 
                      : 'bg-slate-800/60 border-white/10 hover:border-blue-300/30'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    {member.image ? (
                      <Avatar className="w-12 h-12 mb-3">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="bg-slate-700 text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <>
                        {member.isAffiliate ? (
                          <UserCheck className="w-4 h-4 text-emerald-400 mb-2 flex-shrink-0" />
                        ) : (
                          <Briefcase className="w-4 h-4 text-blue-300 mb-2 flex-shrink-0" />
                        )}
                      </>
                    )}
                    <div>
                      <div className="text-gray-200 text-sm font-medium">{member.role}</div>
                      <div className={`text-xs font-semibold mt-1 ${
                        member.isAffiliate ? 'text-emerald-400' : 'text-blue-300'
                      }`}>
                        {member.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;
