import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Mountain, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

const HimachalPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { 
      duration: "4 DAYS / 3 NIGHTS", 
      title: "MANALI MAGIC", 
      route: "MANALI (3N)", 
      tag: "Quick Getaway" 
    },
    { 
      duration: "6 DAYS / 5 NIGHTS", 
      title: "HIMALAYAN DUO", 
      route: "SHIMLA (2N) - MANALI (3N)", 
      tag: "Best Seller" 
    },
    { 
      duration: "10 DAYS / 9 NIGHTS", 
      title: "GRAND HIMACHAL TOUR", 
      route: "SHIMLA (2N) - MANALI (3N) - DHARAMSHALA (1N) - DALHOUSIE (2N) - CHANDIGARH (1N)", 
      tag: "Complete Experience" 
    },
  ];

  return (
    <div className="pt-32 pb-16 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-blue-900"></span>
              <span className="text-blue-900 font-bold uppercase tracking-[0.3em] text-[10px]">The Land Of Gods</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              HIMACHAL <br/>
              <span className="text-blue-600 uppercase">PRADESH</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-blue-600 pl-4">
              Wander through misty pine forests and snow-capped peaks.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[400px] relative rounded-sm overflow-hidden shadow-2xl border-white border-[12px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000" 
              alt="Manali Mountains"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-3">
               <Snowflake size={24} className="text-blue-400" />
            </div>
          </motion.div>
        </div>

        {/* --- PACKAGE LISTING --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-md border-t-4 border-blue-900 flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-black bg-blue-50 text-blue-700 px-3 py-1 uppercase tracking-widest rounded-full mb-4 inline-block italic">
                  {pkg.tag}
                </span>
                <p className="text-blue-600 font-black text-sm mb-1">{pkg.duration}</p>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{pkg.title}</h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-6 border-b border-slate-50 pb-6">
                  {pkg.route}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between">
                  {inclusions.map((inc, i) => (
                    <div key={i} title={inc.text} className="text-slate-300 hover:text-blue-900 transition-colors">
                      {inc.icon}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Mountain size={14} /> More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Mountain size={300} className="absolute -left-20 -bottom-20 text-white" />
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 z-10 relative">
               Explore <span className="text-blue-400">Dream Destination!</span>
             </h2>
             <p className="text-blue-200 font-bold italic mb-8 z-10 relative">
               You'll never forget the experience we are ready to present Joy!
             </p>
             <button className="bg-white text-slate-900 px-12 py-4 font-black uppercase tracking-widest text-xs hover:bg-blue-400 hover:text-white transition-all z-10 relative shadow-2xl">
               Click Here
             </button>
        </div>

      </div>
    </div>
  );
};

export default HimachalPage;