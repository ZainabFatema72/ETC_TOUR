import React from 'react';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote, Leaf, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const UttarakhandPage = () => {
  const inclusions = [
    { icon: <Plane size={18} />, text: "Flights" },
    { icon: <Hotel size={18} />, text: "Hotels" },
    { icon: <Utensils size={18} />, text: "Meals" },
    { icon: <Activity size={18} />, text: "Activities" },
    { icon: <Car size={18} />, text: "Transfers" },
  ];

  return (
    <div className="pt-32 pb-16 bg-[#fdfcfb] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-orange-700"></span>
              <span className="text-orange-800 font-bold uppercase tracking-[0.3em] text-[10px]">Simply Heaven</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
              UTTARAKHAND <br/>
              <span className="text-orange-700 uppercase italic text-4xl md:text-6xl">Dev Bhoomi</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 italic border-l-4 border-orange-600 pl-4">
              Where the wild roar of Corbett meets the calm waters of Nainital.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 h-[400px] relative rounded-[3rem] rounded-tr-none overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=2000" 
              alt="Nainital Lake"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 bg-orange-700 text-white p-6">
               <Leaf size={32} />
            </div>
          </motion.div>
        </div>

        {/* --- MAIN PACKAGE CARD --- */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-orange-50 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  <Compass size={12} /> Wilderness & Lakes
                </div>
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">Nature's Escape</h3>
                <p className="text-orange-600 font-black text-lg mb-4">4 DAYS / 3 NIGHTS</p>
                <p className="text-slate-500 font-bold text-sm uppercase border-b border-slate-100 pb-4">
                  CORBETT (2N) - NAINITAL (1N)
                </p>
                
                <div className="flex gap-4 mt-6">
                  {inclusions.map((inc, i) => (
                    <div key={i} title={inc.text} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:text-orange-600 hover:border-orange-600 transition-all cursor-help">
                      {inc.icon}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/3 flex flex-col gap-3">
                <button className="bg-slate-900 text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-orange-700 transition-all shadow-lg">
                  More Details
                </button>
                <button className="border-2 border-slate-900 text-slate-900 py-4 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
                  Get Pricing
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- TESTIMONIAL & CTA --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-10 border-r-8 border-orange-700 relative">
            <Quote className="absolute top-4 right-4 text-orange-200 opacity-20" size={100} />
            <h3 className="text-[10px] font-black text-orange-800 uppercase tracking-widest mb-6 border-b border-orange-100 pb-2 inline-block">Travel Experience</h3>
            <p className="text-slate-700 italic text-lg leading-relaxed mb-8 relative z-10">
              "We would like to appreciate your good office for arranging travel trip to Maldives for our Director, Mr Walfred Tagor... The attention to detail in our Uttarakhand plan was just as impressive."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black">JT</div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-wider leading-none">Jestin Mathew</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Corporate Client</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-700 p-12 flex flex-col justify-center items-center text-center text-white rounded-bl-[4rem]">
             <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">Explore Dream <br/><span className="text-orange-200">Destination!</span></h2>
             <p className="text-orange-100 font-bold italic mb-8 max-w-xs">You'll never forget the experience we are ready to present Joy!</p>
             <button className="bg-white text-orange-800 px-12 py-4 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all shadow-2xl">
               Click Here
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UttarakhandPage;