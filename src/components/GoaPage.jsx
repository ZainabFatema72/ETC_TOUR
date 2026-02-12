import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Sun, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';

const GoaPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { duration: "4 DAYS / 3 NIGHTS", title: "GOA ESCAPE", stay: "GOA (3N)", highlight: "Popular" },
    { duration: "5 DAYS / 4 NIGHTS", title: "GOA LEISURE", stay: "GOA (4N)", highlight: "Recommended" },
  ];

  return (
    <div className="pt-32 pb-16 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-yellow-500"></span>
              <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-[10px]">A Perfect Holiday Destination</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-4 tracking-tighter">
              GOA <br/>
              <span className="text-cyan-500 uppercase">Vibes</span>
            </h1>
            <p className="text-xl font-bold text-slate-500 italic flex items-center gap-2">
              <Palmtree className="text-green-500" /> Sun, Sand, and Serenity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 h-[400px] relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full -z-10 animate-pulse"></div>
            <img 
              src="/goa.jpg" 
              alt="Goa Beach Resort"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-b-8 border-cyan-500"
            />
            <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl rounded-lg">
              <Sun className="text-yellow-500 animate-spin-slow" size={32} />
            </div>
          </motion.div>
        </div>

        {/* --- PACKAGE CARDS --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-10 border-l-8 border-blue-600 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 font-black text-[9px] px-6 py-2 uppercase tracking-widest -rotate-0">
                {pkg.highlight}
              </div>
              <div className="mb-8">
                <p className="text-blue-600 font-black text-lg mb-1">{pkg.duration}</p>
                <h3 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">{pkg.title}</h3>
                <p className="text-slate-500 font-bold tracking-widest text-sm uppercase">{pkg.stay}</p>
              </div>

              <div className="grid grid-cols-5 gap-4 mb-10 border-y border-slate-200 py-6">
                {inclusions.map((inc, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="text-slate-400 group-hover:text-cyan-500 transition-colors mb-2">
                      {inc.icon}
                    </div>
                    <span className="text-[8px] font-black uppercase text-slate-400">{inc.text}</span>
                  </div>
                ))}
              </div>

              <button className="bg-slate-900 text-white px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-cyan-600 transition-all flex items-center gap-3">
                More Details <Car size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIAL & FOOTER CTA --- */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="bg-white p-8 border border-slate-100 shadow-xl relative">
            <Quote className="absolute top-4 right-4 text-cyan-50" size={80} />
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Client Experience</h3>
            <div className="flex text-yellow-400 gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
              "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan - Executive Vice President from your M/s Express Travel... The service was prompt and the car was in top condition."
            </p>
            <p className="font-black text-blue-900 text-xs uppercase tracking-widest">Ramesh Babu</p>
          </div>

          <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-slate-900 p-12 relative flex flex-col justify-center rounded-sm">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Explore Your <br/><span className="text-cyan-400">Dream Destination!</span>
            </h2>
            <p className="text-blue-200 font-bold italic mb-8">
              You'll never forget the experience we are ready to present Joy!
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-slate-900 px-12 py-4 font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all">
                Click Here
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GoaPage;