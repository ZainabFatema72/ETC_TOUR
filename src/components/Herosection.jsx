import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470",
    title: "LONDON",
    sub: "Explore the historic streets of London, from the iconic Big Ben to the majestic River Thames. Experience a blend of royal tradition and modern culture."
  },
  {
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1496",
    title: "ROME",
    sub: "Step back in time in the Eternal City. From the Colosseum to the Vatican, Rome offers a journey through thousands of years of history and art."
  },
  {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473",
    title: "PARIS",
    sub: "Discover the City of Love. Witness the magic of the Eiffel Tower, the charm of Montmartre, and the world-class art at the Louvre Museum."
  },
  {
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470",
    title: "DUBAI",
    sub: "Experience the future in the heart of the desert. From the heights of Burj Khalifa to luxury shopping, Dubai is a city of limitless possibilities."
  }
];

const Herosection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden bg-black font-sans">
      {/* --- BACKGROUND SLIDESHOW --- */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className={`w-full h-full object-cover transform ${
                index === current ? "animate-kenburns scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* --- RIGHT-TO-CENTER TEXT ANIMATION --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {slides.map((slide, index) => (
          index === current && (
            <div key={index} className="flex flex-col items-center">
              <h1 className="text-white text-5xl md:text-9xl font-black uppercase tracking-tighter animate-slide-in">
                {slide.title}
              </h1>
              
              <div className="h-1 w-20 bg-orange-500 my-4 animate-slide-in delay-100"></div>

              <p className="text-gray-100 text-sm md:text-xl max-w-2xl font-medium leading-relaxed animate-slide-in delay-200">
                {slide.sub}
              </p>

              <button className="mt-10 px-10 py-4 bg-blue-500 text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 animate-slide-in delay-300">
                Book Your Trip
              </button>
            </div>
          )
        ))}
      </div>

      {/* --- SLIDE INDICATORS (BOTTOM) --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-12 bg-orange-500" : "w-4 bg-white/30"}`}
          ></button>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(150px);
            opacity: 0;
            filter: blur(15px);
          }
          100% {
            transform: translateX(0);
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-slide-in {
          animation: slideIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-kenburns {
          animation: kenburns 7s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.45s; }
      `}</style>
    </section>
  );
};

export default Herosection;