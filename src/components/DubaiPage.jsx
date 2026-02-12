import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Building2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const DubaiPackage = () => {
  const highlights = [
    { icon: <Plane size={20} />, text: "Flights" },
    { icon: <Hotel size={20} />, text: "Hotels" },
    { icon: <Utensils size={20} />, text: "Meals" },
    { icon: <Activity size={20} />, text: "Activities" },
    { icon: <Car size={20} />, text: "Transfers" },
  ];

  return (
    <div className="pt-32 pb-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-[#D4AF37]"></span>
              <span className="text-[#B8860B] font-bold uppercase tracking-[0.4em] text-[10px]">Experience Grandeur</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-4 tracking-tighter">
              Visit <br/>
              <span className="text-[#D4AF37] uppercase">DUBAI</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 mb-6 italic border-l-4 border-[#D4AF37] pl-4">
              DUBAI (5 NIGHTS) — ATLANTIS THE PALM (1 NIGHT)
            </p>
            <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-3 text-sm font-black uppercase tracking-widest mb-8">
              <Sparkles size={18} className="text-[#D4AF37]" /> 7 Days / 6 Nights
            </div>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-5 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-slate-50 border-b-2 border-transparent hover:border-[#D4AF37] transition-all duration-300 group">
                  <div className="text-slate-400 group-hover:text-[#D4AF37] mb-2">{item.icon}</div>
                  <span className="text-[9px] font-bold uppercase text-slate-500 tracking-tighter">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent z-10 rounded-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
              alt="Dubai Skyline"
              className="w-full h-full object-cover shadow-2xl rounded-sm"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 shadow-xl z-20 border-r-4 border-[#D4AF37]">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Stay at the Iconic</p>
              <p className="text-lg font-black text-slate-900">ATLANTIS</p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- TESTIMONIAL SECTION (Ramesh Babu) --- */}
          <div className="bg-[#1a1a1a] p-8 text-white relative overflow-hidden group">
            <Building2 className="absolute -right-4 -bottom-4 text-white opacity-5" size={150} />
            <h3 className="text-lg font-black uppercase mb-6 border-b border-[#D4AF37] pb-2 inline-block">Client's Say</h3>
            <div className="flex flex-col gap-4">
              <div className="flex text-[#D4AF37] gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-400 italic text-sm leading-relaxed">
                "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan - Executive Vice President from your M/s Express Travel... exemplary corporate standards."
              </p>
              <div>
                <p className="font-black text-[#D4AF37] text-xs uppercase tracking-widest">Ramesh Babu</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Executive Services</p>
              </div>
            </div>
          </div>

          {/* --- CTA CARD --- */}
          <div className="lg:col-span-2 bg-slate-50 p-10 border border-slate-100 relative flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -mr-16 -mt-16"></div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
              Explore <span className="text-[#D4AF37]">Dream Destination!</span>
            </h2>
            <p className="text-slate-500 font-bold text-lg mb-8 italic">
              You'll never forget the experience we are ready to present you!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all shadow-lg">
                More Details
              </button>
              <button className="bg-slate-900 text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all hover:bg-slate-800">
                Click Here
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DubaiPackage;