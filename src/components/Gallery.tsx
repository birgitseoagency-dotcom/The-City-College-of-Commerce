import React, { useState } from 'react';
import { GalleryImage } from '../types';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      title: 'College Main Building & Campus',
      category: 'Campus',
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '2',
      title: 'Modern Computer Laboratory',
      category: 'Facilities',
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80', // using high quality campus/lab
    },
    {
      id: '3',
      title: 'Interactive Classroom Lecture',
      category: 'Classrooms',
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '4',
      title: 'Students Group Study Session',
      category: 'Students',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '5',
      title: 'College Library & Resource Center',
      category: 'Facilities',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '6',
      title: 'Annual Commerce Seminar & Workshop',
      category: 'Activities',
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const categories = ['All', 'Campus', 'Classrooms', 'Facilities', 'Students', 'Activities'];

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-blue-900 font-bold uppercase tracking-widest text-xs bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200">
            Campus Life & Environment
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Photo Gallery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Take a visual tour of our campus, classrooms, state-of-the-art facilities, and vibrant student activities in Faisalabad.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-200"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 w-max mb-2">
                  {img.category}
                </span>
                <h3 className="text-white font-bold text-lg flex items-center justify-between">
                  <span>{img.title}</span>
                  <Maximize2 className="w-5 h-5 text-amber-400" />
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500 text-slate-950">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{selectedImage.title}</h3>
              </div>
              <p className="text-sm text-slate-400">The City College of Commerce, Faisalabad</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
