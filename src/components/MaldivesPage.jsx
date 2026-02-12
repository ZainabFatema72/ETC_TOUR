import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const MaldivesPackage = () => {
  const highlights = [
    { icon: <Plane size={20} />, text: "Flights" },
    { icon: <Hotel size={20} />, text: "Hotels" },
    { icon: <Utensils size={20} />, text: "Meals" },
    { icon: <Activity size={20} />, text: "Activities" },
    { icon: <Car size={20} />, text: "Transfers" },
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-cyan-500"></span>
              <span className="text-cyan-600 font-bold uppercase tracking-[0.4em] text-[10px]">The Sunny Side of Life</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-2 tracking-tighter">
              MALDIVES <br/>
              <span className="text-blue-600 uppercase text-3xl md:text-5xl tracking-widest">Pure Luxury</span>
            </h1>
            <p className="text-xl font-bold text-slate-600 mb-6 flex items-center gap-2">
              <Sun className="text-yellow-500" size={24} /> MALDIVES (3 NIGHTS)
            </p>
            <div className="inline-block bg-blue-600 text-white px-8 py-3 text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-200 mb-8">
              4 Days / 3 Nights
            </div>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-5 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                  <div className="text-cyan-500 mb-2">{item.icon}</div>
                  <span className="text-[9px] font-bold uppercase text-slate-400">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop" 
                alt="Maldives Resort"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- TESTIMONIAL (Ramesh Babu) --- */}
          <div className="bg-white p-8 border border-slate-100 shadow-xl rounded-2xl relative">
            <Quote className="absolute top-4 right-4 text-slate-100" size={60} />
            <h3 className="text-sm font-black text-blue-900 uppercase mb-6 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Client Feedback
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-slate-600 italic text-sm leading-relaxed border-l-2 border-blue-100 pl-4">
                "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan - Executive Vice President from your M/s Express Travel... The coordination was excellent."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">RB</div>
                <div>
                  <p className="font-black text-slate-900 text-xs uppercase tracking-wider">Ramesh Babu</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase">Corporate Logistics</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- CALL TO ACTION --- */}
          <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                Explore Your <br/><span className="text-cyan-400">Dream Destination!</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg mb-8 max-w-md">
                You'll never forget the experience we are ready to present you!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-900/20">
                  More Details
                </button>
                <button className="bg-transparent border-2 border-white/20 hover:border-white/100 text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all">
                  Click Here
                </button>
              </div>
            </div>
            {/* Background Icon */}
            <Activity size={180} className="absolute -right-10 -bottom-10 text-white/5 group-hover:rotate-12 transition-transform duration-500" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default MaldivesPackage;