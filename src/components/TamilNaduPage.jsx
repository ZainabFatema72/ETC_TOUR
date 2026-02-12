import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Bell, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TamilNaduPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#fffdfa] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <span className="text-blue-700 font-bold uppercase tracking-[0.3em] text-[10px]">The Land of Temples</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              ENCHANTING <br/>
              <span className="text-blue-600 uppercase">TAMIL NADU</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-blue-600 pl-4">
              Journey through the soul of South India's architectural marvels.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[400px] relative rounded-lg overflow-hidden border-b-8 border-blue-600 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070" 
              alt="Madurai Meenakshi Temple"
              className="w-full h-full object-cover shadow-inner"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 shadow-lg flex items-center gap-2">
               <Bell size={20} className="text-blue-700" />
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Ancient Heritage</span>
            </div>
          </motion.div>
        </div>

        {/* --- MAIN PACKAGE CARD --- */}
        <div className="max-w-4xl mx-auto mb-24">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blue-50 rounded-sm relative"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                  Special Spiritual Tour
                </span>
                <h3 className="text-3xl font-black text-slate-900 uppercase mb-2">NAVAGRAHA TEMPLE TOUR</h3>
                <p className="text-blue-600 font-black text-lg">3 DAYS / 2 NIGHTS</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-4">Inclusions</p>
                <div className="flex gap-4">
                  {inclusions.map((inc, i) => (
                    <div key={i} title={inc.text} className="text-slate-300 hover:text-blue-600 transition-colors">
                      {inc.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-500">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-tighter">Kumbakonam - Tanjore Surroundings</span>
              </div>
              <button className="bg-slate-900 text-white px-8 py-3 font-black uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all">
                More Details
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- TESTIMONIALS --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-900 p-8 text-white relative">
            <Quote className="absolute top-4 right-4 opacity-10" size={80} />
            <h3 className="text-blue-500 font-black uppercase text-xs tracking-widest mb-6">Client Experience</h3>
            <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
              "I wanted to take the opportunity to write to you and thank you for your efforts to make our 2 week tour of Tamil Nadu so special... It was perfectly organized."
            </p>
            <div className="flex items-center gap-3">
              <p className="font-black text-white text-xs uppercase tracking-widest">Santosh Krinsky</p>
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">International Traveler</p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 border border-blue-100 flex flex-col justify-center items-center text-center">
             <h2 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter leading-none">Explore Dream <br/>Destination!</h2>
             <p className="text-slate-500 text-sm mb-8 italic">You'll never forget the experience we are ready to present Joy!</p>
             <button className="bg-slate-900 text-white px-12 py-4 font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TamilNaduPage;