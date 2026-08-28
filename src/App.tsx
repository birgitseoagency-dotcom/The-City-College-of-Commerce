import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Admissions } from './components/Admissions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Faculty } from './components/Faculty';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar onOpenAdmission={() => setAdmissionModalOpen(true)} />
      
      <main>
        <Hero 
          onOpenAdmission={() => setAdmissionModalOpen(true)} 
          onContactClick={handleContactClick}
        />
        <About />
        <Programs onOpenAdmission={() => setAdmissionModalOpen(true)} />
        <Admissions onOpenAdmission={() => setAdmissionModalOpen(true)} />
        <WhyChooseUs />
        <Faculty />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <AdmissionModal 
        isOpen={admissionModalOpen} 
        onClose={() => setAdmissionModalOpen(false)} 
      />
    </div>
  );
}
