import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: "agra.jpg",
    title: "AGRA",
    sub: "Witness the timeless beauty of the Taj Mahal. A symbol of eternal love and a masterpiece of Mughal architecture."
  },
  {
    img: "kerla.jpg",
    title: "KERALA",
    sub: "Escape to God's Own Country. Experience the tranquil backwaters and lush tea plantations."
  },
  {
    img: "/pondi.jpg",
    title: "MUMBAI",
    sub: "Experience the city that never sleeps. From the colonial charm of Gateway of India to the dazzling Queen's Necklace at Marine Drive."
},
  {
    img: "/jaipur.jpg",
    title: "JAIPUR",
    sub: "Explore the Pink City's royal heritage. Majestic forts and Rajputana history await you."
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
    // Height ko h-screen se badal kar h-[75vh] kiya hai
    <section className="relative w-full h-[75vh] md:h-[95vh] overflow-hidden  font-sans">
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
            className={`w-full h-full object-cover transform transition-transform duration-[7000ms] ease-out ${
              index === current ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
        </div>
      ))}

      {/* --- CENTER TEXT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-10">
        {slides.map((slide, index) => (
          index === current && (
            <div key={index} className="flex flex-col items-center">
              <span className="text-blue-500 font-black tracking-[0.4em] text-[10px] md:text-xs mb-2 animate-slide-in uppercase">
                Explore Incredible India
              </span>
              
              <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter animate-slide-in leading-none">
                {slide.title}
              </h1>
              
              <div className="h-1 w-20 bg-blue-500 my-4 animate-slide-in delay-100"></div>

              <p className="text-gray-200 text-xs md:text-lg max-w-xl font-medium leading-relaxed animate-slide-in delay-200">
                {slide.sub}
              </p>
            </div>
          )
        ))}

        {/* STATIC BUTTON */}
        <div className="z-30 mt-8">
            <button className="px-8 py-3 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] hover:bg-slate-700 transition-all duration-300 shadow-xl">
              Book Your Trip
            </button>
        </div>
      </div>

      {/* INDICATORS - Thoda upar shift kiye hain */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-none ${
                i === current ? "w-10 bg-blue-500" : "w-3 bg-white/30"
            }`}
          ></button>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          0% { transform: translateY(20px); opacity: 0; filter: blur(5px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        .animate-slide-in { animation: slideIn 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default Herosection;