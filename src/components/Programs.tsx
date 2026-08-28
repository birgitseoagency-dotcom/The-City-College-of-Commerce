import React from 'react';
import { BookOpen, Briefcase, GraduationCap, Laptop, CheckCircle, ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramsProps {
  onOpenAdmission: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenAdmission }) => {
  const programsList: Program[] = [
    {
      id: 'icom',
      title: 'Intermediate in Commerce (I.Com)',
      category: 'Intermediate Programs',
      description: 'The foundational stepping stone for business, banking, and accounting careers. Comprehensive training in Principles of Accounting, Commercial Geography, Banking, and Economics.',
      duration: '2 Years',
      eligibility: 'Matriculation (Science/Arts) with minimum 45% marks',
      features: ['Advanced Accounting Labs', 'Exam Prep & Past Papers', 'Experienced Faculty guidance'],
      iconName: 'GraduationCap',
    },
    {
      id: 'intermediate-general',
      title: 'Intermediate Programs',
      category: 'Higher Secondary',
      description: 'Diverse intermediate programs including ICS (Computer Science) and F.Sc / FA designed to give students a versatile academic foundation for higher education.',
      duration: '2 Years',
      eligibility: 'Matriculation from any recognized Board',
      features: ['State-of-the-art Computer Lab', 'Science Laboratories', 'Dedicated Subject Specialists'],
      iconName: 'BookOpen',
    },
    {
      id: 'commerce-education',
      title: 'Commerce Education',
      category: 'Higher Education / ADC',
      description: 'Advanced commerce training including Associate Degree in Commerce (ADC) and B.Com guidance, equipping students for managerial, auditing, and financial roles.',
      duration: '2 Years / Flexible',
      eligibility: 'Intermediate (I.Com / FA / F.Sc / ICS)',
      features: ['Corporate Accounting', 'Business Law & Taxation', 'Financial Statement Analysis'],
      iconName: 'Briefcase',
    },
    {
      id: 'professional-development',
      title: 'Professional & Academic Development',
      category: 'Skill Enhancement',
      description: 'Short-term professional certification courses covering modern accounting software (QuickBooks, Peachtree, Excel), taxation procedures, and English communication skills.',
      duration: '3 to 6 Months',
      eligibility: 'Open to Students & Working Professionals',
      features: ['Hands-on Computer Training', 'Tax Filing Practical Workshop', 'Professional Certificate on Completion'],
      iconName: 'Laptop',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-900" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-900" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-900" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-900" />;
      default:
        return <GraduationCap className="w-6 h-6 text-blue-900" />;
    }
  };

  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-900 font-bold uppercase tracking-widest text-xs bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Academic Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Our Programs & Courses
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Explore our comprehensive range of academic and professional programs tailored for excellence in commerce, technology, and business.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsList.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    {getIcon(prog.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {prog.duration}
                  </span>
                </div>

                <div className="text-xs text-blue-800 font-medium uppercase tracking-wider">
                  {prog.category}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {prog.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-semibold text-slate-700">Eligibility:</div>
                  <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    {prog.eligibility}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenAdmission}
                  className="w-full mt-4 bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 font-medium py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Apply For Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
