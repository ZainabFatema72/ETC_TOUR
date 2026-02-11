import React from 'react';
import { motion } from 'framer-motion';

const fleetData = [
  { tag: "BMW", title: "The Pinnacle", desc: "Experience power and prestige for an unforgettable journey.", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800" },
  { tag: "KIA Carnival", title: "Luxury MPV", desc: "Spacious comfort redefined for weddings and corporate events.", img: "https://images.unsplash.com/photo-1707153634568-7c8709335805?q=80&w=800" },
  { tag: "Hiace", title: "Group Style", desc: "Ideal for outstation trips without compromising on luxury.", img: "https://images.unsplash.com/photo-1561035514-ee78dc7d7b3f?q=80&w=800" },
  { tag: "Mercedes", title: "Iconic S-Class", desc: "Unparalleled sophistication and performance on every road.", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800" },
  { tag: "Fortuner", title: "Rugged Elegance", desc: "Unleash power on city drives or outstation adventures.", img: "https://images.unsplash.com/photo-1626084300300-3487f98f6d74?q=80&w=800" },
  { tag: "Weddings", title: "Grand Entrance", desc: "Exquisite rides to make your special day even more memorable.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800" },
];

const LuxuryFleet = () => {
  return (
    <section className="relative w-full bg-slate-100 overflow-visible py-4">
      
      {/* --- SUPER COMPACT 3D OVAL CONTAINER --- */}
      <div 
        className="bg-white relative z-10 shadow-[0_-40px_80px_-20px_rgba(0,0,0,0.15)]" 
        style={{ 
          clipPath: 'ellipse(140% 100% at 50% 100%)', 
          marginTop: '-120px', // Pulls it very close to the previous section
          paddingTop: '80px', 
          paddingBottom: '40px'
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Section - Minimal Spacing */}
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter italic"
            >
              OUR <span className="text-blue-600">LUXURY</span> FLEET
            </motion.h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* ULTRA COMPACT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
            {fleetData.map((car, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative flex flex-col bg-white border border-slate-50 rounded-xl p-4 pt-0 shadow-md group hover:shadow-xl transition-all duration-300"
              >
                {/* Compact Floating Image */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                  className="relative -mt-10 mb-3"
                >
                  <img 
                    src={car.img} 
                    className="w-full h-36 object-cover rounded-lg border-4 border-white shadow-lg" 
                    alt={car.tag} 
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-2 bg-slate-900/10 blur-lg rounded-full"></div>
                </motion.div>

                {/* Content - Tight Spacing */}
                <div className="space-y-1">
                  <span className="text-blue-600 text-[9px] font-black uppercase tracking-widest">{car.tag}</span>
                  <h3 className="text-lg font-black text-slate-800 uppercase italic leading-none">{car.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-tight font-medium line-clamp-2">
                    {car.desc}
                  </p>
                  
                  <div className="pt-2 border-t border-slate-50 mt-1">
                     <button className="text-[9px] font-black text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                       View Details →
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA - Compacted */}
          <div className="mt-12 text-center">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-blue-600 transition-all"
            >
              Book Your Ride Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stronger Bottom Shadow Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-slate-300/40 to-transparent"></div>
    </section>
  );
};

export default LuxuryFleet;