import React from 'react';
import { FacultyMember } from '../types';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Faculty: React.FC = () => {
  const facultyMembers: FacultyMember[] = [
    {
      id: '1',
      name: 'Prof. Muhammad Akram',
      designation: 'Principal & Professor of Economics',
      department: 'Administration & Economics',
      qualification: 'M.A. Economics, University of Punjab',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      bio: 'Over 25 years of distinguished experience in educational leadership and economic instruction.',
    },
    {
      id: '2',
      name: 'Prof. Dr. Tariq Mahmood',
      designation: 'Head of Commerce Department',
      department: 'Accounting & Finance',
      qualification: 'Ph.D. Finance, M.Com (Gold Medalist)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'Expert in corporate accounting, financial analysis, and professional board examination preparation.',
    },
    {
      id: '3',
      name: 'Ms. Ayesha Siddiqui',
      designation: 'Senior Lecturer in Accounting',
      department: 'Commerce & Taxation',
      qualification: 'ACCA, MBA Finance',
      image: 'https://images.unsplash.com/photo-1580894732475-8eb348b64e52?auto=format&fit=crop&w=600&q=80',
      bio: 'Dedicated educator specializing in advanced accounting principles and tax law procedures.',
    },
    {
      id: '4',
      name: 'Mr. Usman Ali',
      designation: 'Head of IT & Computer Studies',
      department: 'Information Technology',
      qualification: 'MS Computer Science, NUST',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      bio: 'Passionate about integrating practical computer skills, database management, and modern tools into commerce.',
    },
    {
      id: '5',
      name: 'Mrs. Farzana Parveen',
      designation: 'Lecturer in Business Communication',
      department: 'Languages & Humanities',
      qualification: 'M.A. English Literature',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      bio: 'Expert in personality grooming, professional business writing, and public speaking.',
    },
    {
      id: '6',
      name: 'Mr. Faisal Nadeem',
      designation: 'Lecturer in Business Mathematics & Stats',
      department: 'Quantitative Sciences',
      qualification: 'M.Sc. Statistics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: 'Simplifying complex quantitative methods and statistical models for commerce students.',
    },
  ];

  return (
    <section id="faculty" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-900 font-bold uppercase tracking-widest text-xs bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Our Academic Leaders
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Meet Our Expert Faculty
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Our experienced professors and educators are dedicated to mentoring students, imparting deep knowledge, and inspiring lifelong success.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 inline-block mb-2">
                      {member.department}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="text-blue-900 font-semibold text-sm">
                    {member.designation}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="font-medium">{member.qualification}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4 text-blue-900" />
                    <span>The City College of Commerce</span>
                  </span>
                  <span className="text-blue-900 font-medium">Faculty Member</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
