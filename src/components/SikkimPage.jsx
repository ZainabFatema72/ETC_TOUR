import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Mountain, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

const SikkimPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { duration: "5 DAYS / 4 NIGHTS", title: "Quick Eastern Hub", route: "GANGTOK (2N) - DARJEELING (2N)", tag: "Short Break" },
    { duration: "7 DAYS / 6 NIGHTS", title: "Himalayan Duo", route: "DARJEELING (3N) - GANGTOK (3N)", tag: "Bestseller" },
    { duration: "7 DAYS / 6 NIGHTS", title: "Three Jewels Tour", route: "KALIMPONG (1N) - GANGTOK (3N) - DARJEELING (2N)", tag: "Complete" },
    { duration: "7 DAYS / 6 NIGHTS", title: "Pelling & Peaks", route: "GANGTOK (2N) - PELLING (2N) - DARJEELING (2N)", tag: "Scenic" },
    { duration: "7 DAYS / 6 NIGHTS", title: "Northern Heights", route: "GANGTOK (3N) - LACHUNG (1N) - DARJEELING (2N)", tag: "High Altitude" },
    { duration: "7 DAYS / 6 NIGHTS", title: "Heritage Circuit", route: "DARJEELING (2N) - PELLING (2N) - GANGTOK (2N)", tag: "Classic" },
    { duration: "7 DAYS / 6 NIGHTS", title: "Silk Route Adventure", route: "SILIGURI (1N) - GANGTOK (1N) - LACHEN (1N) - LACHUNG (1N) - GANGTOK (2N)", tag: "Adventurous" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#f5f3ff] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-indigo-600"></span>
              <span className="text-indigo-700 font-bold uppercase tracking-[0.3em] text-[10px]">Small But Beautiful</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              SIKKIM & <br/>
              <span className="text-indigo-600 uppercase">DARJEELING</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-indigo-600 pl-4">
              Experience the mystical charm of the Kanchenjunga and the world-famous tea gardens.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[400px] relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1615555415394-b52467d98344?q=80&w=2000" 
              alt="Gangtok Monastery"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-full">
               <Wind size={20} className="text-indigo-600" />
            </div>
          </motion.div>
        </div>

        {/* --- PACKAGE MASONRY-STYLE GRID --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid bg-white p-8 shadow-lg rounded-2xl border-l-4 border-indigo-500 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-black bg-indigo-50 text-indigo-700 px-3 py-1 rounded uppercase tracking-widest">
                  {pkg.tag}
                </span>
                <Mountain className="text-indigo-100" size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-1 leading-none">{pkg.title}</h3>
              <p className="text-indigo-600 font-black text-sm mb-4">{pkg.duration}</p>
              <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-8">
                {pkg.route}
              </p>

              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                <div className="flex gap-2">
                  {inclusions.slice(0, 3).map((inc, i) => (
                    <div key={i} title={inc.text} className="text-slate-200">
                      {inc.icon}
                    </div>
                  ))}
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="bg-white p-12 border-2 border-indigo-100 rounded-[3rem] text-center shadow-2xl shadow-indigo-100 relative overflow-hidden">
             <div className="absolute -left-10 -bottom-10 opacity-5">
                <Mountain size={200} />
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
               Explore <span className="text-indigo-600">Dream Destination!</span>
             </h2>
             <p className="text-slate-400 font-bold italic mb-10">
               You'll never forget the experience we are ready to present Joy!
             </p>
             <button className="bg-indigo-600 text-white px-20 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl shadow-indigo-200">
               Click Here
             </button>
        </div>

      </div>
    </div>
  );
};

export default SikkimPage;