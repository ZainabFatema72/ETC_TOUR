import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, CloudRain, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const NorthEastPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  const packages = [
    { duration: "5 DAYS / 4 NIGHTS", title: "Misty Meghalaya", route: "SHILLONG (2N) - CHERRAPUNJEE (2N)", tag: "Top Rated" },
    { duration: "3 DAYS / 2 NIGHTS", title: "Guwahati Gateway", route: "GUWAHATI (2N)", tag: "Quick Trip" },
    { duration: "3 DAYS / 2 NIGHTS", title: "Kaziranga Safari", route: "KAZIRANGA (2N)", tag: "Wildlife" },
    { duration: "3 DAYS / 2 NIGHTS", title: "Shillong Escape", route: "SHILLONG (2N)", tag: "Nature" },
    { duration: "5 DAYS / 4 NIGHTS", title: "Assam-Meghalaya Mix", route: "SHILLONG (2N) - CHERRAPUNJI (1N) - GUWAHATI (1N)", tag: "Best Value" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#f0f9f9] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-teal-600"></span>
              <span className="text-teal-700 font-bold uppercase tracking-[0.3em] text-[10px]">The Seven Sisters</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              NORTH <br/>
              <span className="text-teal-600 uppercase">EAST INDIA</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-teal-600 pl-4">
              Explore the wettest place on earth and the home of the one-horned rhino.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[350px] relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2000" 
              alt="North East Waterfalls"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-teal-900/80 backdrop-blur-sm text-white p-4 rounded-xl flex items-center gap-3">
               <CloudRain size={24} className="text-teal-300" />
               <span className="text-xs font-black uppercase tracking-widest leading-tight">Rainforest <br/>Trails</span>
            </div>
          </motion.div>
        </div>

        {/* --- PACKAGE GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-xl rounded-2xl border-b-8 border-teal-600 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black bg-teal-50 text-teal-700 px-3 py-1 rounded uppercase tracking-widest border border-teal-100">
                    {pkg.tag}
                  </span>
                  <ShieldCheck className="text-teal-100 group-hover:text-teal-500 transition-colors" size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight leading-none h-12">{pkg.title}</h3>
                <p className="text-teal-600 font-black text-sm mb-4">{pkg.duration}</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-8 h-10">
                  {pkg.route}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between border-t border-slate-50 pt-4">
                  {inclusions.map((inc, i) => (
                    <div key={i} title={inc.text} className="text-slate-200 hover:text-teal-600 transition-colors">
                      {inc.icon}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-teal-700 transition-all shadow-lg">
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TESTIMONIAL & CTA --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border-t-8 border-teal-800 shadow-2xl relative rounded-2xl">
            <Quote className="absolute top-4 right-4 text-teal-50" size={60} />
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block border-b pb-2">Director's Trip Feedback</h3>
            <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
              "We would like to appreciate your good office for arranging travel trip to Maldives for our Director, Mr Walfred Tagor... The same level of care was shown for our domestic North East tour."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">JM</div>
              <p className="font-black text-slate-900 text-[11px] uppercase tracking-wider">Jestin Mathew</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-gradient-to-br from-teal-900 to-slate-900 p-12 flex flex-col justify-center relative rounded-3xl overflow-hidden shadow-inner">
             <div className="absolute right-0 top-0 opacity-10">
                <CloudRain size={300} className="translate-x-20 -translate-y-20 text-white" />
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 z-10">
               Explore <span className="text-teal-400">Dream Destination!</span>
             </h2>
             <p className="text-teal-200 font-bold italic mb-8 z-10">
               You'll never forget the experience we are ready to present Joy!
             </p>
             <button className="bg-white text-slate-900 w-fit px-16 py-4 font-black uppercase tracking-widest text-xs hover:bg-teal-500 hover:text-white transition-all z-10 rounded-full shadow-2xl">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NorthEastPage;