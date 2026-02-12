import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Snowflake, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

const KashmirPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { 
      duration: "5 DAYS / 4 NIGHTS", 
      title: "KASHMIR GLANCE", 
      route: "SRINAGAR (3N) - PAHALGAM - GULMARG (1N)",
      tag: "Classic"
    },
    { 
      duration: "7 DAYS / 6 NIGHTS", 
      title: "VALLEY EXPLORER", 
      route: "SRINAGAR (2N) - PAHALGAM (2N) - SONMARG - GULMARG (2N)",
      tag: "Trending"
    },
    { 
      duration: "6 DAYS / 5 NIGHTS", 
      title: "PARADISE RETREAT", 
      route: "SRINAGAR (3N) - PAHALGAM (1N) - GULMARG (1N)",
      tag: "Premium"
    },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#f0f4f8] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-blue-400"></span>
              <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px]">The Earth Heaven</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-4 tracking-tighter">
              KASHMIR <br/>
              <span className="text-indigo-600 uppercase text-4xl md:text-6xl tracking-widest">Paradise</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 flex items-center gap-2 italic">
              <Wind className="text-blue-300" /> Snow-capped peaks & serene Dal Lake.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t border-white/50 bg-white/30 backdrop-blur-sm p-4">
              <img 
                src="https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=2070" 
                alt="Kashmir Shikara"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>

        {/* --- PACKAGE CARDS --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -12 }}
              className="bg-white/80 backdrop-blur-md p-8 border border-white rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black bg-indigo-600 text-white px-4 py-1 rounded-full uppercase tracking-widest">
                    {pkg.tag}
                  </span>
                  <Snowflake size={20} className="text-blue-200" />
                </div>
                <p className="text-indigo-500 font-black text-sm mb-1">{pkg.duration}</p>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">{pkg.title}</h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-8 h-12">
                  {pkg.route}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between border-t border-slate-100 pt-6">
                  {inclusions.map((inc, i) => (
                    <div key={i} title={inc.text} className="text-slate-300 hover:text-indigo-500 transition-colors">
                      {inc.icon}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100">
                  View Itinerary
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIAL & CTA --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-indigo-900 p-8 rounded-3xl text-white relative overflow-hidden group">
            <Quote className="absolute -right-4 -bottom-4 text-white opacity-5" size={120} />
            <h3 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-6 border-l-2 border-indigo-400 pl-4">Client Feedback</h3>
            <p className="text-slate-200 italic text-sm leading-relaxed mb-6">
              "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan... Express Travel provided excellent service. The Kashmir leg of our trip was seamless."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center font-bold">RB</div>
              <p className="font-black text-xs uppercase tracking-widest">Ramesh Babu</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-10 rounded-3xl border border-white shadow-xl flex flex-col justify-center items-center text-center relative">
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
               Explore <span className="text-indigo-600">Dream Destination!</span>
             </h2>
             <p className="text-slate-400 font-bold text-lg mb-8 italic">You'll never forget the experience we are ready to present Joy!</p>
             <button className="bg-indigo-600 text-white px-16 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 scale-105">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KashmirPage;