import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', phone: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-900 font-bold uppercase tracking-widest text-xs bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Contact The City College of Commerce
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Have questions about admissions, programs, or campus visits? Reach out to us or drop by our Faisalabad campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold tracking-tight">Contact Information</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We are available to guide you through your academic journey. Connect with us via phone, email, or visit our campus.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Phone Number</h4>
                    <a href="tel:0418541308" className="text-amber-400 hover:text-amber-300 font-bold text-lg tracking-wide">
                      0418541308
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Campus Address</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mt-1">
                      C434+5HM, Main Blvd, D Ground Block D, People's Colony No 1, Faisalabad, Pakistan
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center shrink-0 border border-slate-700">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Office Hours</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Monday – Saturday: 8:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Call Now Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="tel:0418541308"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-base"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 0418541308</span>
                </a>
              </div>
            </div>

            {/* Quick Map Location Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span>Prime Faisalabad Location</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conveniently situated in the vibrant D Ground commercial and educational hub of People's Colony No 1, easily accessible by public and private transport.
              </p>
            </div>
          </div>

          {/* Right Form & Map Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
              <p className="text-slate-600 text-sm mb-6">
                Fill out the form below and our admission or inquiry team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
                  <p className="text-sm">
                    Thank you for reaching out to The City College of Commerce. We have received your query and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ali Ahmed"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 03001234567"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ali@example.com"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query regarding admissions, programs, or campus visits..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-base flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Location Area */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72 relative bg-slate-100 flex items-center justify-center">
              {/* Embedded interactive or styled map view */}
              <iframe
                title="Google Maps Location - D Ground Faisalabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.008447883017!2d73.1098!3d31.4180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI1JzA0LjgiTiA3M2MDYnMzUuMyJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-medium shadow-lg">
                📍 People's Colony No 1, D Ground, Faisalabad
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
