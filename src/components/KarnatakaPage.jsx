import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Trees, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const KarnatakaPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#fcfdfa] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-emerald-700"></span>
              <span className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-[10px]">One State, Many Worlds</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              KARNATAKA <br/>
              <span className="text-emerald-700 uppercase italic text-4xl md:text-6xl">Heritage & Hills</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-emerald-600 pl-4">
              From the coffee-scented trails of Coorg to the royal grandeur of Mysore.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1590424600803-0ec3531b73f7?q=80&w=2070" 
              alt="Coorg Coffee Plantation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-900/10"></div>
          </motion.div>
        </div>

        {/* --- PACKAGE SECTION --- */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-xl border border-emerald-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-emerald-700 text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">
              Nature Escape
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
              <div>
                <p className="text-emerald-600 font-black text-lg mb-1">3 DAYS / 2 NIGHTS</p>
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tight">COORG</h3>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                  <Trees size={14} className="text-emerald-500" /> Scotland of India
                </p>
              </div>
              <div className="flex gap-3">
                {inclusions.map((inc, i) => (
                  <div key={i} className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all shadow-sm">
                    {inc.icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-100">
              <button className="flex-1 bg-slate-900 text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all">
                More Details
              </button>
              <button className="flex-1 border-2 border-slate-900 text-slate-900 py-4 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
                Enquire Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="bg-slate-900 p-12 rounded-2xl relative overflow-hidden group">
             <Map size={200} className="absolute -right-10 -bottom-10 text-white/5 group-hover:scale-110 transition-transform duration-700" />
             <div className="relative z-10 text-center">
               <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                 Explore <span className="text-emerald-400">Dream Destination!</span>
               </h2>
               <p className="text-slate-400 font-bold italic mb-8">
                 You'll never forget the experience we are ready to present Joy!
               </p>
               <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-4 font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-emerald-900/40">
                 Click Here
               </button>
             </div>
        </div>

      </div>
    </div>
  );
};

export default KarnatakaPage;