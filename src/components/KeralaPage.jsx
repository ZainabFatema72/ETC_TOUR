import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Anchor, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const KeralaPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { duration: "5 DAYS / 4 NIGHTS", title: "Misty Munnar", route: "MUNNAR (3N) - ALLEPPEY (1N)", tag: "Budget" },
    { duration: "8 DAYS / 7 NIGHTS", title: "Grand Kerala", route: "KOCHI (1N) - MUNNAR (2N) - THEKKADY (1N) - ALLEPPEY (1N) - KOVALAM (2N)", tag: "Full Tour" },
    { duration: "6 DAYS / 5 NIGHTS", title: "Southern Bliss", route: "MUNNAR (2N) - THEKKADY (1N) - ALLEPPEY (1N) - KOVALAM (1N)", tag: "Classic" },
    { duration: "6 DAYS / 5 NIGHTS", title: "City & Hills", route: "MUNNAR (2N) - ALLEPPEY (1N) - KOCHI (2N)", tag: "Recommended" },
    { duration: "5 DAYS / 4 NIGHTS", title: "Nature Trail", route: "MUNNAR (2N) - THEKKADY (1N) - ALLEPPEY (1N)", tag: "Nature" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#f7fdf9] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold uppercase tracking-[0.3em] text-[10px]">God's Own Country</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              PURE <br/>
              <span className="text-emerald-600 uppercase">KERALA</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-emerald-600 pl-4">
              From emerald tea gardens to serene palm-fringed backwaters.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[350px] relative rounded-lg overflow-hidden border-8 border-white shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000" 
              alt="Kerala Backwaters"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-700 text-white p-3 rounded-full shadow-lg">
               <Anchor size={24} />
            </div>
          </motion.div>
        </div>

        {/* --- PACKAGE GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border-t-8 border-emerald-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black bg-emerald-50 text-emerald-700 px-3 py-1 rounded uppercase tracking-widest border border-emerald-100">
                    {pkg.tag}
                  </span>
                  <Compass className="text-emerald-200" size={20} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">{pkg.title}</h3>
                <p className="text-emerald-600 font-black text-sm mb-4">{pkg.duration}</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-8">
                  {pkg.route}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between border-y border-slate-50 py-4">
                  {inclusions.map((inc, i) => (
                    <div key={i} title={inc.text} className="text-slate-300 hover:text-emerald-700 transition-colors">
                      {inc.icon}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIAL & CTA --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border-l-8 border-emerald-800 shadow-xl relative overflow-hidden">
            <Quote className="absolute top-4 right-4 text-emerald-50" size={60} />
            <h3 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-6 block">Executive Feedback</h3>
            <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
              "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan... the transport services in Kerala were exceptional. Highly recommended for corporate trips."
            </p>
            <p className="font-black text-slate-900 text-[11px] uppercase tracking-wider">Ramesh Babu — <span className="text-emerald-600 italic font-medium">Verified Client</span></p>
          </div>

          <div className="lg:col-span-2 bg-[#1a3a3a] p-10 flex flex-col justify-center relative rounded-sm overflow-hidden">
             <div className="absolute right-0 bottom-0 opacity-10">
                <Anchor size={250} className="translate-x-12 translate-y-12 text-white" />
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 z-10">
               Explore <span className="text-emerald-400">Dream Destination!</span>
             </h2>
             <p className="text-emerald-200 font-bold italic mb-8 z-10">
               You'll never forget the experience we are ready to present Joy!
             </p>
             <button className="bg-emerald-600 text-white w-fit px-16 py-4 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-emerald-900 transition-all z-10 shadow-2xl">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeralaPage;