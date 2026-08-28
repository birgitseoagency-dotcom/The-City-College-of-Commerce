import React from 'react';
import { GraduationCap, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg tracking-tight">
                  THE CITY COLLEGE
                </h3>
                <p className="text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                  Of Commerce, Faisalabad
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Quality Education for a Brighter Future. Dedicated to academic excellence, commerce education, and professional leadership.
            </p>

            <div className="space-y-3 text-sm">
              <a href="tel:0418541308" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>0418541308</span>
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>C434+5HM, Main Blvd, D Ground Block D, People's Colony No 1, Faisalabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-amber-400 transition-colors">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('admissions')} className="hover:text-amber-400 transition-colors">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faculty')} className="hover:text-amber-400 transition-colors">
                  Faculty
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-400 transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Programs Offered */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">Programs</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Intermediate in Commerce (I.Com)</li>
              <li>ICS & Intermediate Sciences</li>
              <li>Associate Degree in Commerce (ADC)</li>
              <li>Professional Taxation & Accounting</li>
              <li>Computer Skill Certifications</li>
            </ul>
          </div>

          {/* Newsletter / Notice */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase">Admissions</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Admissions for Academic Session 2026 are now open. Visit campus or call 0418541308.
            </p>
            <a
              href="#admissions"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-md text-center w-full"
            >
              Apply Online
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The City College of Commerce, Faisalabad. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>People's Colony No 1, Faisalabad</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-900 text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors flex items-center justify-center border border-slate-800"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
