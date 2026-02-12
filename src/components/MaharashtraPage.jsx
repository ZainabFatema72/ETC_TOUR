import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Building2, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const MaharashtraPage = () => {
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
      title: "MUMBAI MAGIC", 
      stay: "MUMBAI (4N)", 
      tag: "City Lights",
      icon: <Building2 className="text-orange-500" />
    },
    { 
      duration: "5 DAYS / 4 NIGHTS", 
      title: "HERITAGE TRAILS", 
      stay: "AURANGABAD (4N) - AJANTHA - ELLORA", 
      tag: "History",
      icon: <Landmark className="text-orange-500" />
    },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#fafafa] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-orange-600"></span>
              <span className="text-orange-700 font-bold uppercase tracking-[0.3em] text-[10px]">Maharashtra Unlimited</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              DREAM <br/>
              <span className="text-orange-600 uppercase">MAHARASHTRA</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-orange-600 pl-4">
              Where the waves of the Arabian Sea meet the history of ancient caves.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2000" 
              alt="Gateway of India Mumbai"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </motion.div>
        </div>

        {/* --- PACKAGE CARDS --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 border-b-8 border-orange-600 shadow-xl rounded-sm relative group"
            >
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-50 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all">
                    {pkg.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{pkg.tag}</span>
                </div>
                <p className="text-orange-600 font-black text-sm mb-1">{pkg.duration}</p>
                <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">{pkg.title}</h3>
                <p className="text-slate-500 font-bold text-xs uppercase leading-relaxed h-10 italic">
                  {pkg.stay}
                </p>
              </div>

              <div className="flex gap-4 py-6 border-y border-slate-100 mb-8">
                {inclusions.map((inc, i) => (
                  <div key={i} title={inc.text} className="text-slate-300 hover:text-orange-600 transition-colors">
                    {inc.icon}
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                Explore Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIAL & CTA --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 items-stretch">
          <div className="bg-white p-8 border border-slate-100 shadow-lg relative">
            <Quote className="absolute top-4 right-4 text-orange-100" size={60} />
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Executive Feedback</h3>
            <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
              "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan - Executive Vice President from your M/s Express Travel... exemplary service."
            </p>
            <p className="font-black text-slate-900 text-[11px] uppercase tracking-wider">Ramesh Babu</p>
          </div>

          <div className="lg:col-span-2 bg-[#1e293b] p-12 flex flex-col justify-center relative rounded-sm overflow-hidden text-center md:text-left">
             <div className="absolute right-0 top-0 w-64 h-64 bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 z-10">
               Explore <span className="text-orange-500">Dream Destination!</span>
             </h2>
             <p className="text-slate-400 font-bold italic mb-8 z-10">
               You'll never forget the experience we are ready to present Joy!
             </p>
             <button className="bg-orange-600 text-white w-fit px-16 py-4 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all z-10 mx-auto md:mx-0 shadow-2xl">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MaharashtraPage;