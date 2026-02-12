import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, MapPin, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const AndhraPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { duration: "1 DAY TOUR", title: "TIRUPATHI BY ROAD", route: "Local Darshan & Return", highlight: "Spiritual" },
    { duration: "4 DAYS / 3 NIGHTS", title: "SPLENDID HYDERABAD", route: "Charminar - Golconda - Ramoji", highlight: "Royal" },
    { duration: "4 DAYS / 3 NIGHTS", title: "VIZAG CITY TOUR", route: "Beach - Rishikonda - Submarine", highlight: "Coastal" },
    { duration: "5 DAYS / 4 NIGHTS", title: "VIZAG & ARAKU VALLEY", route: "Vizag (2N) - Araku (2N)", highlight: "Nature" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#f8fafc] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-slate-900"></span>
              <span className="text-slate-600 font-bold uppercase tracking-[0.3em] text-[10px]">The Land of Nizams & Temples</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              ANDHRA & <br/>
              <span className="text-blue-600 uppercase">TELANGANA</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-blue-600 pl-4">
              Experience the perfect mix of spiritual divinity and royal heritage.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[350px] relative rounded-sm overflow-hidden"
          >
            <img 
              src="/hyd.jpg" 
              alt="Charminar Hyderabad"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-4 right-4 bg-slate-900 text-white p-4">
               <Landmark size={24} className="text-blue-400" />
            </div>
          </motion.div>
        </div>

        {/* --- PACKAGE GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white p-8 shadow-sm border border-slate-100 relative group"
            >
              <div className="absolute top-0 right-0 p-2 text-[8px] font-black bg-blue-50 text-blue-600 uppercase tracking-widest">
                {pkg.highlight}
              </div>
              <p className="text-blue-600 font-black text-sm mb-2">{pkg.duration}</p>
              <h3 className="text-slate-900 font-black text-xl mb-4 leading-tight">{pkg.title}</h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase mb-8">{pkg.route}</p>
              
              <div className="flex gap-2 mb-6 border-y border-slate-50 py-3">
                {inclusions.map((inc, i) => (
                  <div key={i} title={inc.text} className="text-slate-300 group-hover:text-blue-500 transition-colors">
                    {inc.icon}
                  </div>
                ))}
              </div>
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-all">
                More Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIALS --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 p-8 text-white relative">
            <Quote className="absolute top-4 right-4 opacity-10" size={80} />
            <h3 className="text-blue-400 font-black uppercase text-xs tracking-widest mb-6">Executive Feedback</h3>
            <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
              "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan - Executive Vice President from your M/s Express Travel... The service was professional and on time."
            </p>
            <div className="flex items-center gap-3">
              <p className="font-black text-white text-xs uppercase tracking-widest">Ramesh Babu</p>
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Corporate Client</p>
            </div>
          </div>

          <div className="bg-white p-8 border border-slate-200 flex flex-col justify-center items-center text-center">
             <h2 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter leading-none">Explore Dream <br/>Destination!</h2>
             <p className="text-slate-400 text-sm mb-8 italic">You'll never forget the experience we are ready to present Joy!</p>
             <button className="bg-blue-600 text-white px-12 py-4 font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AndhraPage;