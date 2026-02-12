import React from 'react';
import { motion } from 'framer-motion';

import { 
  MapPin, Plane, ChevronRight, PhoneCall, 
  Calendar, Camera, Heart, Award, Users, 
  Briefcase, Star, ShieldCheck, Globe, Palmtree
} from 'lucide-react';

const AboutUsETC = () => {
  // Updated to 7 Specializations
 

  const services = [
    "India Tours (Domestic)", "Inbound Tours", "International Tours", "Group/Customized Tours",
    "Luxury Car/Coach Rentals", "Hotel Bookings", "Wedding Events", "Air Ticketing",
    "MICE (Meetings & Events)", "Cruises", "Visa & Passport", "Forex"
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      
      {/* --- HERO SECTION: 80VH HEIGHT --- */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden">
        
        {/* Pure Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/backgroundAbout.jpg" 
            className="w-full h-full object-cover"
            alt="Travel Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10 w-full">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-[#00D1FF]"></div>
              <span className="text-white font-bold uppercase tracking-widest text-xs drop-shadow-md">
                Est. 31 January, 2008
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] mb-6 tracking-tighter drop-shadow-2xl">
              EXPRESS TRAVEL <br /> <span className="text-[#00D1FF]">CORPORATE</span> <br /> SERVICES LLP
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed mb-8 italic border-l-4 border-[#00D1FF] pl-4 drop-shadow-lg font-medium max-w-xl">
              "Synonymous with leisure and business travel. We provide a superior total travel management service of premium quality."
            </p>
            <div className="flex gap-4">
               <div className="bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl">
                  <p className="text-xl font-bold text-white tracking-tighter italic">15+ Years</p>
                  <p className="text-[10px] uppercase font-bold text-[#00D1FF]">Legacy of Excellence</p>
               </div>
               <div className="bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl">
                  <p className="text-xl font-bold text-white tracking-tighter italic">Premium</p>
                  <p className="text-[10px] uppercase font-bold text-[#00D1FF]">Service Quality</p>
               </div>
            </div>
          </motion.div>

          {/* --- 7 DIAMOND GRID (Optimized for 80vh) --- */}
          <div className="relative h-[550px] w-full flex items-center justify-center scale-90 md:scale-100">  
          </div>
        </div>
      </section>

      {/* --- SPECIAL INTEREST TOURISM --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-black text-[#001F7A] uppercase tracking-tighter leading-none">
                   Specialists in <br/> <span className="text-[#0033CC]">Luxury & Interest Tours</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                   ETC specializes in Luxury, Incentive, Exclusive, and Special Interest Tours with emphasis on <b>Ayurveda, Yoga, Wildlife, Textiles, Jewellery, Art & Crafts and Architecture.</b>
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { t: "South India", d: "Temple Tours & Ayurveda" },
                        { t: "North India", d: "Golden Triangle & Rajasthan" },
                        { t: "Kashmir", d: "The Best of Paradise" },
                        { t: "MICE", d: "Corporate Excellence" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col p-4 bg-slate-50 rounded-2xl border-l-4 border-[#0033CC]">
                            <span className="font-bold text-[#001F7A] text-sm">{item.t}</span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">{item.d}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative h-[450px]">
                <div className="absolute inset-0 bg-[#0033CC] rotate-3 rounded-[3rem]"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070" 
                  className="absolute inset-0 w-full h-full object-cover -rotate-3 rounded-[3rem] shadow-2xl border-4 border-white"
                  alt="Culture India"
                />
            </div>
        </div>
      </section>

      {/* --- SERVICE SPECTRUM GRID --- */}
      <section className="py-24 bg-[#001F7A] text-white rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Service <span className="text-[#00D1FF]">Spectrum</span></h2>
            <div className="h-1 w-24 bg-[#00D1FF] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div 
                whileHover={{ y: -5, backgroundColor: '#0033CC' }}
                key={i} 
                className="p-6 bg-white/5 border border-white/10 rounded-3xl transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <ChevronRight className="w-4 h-4 text-[#00D1FF]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest leading-tight">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR SETUP & QUALITY --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
           <div className="relative h-[500px] order-2 md:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-[#0033CC]/30 rounded-full animate-spin-slow"></div>
              <motion.div 
                 animate={{ scale: [1, 1.05, 1] }} 
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="absolute inset-0 overflow-hidden rounded-full shadow-2xl border-[15px] border-slate-50"
              >
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" className="w-full h-full object-cover" alt="Office Setup" />
              </motion.div>
           </div>

           <div className="space-y-8 order-1 md:order-2">
              <div>
                <h3 className="text-4xl font-black uppercase text-[#001F7A] tracking-tighter mb-4">Infrastructural Setup</h3>
                <p className="text-slate-600 leading-relaxed italic">
                  "Backed by an efficient and devoted team of professionals and world-class systems to back our operations."
                </p>
              </div>
              
              <div className="space-y-6">
                 {[
                   { t: "Determined Pillars", d: "Team that acts as strength for fast-paced progress.", icon: <Users/> },
                   { t: "Premium Quality", d: "Motivated to improvise services on a regular basis.", icon: <ShieldCheck/> },
                   { t: "Exotic Dreams", d: "Designing tours as per your liking & hotel reservations.", icon: <Globe/> }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-center">
                      <div className="bg-[#0033CC] p-3 rounded-xl text-white shadow-lg">{item.icon}</div>
                      <div>
                        <p className="font-bold text-[#001F7A] uppercase text-sm">{item.t}</p>
                        <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER CTA CARD --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
           <div className="bg-[#001F7A] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden text-center md:text-left">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Talk to our Brilliant <br/><span className="text-[#00D1FF]">Vacation Planners</span></h4>
                  <p className="text-blue-100/60 mt-2">Create a unique tailor-made, private tour meant for you exclusively.</p>
                </div>
                <div className="bg-[#00D1FF] p-8 rounded-3xl text-[#001F7A] shadow-xl">
                   <p className="text-[10px] uppercase font-black tracking-widest">Direct Contact Line</p>
                   <p className="text-3xl font-black tracking-tighter">+91-9906038508</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsETC;