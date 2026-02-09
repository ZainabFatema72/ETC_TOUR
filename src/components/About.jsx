import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroBalanced = () => {
  const cities = ["Chennai", "Coimbatore", "Madurai", "Cochin", "Trivandrum", "Bangalore", "Mysore", "Vijayawada", "Vizag", "Hyderabad", "Mumbai", "Pune", "Bhopal", "Indore", "Ahmedabad", "Kolkata", "Jaipur", "Udaipur", "Jodhpur", "Lucknow", "Agra", "New Delhi", "Chandigarh", "Ludhiana"];

  return (
    <section className="relative py-14 flex items-center text-white overflow-hidden bg-[#0a0a0a]">
      {/* REF BACKGROUND: Exact Brown-Blue Cinematic Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#3d2b1f] via-[#151515] to-[#0a2339] opacity-100"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* LEFT: SLIGHTLY BIGGER IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%]"
          >
            <div className="relative border border-white/10 p-1.5 bg-white/5 shadow-2xl">
              <img 
                src="https://www.expresstravelcorp.com/images/Tours%20and%20Travel%20Agency%20Chennai.jpg" 
                className="w-full h-[480px] object-cover grayscale-[20%]" 
                alt="About"
              />
              {/* Badge positioned exactly like premium brochures */}
              <div className="absolute bottom-0 right-0 bg-blue-600 px-5 py-4 shadow-xl">
                <span className="text-3xl font-black block leading-none">15+</span>
                <span className="text-[9px] uppercase tracking-widest font-bold">Years of Trust</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: TEXT CONTENT (BALANCED SIZE) */}
          <div className="w-full lg:w-[58%] space-y-5">
            <motion.header
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-[44px] font-black uppercase tracking-tighter leading-[0.95] mb-2">
                EXPRESS TRAVEL <br/>
                <span className="text-blue-500">CORPORATE SERVICES LLP</span>
              </h2>
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">Est. 31 January, 2008</p>
            </motion.header>

            <div className="text-[18px] leading-relaxed text-slate-300 space-y-4 text-justify pr-4">
              <p>
                <b className="text-white">Top India Tour Packages</b> is a renowned name in the travel industry. Recognized by the <b className="text-white">Ministry of Tourism, Govt. of India</b>, we provide unforgettable journeys across India's diverse landscapes.
              </p>
              
              <p>
                We serve <b className="text-white italic underline decoration-blue-500 underline-offset-4">Corporate Clients</b> with premium fleet management and <b className="text-white italic">Inbound Tourists</b> with bespoke South India packages (Tamil Nadu, Kerala, Andhra, Karnataka).
              </p>

              <p className="hidden md:block">
                Specializing in Luxury and Special Interest Tours: <span className="text-blue-500 font-bold">Ayurveda, Yoga, Wildlife, Textiles, and Architecture.</span> We never compromise on personalized attention to detail.
              </p>
            </div>

            <motion.div 
              whileHover={{ x: 5 }}
              className="inline-block"
            >
              <button className="bg-blue-600 text-white px-10 py-4 text-[15px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg active:scale-95">
                Find Out More
              </button>
            </motion.div>
          </div>
        </div>

        {/* CITIES NETWORK FOOTER */}
        <div className="mt-12 pt-6 border-t border-white/10 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-10 opacity-20 text-[11px] font-bold uppercase tracking-[0.2em]">
            {cities.concat(cities).map((city, i) => (
              <span key={i} className="hover:text-blue-400 transition-colors cursor-default">{city}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </section>
  );
};

export default AboutHeroBalanced;