import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cats: React.FC = () => {
  const navigate = useNavigate();

  const cats = Array.from({ length: 14 }, (_, i) => ({
    src: new URL(`../assets/cats/cat${i + 1}.jpg`, import.meta.url).href,
    alt: `Cat ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 text-[#D4B9A9] hover:text-[#E8D3C7] transition-colors flex items-center gap-2"
        >
          <span>←</span> Back to Wedding
        </button>
        <h1 className="text-3xl md:text-4xl font-playfair text-center mb-12">Meet Our Cats</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cats.map((cat, index) => (
            <div 
              key={index}
              className={`group ${
                index % 3 === 1 ? 'md:translate-y-8' : ''
              }`}
            >
              <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={cat.src}
                  alt={cat.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cats; 