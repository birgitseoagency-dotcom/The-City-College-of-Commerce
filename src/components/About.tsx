import React from 'react';
import { Target, Compass, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-900 font-bold uppercase tracking-widest text-xs bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200">
            About Our Institute
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            The City College of Commerce
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            A premier educational institution in Faisalabad dedicated to shaping brilliant minds and future business leaders through rigorous academic standards and practical training.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Images Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                  alt="Students learning at college"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover border-4 border-white"
                />
              </div>
              <div className="col-span-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                  alt="Commerce education discussion"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover border-4 border-white"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 right-6 bg-blue-900 text-white p-6 rounded-2xl shadow-xl border border-blue-800 hidden sm:block max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl shrink-0">
                  15+
                </div>
                <div>
                  <h4 className="font-bold text-sm">Years of Excellence</h4>
                  <p className="text-xs text-slate-300">Providing top-tier commerce and academic education in Faisalabad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Committed to Academic Excellence & Professional Success
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-base">
              Located in the heart of Faisalabad at People's Colony No 1, <strong>The City College of Commerce</strong> has earned a distinguished reputation for fostering intellectual growth, disciplined study habits, and robust business acumen. We believe that quality education is the bedrock of a thriving society and a prosperous career.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Academic Excellence</h4>
                  <p className="text-sm text-slate-600">Rigorous curricula mapped to board and university standards, ensuring exceptional board examination results.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Commerce & Professional Development</h4>
                  <p className="text-sm text-slate-600">Specialized training in accounting, finance, modern taxation, and IT tools required by today's corporate world.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Holistic Student Success</h4>
                  <p className="text-sm text-slate-600">Dedicated career counseling, personality grooming, seminars, and extracurricular activities for all-round development.</p>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Our Mission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To deliver accessible, world-class commerce education and empower students with practical competence and strong moral values.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Our Vision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be the leading commerce institution in Pakistan, recognized for producing dynamic financial professionals and entrepreneurs.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
