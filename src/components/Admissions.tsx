import React from 'react';
import { UserCheck, FileText, CheckCircle2, ArrowRight, Calendar, Award } from 'lucide-react';

interface AdmissionsProps {
  onOpenAdmission: () => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({ onOpenAdmission }) => {
  return (
    <section id="admissions" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Decorative BG shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Calendar className="w-4 h-4" />
              <span>Fall Session 2026 Admissions Open</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight">
              Begin Your Journey to Success at <span className="text-amber-400 font-serif">The City College of Commerce</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Take the first step toward a rewarding career in commerce, finance, and information technology. Our streamlined admission process and expert counseling ensure you find the right program for your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Merit & Need-Based Scholarships</h4>
                  <p className="text-xs text-slate-300 mt-1">Special fee concessions for high achievers and deserving students.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Experienced Guidance</h4>
                  <p className="text-xs text-slate-300 mt-1">Counseling sessions with senior professors before course selection.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenAdmission}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-wider group"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:0418541308"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-wider"
              >
                <span>Call: 0418541308</span>
              </a>
            </div>
          </div>

          {/* Right Admission Steps Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white">Admission Process</h3>
                <Award className="w-6 h-6 text-amber-400" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Submit Online Form</h4>
                    <p className="text-xs text-slate-300">Fill out our quick online admission form with your academic details.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Document Verification</h4>
                    <p className="text-xs text-slate-300">Bring your Matric/Intermediate result card and ID documents to campus.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Fee Challan & Enrollment</h4>
                    <p className="text-xs text-slate-300">Collect your fee voucher, confirm enrollment, and start classes.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenAdmission}
                className="w-full bg-white hover:bg-slate-100 text-blue-950 font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Start Application Now</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
