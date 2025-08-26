

import React from 'react';
import { Users, UserCheck, Briefcase } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamOverview = () => {
  const teamMembers = [
    { role: 'CEO', name: 'WILLEM FONTIJN', isAffiliate: false, image: '/lovable-uploads/8a3c18d3-2707-40cc-961a-53b60c9c2138.png', linkedInUrl: 'https://www.linkedin.com/in/willemfontijn/' },
    { role: 'CFO', name: 'Confidential', isAffiliate: false, image: '/lovable-uploads/adc37770-11ae-43e5-b01e-ea30f8759ab7.png' },
    { role: 'Venture Builder', name: 'FLEUR MOORLAG', isAffiliate: false, image: '/lovable-uploads/971c3039-56b8-4a74-bf01-21e916c08fb9.png', linkedInUrl: 'https://www.linkedin.com/in/fleurmoorlag/' },
    { role: 'Venture Builder', name: 'WESSEL LIGTENBERG', isAffiliate: false, image: '/lovable-uploads/e5a8ef7e-906d-4c64-8954-35917d8391c8.png', linkedInUrl: 'https://www.linkedin.com/in/wesselligtenberg/' },
    { role: 'Partnerships', name: 'CIARA HENNESSY', isAffiliate: false, image: '/lovable-uploads/9fac4dc3-2a07-4460-89d1-83b3b489b4d0.png' },
    { role: 'Technology Specialist', name: 'VALERIA GOTTARDO', isAffiliate: false, image: '/lovable-uploads/de5ab3c1-a479-4cf0-9142-ea3b1727eb8e.png', linkedInUrl: 'https://www.linkedin.com/in/valeriagottardo/' },
    { role: 'Investment Analyst', name: 'SEWA OJUTIKU', isAffiliate: false, image: '/lovable-uploads/5e9acbe5-ee42-439d-b1ac-3ec4c163eafc.png', linkedInUrl: 'https://www.linkedin.com/in/sewa-ojutiku/' },
    { role: 'Medical Expert', name: 'BART GEERTS', isAffiliate: true, image: '/lovable-uploads/c9284be7-9e6a-49c5-9a56-160d92c1e9f3.png', linkedInUrl: 'https://www.linkedin.com/in/bfgeerts/' },
    { role: 'Venture Partner', name: 'Confidential', isAffiliate: true, image: '/lovable-uploads/adc37770-11ae-43e5-b01e-ea30f8759ab7.png' },
    { role: 'Funding Expert', name: 'ARVIND RAO', isAffiliate: true, image: '/lovable-uploads/f96c63bb-1024-488c-8868-ba207fae18b9.png', linkedInUrl: 'https://www.linkedin.com/in/arvind-rao-4852012/' }
  ];

  return (
    <section id="team" className="section-padding bg-slate-800/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="heading">
            Team <span className="text-blue-300">Overview</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
            Experienced and complete team: 3x serial entrepreneurs, 2x MD (GP, Medical specialist) 
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
                <h3 className="text-2xl font-bold text-white">Team</h3>
                <p className="text-gray-300">7 dedicated <span className="text-blue-300">core members</span> and 3 <span className="text-emerald-400">affiliates</span></p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {teamMembers.map((member, index) => {
                const MemberContent = () => (
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
                );

                return (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border transition-colors ${
                      member.isAffiliate 
                        ? 'bg-emerald-800/60 border-emerald-400/20 hover:border-emerald-400/40' 
                        : 'bg-slate-700/40 border-slate-500/30 hover:border-slate-400/50'
                    }`}
                  >
                    {member.linkedInUrl ? (
                      <a 
                        href={member.linkedInUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block hover:opacity-80 transition-opacity"
                      >
                        <MemberContent />
                      </a>
                    ) : (
                      <MemberContent />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;

