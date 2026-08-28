import React from 'react';
import { ArrowRight, PhoneCall, Award, Users, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenAdmission: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission, onContactClick }) => {
  const collegeBannerUrl = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80";

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Dark Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${collegeBannerUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-blue-950/80" />

      {/* Decorative Glow Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md shadow-lg">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Faisalabad's Premier Commerce & Academic Institute</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400 font-serif">
                The City College of Commerce
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light italic leading-relaxed">
              Building Bright Futures Through Quality Education. Empowering students with professional acumen, rigorous commerce training, and leadership values.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenAdmission}
                className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-wider group transform hover:-translate-y-0.5"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-xl">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">100%</div>
                <div className="text-xs sm:text-sm text-slate-400">Commitment</div>
              </div>
              <div className="text-center lg:text-left border-x border-slate-800 px-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">Expert</div>
                <div className="text-xs sm:text-sm text-slate-400">Faculty Members</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">D Ground</div>
                <div className="text-xs sm:text-sm text-slate-400">Prime Location</div>
              </div>
            </div>

          </div>

          {/* Right Floating Card / Info Badge */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 p-6 rounded-2xl shadow-2xl space-y-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Admissions Open 2026</h3>
              <p className="text-sm text-slate-300">
                Secure your future in Commerce, Accounting, and Information Technology at Faisalabad's most trusted educational hub.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Intermediate in Commerce (I.Com)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Intermediate Programs (ICS & F.Sc)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Associate Degree in Commerce (ADC)</span>
                </div>
              </div>
              <button
                onClick={onOpenAdmission}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-md"
              >
                Register For Admission
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
