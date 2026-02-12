import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const AustraliaPackage = () => {
  const highlights = [
    { icon: <Plane size={20} />, text: "Flights" },
    { icon: <Hotel size={20} />, text: "Hotels" },
    { icon: <Utensils size={20} />, text: "Meals" },
    { icon: <Activity size={20} />, text: "Activities" },
    { icon: <Car size={20} />, text: "Transfers" },
  ];

  return (
    <div className="pt-32 pb-16 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Premium International Tour</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">
              AUSTRALIA <br/>
              <span className="text-blue-600 uppercase">Wonders</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 mb-6 italic border-l-4 border-blue-600 pl-4">
              SYDNEY (3N) — GOLD COAST (3N) — CAIRNS (2N) — MELBOURNE (3N)
            </p>
            <div className="inline-block bg-slate-900 text-white px-6 py-2 text-sm font-black uppercase tracking-widest mb-8">
              12 Days / 11 Nights
            </div>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-white shadow-sm border border-gray-100 transition-hover hover:border-blue-300">
                  <div className="text-blue-600 mb-2">{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[400px] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop" 
              alt="Sydney Opera House"
              className="w-full h-full object-cover shadow-2xl rounded-sm"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 hidden md:block">
              <p className="text-4xl font-black leading-none">EXPLORE</p>
              <p className="text-sm font-bold tracking-[0.2em]">DREAM DESTINATION</p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- TESTIMONIAL SECTION --- */}
          <div className="bg-white p-8 border border-gray-100 shadow-xl relative overflow-hidden">
            <Quote className="absolute top-4 right-4 text-blue-50 opacity-20" size={80} />
            <h3 className="text-lg font-black text-slate-900 uppercase mb-6 border-b-2 border-blue-600 inline-block">What Clients Say</h3>
            <div className="flex flex-col gap-4">
              <div className="flex text-yellow-500 gap-1">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-slate-600 italic text-sm leading-relaxed">
                "We would like to appreciate your good office for arranging travel trip to Maldives for our Director, Mr Walfred Tagor..."
              </p>
              <div>
                <p className="font-black text-blue-900 text-xs uppercase tracking-widest">Jestin Mathew</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Happy Traveler</p>
              </div>
            </div>
          </div>

          {/* --- CALL TO ACTION CARD --- */}
          <div className="lg:col-span-2 bg-slate-900 p-10 relative flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 z-10">
              You'll never forget the <br/>
              <span className="text-blue-500 text-2xl md:text-4xl">experience we are ready to present you!</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6 z-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3">
                More Details <Plane size={16} />
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all">
                Click Here
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AustraliaPackage;