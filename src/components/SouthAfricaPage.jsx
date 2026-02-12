import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Map, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const SouthAfricaPackage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    {
      title: "Safari & Coastal Wonders",
      route: "SUNCITY (2N) - PORT ELIZABETH (1N) - GEORGE (3N) - GAME LODGE (1N) - CAPE TOWN (3N)",
      duration: "11 DAYS / 10 NIGHTS"
    },
    {
      title: "Cape & Coast Explorer",
      route: "JOHANNESBURG (2N) - MOSSEL BAY (5N) - CAPE TOWN (3N)",
      duration: "11 DAYS / 10 NIGHTS"
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-[#faf9f6] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="relative mb-20 overflow-hidden bg-slate-900 rounded-sm">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="South Africa Wildlife"
            />
          </div>
          <div className="relative z-10 p-8 md:p-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-orange-500"></span>
                <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px]">Inspiring New Ways</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                SOUTH <br/> AFRICA
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Experience the perfect blend of wild safaris, cosmopolitan cities, and breathtaking coastal drives.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- ITINERARY OPTIONS --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 shadow-xl border-t-4 border-orange-500 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Compass className="text-orange-500" size={32} />
                  <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest text-slate-500">Option 0{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase mb-4">{pkg.title}</h3>
                <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6 italic">
                  {pkg.route}
                </p>
                <div className="text-blue-600 font-black text-lg mb-8">{pkg.duration}</div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4 border-y border-slate-50 py-4">
                  {inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
                      <span className="text-orange-500">{inc.icon}</span> {inc.text}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-slate-900 text-white py-4 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-orange-500 transition-colors">
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIALS SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-900 p-8 text-white relative overflow-hidden">
             <Quote className="absolute -right-4 -bottom-4 text-white opacity-10" size={150} />
             <div className="relative z-10">
               <div className="flex gap-1 mb-4 text-orange-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <p className="text-sm italic leading-relaxed mb-6 text-slate-200">
                 "I wanted to take the opportunity to write to you and thank you for your efforts to make our 2 week tour of Tamil Nadu... It was truly a life-changing experience."
               </p>
               <p className="font-black uppercase tracking-widest text-xs">Santosh Krinsky</p>
               <p className="text-[10px] uppercase text-blue-400 font-bold">Frequent Traveler</p>
             </div>
          </div>

          <div className="bg-white p-8 border border-slate-200 flex flex-col justify-center items-center text-center">
             <h2 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Explore Dream Destination!</h2>
             <p className="text-slate-500 mb-8 italic">You'll never forget the experience we are ready to present you!</p>
             <button className="bg-orange-500 text-white px-12 py-4 font-black uppercase tracking-[0.3em] text-[11px] shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SouthAfricaPackage;