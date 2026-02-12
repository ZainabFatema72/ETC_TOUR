import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const EuropePackage = () => {
  const highlights = [
    { icon: <Plane size={20} />, text: "Flights" },
    { icon: <Hotel size={20} />, text: "Hotels" },
    { icon: <Utensils size={20} />, text: "Meals" },
    { icon: <Activity size={20} />, text: "Activities" },
    { icon: <Car size={20} />, text: "Transfers" },
  ];

  return (
    <div className="pt-32 pb-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Whenever You're Ready</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">
              EUROPE <br/>
              <span className="text-blue-600 uppercase text-4xl md:text-6xl">Greece & Turkey</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 mb-6 italic border-l-4 border-blue-600 pl-4">
              GREECE (5N) — TURKEY (5N)
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-2 text-sm font-black uppercase tracking-widest mb-8 border border-blue-100">
              <MapPin size={16} /> 11 Days / 10 Nights
            </div>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-5 gap-2 md:gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-3 bg-slate-50 rounded-sm hover:bg-blue-600 group transition-all duration-300">
                  <div className="text-blue-600 group-hover:text-white mb-2">{item.icon}</div>
                  <span className="text-[9px] font-bold uppercase text-slate-500 group-hover:text-white tracking-tighter">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[450px] relative"
          >
            <div className="absolute inset-0 border-2 border-blue-600 translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop" 
              alt="Santorini Greece"
              className="w-full h-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- TESTIMONIAL SECTION --- */}
          <div className="bg-slate-50 p-8 border-l-8 border-blue-600 shadow-sm relative">
            <Quote className="absolute top-4 right-4 text-blue-200 opacity-20" size={60} />
            <h3 className="text-lg font-black text-slate-900 uppercase mb-6 tracking-tight">Client Appreciation</h3>
            <div className="flex flex-col gap-4">
              <div className="flex text-yellow-500 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic text-[13px] leading-relaxed">
                "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan - Executive Vice President from your M/s Express Travel... The service was exemplary."
              </p>
              <div className="mt-2">
                <p className="font-black text-blue-900 text-xs uppercase tracking-widest">Ramesh Babu</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Corporate Client</p>
              </div>
            </div>
          </div>

          {/* --- CALL TO ACTION CARD --- */}
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-900 to-slate-900 p-10 relative flex flex-col justify-center">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                Explore Dream Destination!
              </h2>
              <p className="text-blue-300 font-bold text-lg italic mb-6">
                You'll never forget the experience we are ready to present you!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-900 hover:bg-blue-600 hover:text-white px-8 py-3 font-black uppercase tracking-widest text-[11px] transition-all shadow-lg">
                  More Details
                </button>
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 font-black uppercase tracking-widest text-[11px] transition-all shadow-lg">
                  Click Here
                </button>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Plane size={200} className="rotate-45 translate-x-20 translate-y-10 text-white" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EuropePackage;