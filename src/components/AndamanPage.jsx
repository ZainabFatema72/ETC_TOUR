import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Anchor, Ship } from 'lucide-react';
import { motion } from 'framer-motion';

const AndamanPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { duration: "5 DAYS / 4 NIGHTS", route: "PORT BLAIR (2N) - HAVELOCK (2N)" },
    { duration: "7 DAYS / 6 NIGHTS", route: "PORT BLAIR (3N) - HAVELOCK (2N) - NEIL ISLAND (1N)" },
    { duration: "6 DAYS / 5 NIGHTS", route: "PORT BLAIR (3N) - HAVELOCK (2N)" },
    { duration: "8 DAYS / 7 NIGHTS", route: "PORT BLAIR (3N) - HAVELOCK (3N) - NEIL ISLAND (1N)" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#f0f9ff] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-cyan-600"></span>
              <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-[10px]">Emerald. Blue And You</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">
              ANDAMAN <br/>
              <span className="text-blue-700 uppercase">ISLANDS</span>
            </h1>
            <p className="text-lg font-medium text-slate-500 max-w-md leading-relaxed">
              Explore the pristine white sands and turquoise waters of the Bay of Bengal with our curated island packages.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[350px] relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/andaman.jpg" 
              alt="Andaman Beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </motion.div>
        </div>

        {/* --- PACKAGE GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-6 border-b-4 border-blue-600 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <Ship className="text-blue-600" size={20} />
                </div>
                <h3 className="text-blue-700 font-black text-xl mb-2">{pkg.duration}</h3>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tight mb-6 h-12">
                  {pkg.route}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 py-4 border-t border-slate-50">
                  {inclusions.map((inc, i) => (
                    <div key={i} title={inc.text} className="text-slate-300 hover:text-blue-500 transition-colors">
                      {inc.icon}
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIAL & CTA --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-xl border border-blue-50 relative">
            <Quote className="absolute top-4 right-4 text-blue-50" size={60} />
            <h3 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-6 border-b pb-2 inline-block">Client Feedback</h3>
            <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
              "We would like to appreciate your good office for arranging travel trip to Maldives for our Director, Mr Walfred Tagor..."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">JM</div>
              <p className="font-black text-slate-900 text-[11px] uppercase tracking-wider">Jestin Mathew</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-blue-900 p-10 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-10">
                <Anchor size={200} className="translate-x-10 -translate-y-10 rotate-12 text-white" />
             </div>
             <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 z-10">
               Explore <span className="text-cyan-400 text-4xl md:text-5xl">Dream Destination!</span>
             </h2>
             <p className="text-blue-200 font-bold italic mb-8 z-10">
               You'll never forget the experience we are ready to present you!
             </p>
             <button className="bg-cyan-500 hover:bg-cyan-600 text-white w-fit px-12 py-4 font-black uppercase tracking-widest text-xs transition-transform hover:scale-105 z-10 shadow-lg">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AndamanPage;