import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, GraduationCap, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenAdmission: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a href="tel:0418541308" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Phone: 0418541308</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate max-w-md">People's Colony No 1, Main Blvd, D Ground, Faisalabad</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-medium text-xs border border-amber-500/30">
              Admissions Open 2026-27
            </span>
          </div>
        </div>
      </div>

      {/* Main Header & Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-800 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight">
                THE CITY COLLEGE
              </h1>
              <p className="text-[10px] text-blue-800 font-bold tracking-widest uppercase">
                Of Commerce
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu in one line: Home | About Us | Programs | Admissions | Faculty | Gallery | Contact Us */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <button
              onClick={() => scrollToSection('home')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-900 transition-colors text-blue-900"
            >
              Home
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-900 transition-colors"
            >
              About Us
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => scrollToSection('programs')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-900 transition-colors"
            >
              Programs
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => scrollToSection('admissions')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-900 transition-colors"
            >
              Admissions
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => scrollToSection('faculty')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-900 transition-colors"
            >
              Faculty
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => scrollToSection('gallery')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-900 transition-colors"
            >
              Gallery
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-900 transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Apply Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAdmission}
              className="bg-blue-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-sm"
            >
              Apply Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 animate-fadeIn">
            <div className="flex flex-col space-y-3 font-medium text-slate-700">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-900"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-900"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-900"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('admissions')}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-900"
              >
                Admissions
              </button>
              <button
                onClick={() => scrollToSection('faculty')}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-900"
              >
                Faculty
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-900"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-900"
              >
                Contact Us
              </button>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmission();
                  }}
                  className="w-full bg-blue-900 text-white font-medium py-2.5 rounded-xl text-center shadow-sm"
                >
                  Apply For Admission
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
