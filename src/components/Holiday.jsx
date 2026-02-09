import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  { n: "Classic Kashmir", d: "6D / 5N", img: "https://images.unsplash.com/photo-1566833925222-d74afc0f6d9e?auto=format&fit=crop&w=400&h=200&q=80" },
  { n: "Leh Ladakh", d: "7D / 6N", img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=400&h=200&q=80" },
  { n: "Golden Triangle", d: "5D / 4N", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=400&h=200&q=80" },
  { n: "North East", d: "7D / 6N", img: "https://images.unsplash.com/photo-1526481280693-3bfa7563ee0c?auto=format&fit=crop&w=400&h=200&q=80" },
  { n: "Sikkim Serenity", d: "6D / 5N", img: "https://images.unsplash.com/photo-1626639556108-72b15f532822?auto=format&fit=crop&w=400&h=200&q=80" },
  { n: "Andaman Suntanner", d: "5D / 4N", img: "https://images.unsplash.com/photo-1589135340847-57a69a40a245?auto=format&fit=crop&w=400&h=200&q=80" },
];

const BoldCompactTravel = () => {
  return (
    <div className="max-w-7xl mx-auto p-0 font-sans text-black overflow-hidden bg-white">
      
      {/* HEADER: Massive Typography, Zero Margin */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b-[5px] border-black pt-0 pb-1"
      >
        <div className="flex justify-between items-end">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.8] m-0">
            EXPRESS <span className="text-blue-600">TRAVEL</span>
          </h1>
          <div className="text-right leading-none">
            <p className="text-[10px] font-black tracking-widest uppercase">Corporate Services LLP</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase italic">Est. 2024</p>
          </div>
        </div>
      </motion.header>

      {/* GRID: Large Text, Tight Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {packages.map((pkg, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "#0d2944" }}
            className="flex items-center gap-1 p-4 border-b border-gray-200 group relative"
          >
            {/* Image as a Bold Accent */}
            <div className="w-50 h-26 overflow-hidden rounded-none flex-shrink-0">
              <img src={pkg.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                {pkg.n}
              </h3>
              <p className="text-sm font-bold text-gray-600 mt-1 uppercase tracking-widest">{pkg.d}</p>
            </div>
            
            <div className="text-2xl font-black text-gray-100 absolute right-4 group-hover:text-blue-50 transition-colors">
              0{i+1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* TESTIMONIAL: Full Width, Bold Text, No Gap */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-black text-white p-3 md:p-8"
      >
        <p className="text-1xl md:text-2xl font-bold leading-[1.1] tracking-tight italic mb-1">
          "We appreciate your office for arranging travel trip to Maldives for our Director, Mr Walfred Tagor..."
        </p>
        <div className="flex items-center justify-between border-t border-white/20 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-[2px] bg-blue-500"></div>
            <p className="text-xl font-black uppercase tracking-tighter">Jestin Mathew</p>
          </div>
          <p className="text-blue-500 font-black text-sm uppercase tracking-[0.2em]">Maldives</p>
        </div>
      </motion.section>

    </div>
  );
};

export default BoldCompactTravel;