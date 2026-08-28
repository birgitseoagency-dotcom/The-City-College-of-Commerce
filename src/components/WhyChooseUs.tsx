import React from 'react';
import { Award, Users, HeartHandshake, Monitor, Briefcase, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Quality Education',
      description: 'High academic standards, comprehensive curriculum, and rigorous exam preparation designed to secure top board positions.',
      icon: Award,
    },
    {
      title: 'Experienced Faculty',
      description: 'Highly qualified professors and senior educators with decades of teaching excellence and corporate expertise.',
      icon: Users,
    },
    {
      title: 'Student Support',
      description: 'Personalized mentoring, extra tutorial classes, and continuous academic counseling to ensure every student thrives.',
      icon: HeartHandshake,
    },
    {
      title: 'Modern Learning Environment',
      description: 'Air-conditioned classrooms, fully equipped computer laboratories, and a resourceful library in D Ground, Faisalabad.',
      icon: Monitor,
    },
    {
      title: 'Career Development',
      description: 'Professional grooming, internship guidance, and practical workshops bridging classroom learning with the corporate world.',
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-900 font-bold uppercase tracking-widest text-xs bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            What Makes The City College of Commerce Stand Out
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            We provide an empowering educational atmosphere where ambition meets guidance, ensuring every student reaches their highest potential.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full pointer-events-none group-hover:bg-blue-900/10 transition-colors" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-200">
                    <Check className="w-3.5 h-3.5" />
                    <span>Verified Standard</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Extra Highlight Card */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl">
                CCC
              </div>
              <h3 className="text-xl font-bold text-white">Join Our Thriving Community</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Experience education rooted in discipline, integrity, and future-proof skills right in People's Colony No 1, Faisalabad.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
              >
                <span>Visit Campus Today</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
