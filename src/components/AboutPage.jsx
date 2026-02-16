import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Users, ShieldCheck, Globe
} from 'lucide-react';



const carouselLogos = [
  { src: '/1.jpg', alt: "IATO" },
  { src: '/2.jpg', alt: "ITTA" },
  { src: '/3.png', alt: "SKAL" },
  { src: '/4.jpg', alt: "CC Avenue" }
];



const AboutUsETC = () => {
  // Updated list as per your requirement
  const services = [
    "India Tours (Domestic)",
    "Inbound Tours",
    "International Tours",
    "Group/Customized Tours",
    "Luxury Car/Coach Rentals",
    "Hotel Bookings",
    "Wedding Events",
    "Air Ticketing",
    "MICE (Meetings, Incentives, Conferences & Events)",
    "Cruises",
    "Visa",
    "Passport",
    "Forex"
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      
      {/* --- HERO SECTION: FIXED FOR NAVBAR OVERLAP --- */}
      <section className="relative h-[85vh] md:h-[95vh] flex flex-col items-center justify-center pt-[140px] md:pt-[160px]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/backgroundAbout.jpeg" 
            className="w-full h-full object-cover"
            alt="Travel Background"
          />
          {/* Overlay to pop text */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-2 justify-center">
              <div className="h-[2px] w-6 md:w-10 bg-white"></div>
              <span className="text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-black uppercase tracking-[0.3em] text-[10px] md:text-sm">
                Est. 31 January, 2008
              </span>
              <div className="h-[2px] w-6 md:w-10 bg-white"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-[1.1] md:leading-[0.9] mb-2 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
              EXPRESS TRAVEL <br /> 
              <span className="text-blue-600">CORPORATE</span> <br /> 
              <span className="text-white">SERVICES LLP</span>
            </h1>

            {/* Subtitle Divider Box */}
            <div className="max-w-3xl border-t border-white/30 pt-8 mb-2">
              <p className="text-gray-100 text-sm md:text-xl leading-relaxed italic font-medium px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                "Synonymous with leisure and business travel. We provide a superior total travel management service of premium quality."
              </p>
            </div>

            {/* Highlight Badges */}
            <div className="flex flex-row gap-4 md:gap-9 justify-center">
               <div className="bg-white/10 backdrop-blur-xl px-5 py-4 md:px-10 md:py-6 rounded-none border border-white/20 shadow-2xl">
                  <p className="text-xl md:text-3xl font-black text-white tracking-tighter">15+ Years</p>
                  <p className="text-[10px] md:text-xs uppercase font-bold text-blue-700 tracking-widest mt-1">Legacy</p>
               </div>
               <div className="bg-white/10 backdrop-blur-xl px-5 py-4 md:px-10 md:py-6 rounded-none border border-white/20 shadow-2xl">
                  <p className="text-xl md:text-3xl font-black text-white tracking-tighter">Premium</p>
                  <p className="text-[10px] md:text-xs uppercase font-bold text-blue-700 tracking-widest mt-1">Quality</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COMPACT SPECIAL INTEREST TOURISM --- */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 text-center md:text-left order-2 md:order-1"
          >
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001F7A] uppercase tracking-tighter leading-tight">
                Specialists in <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0033CC] to-[#00D1FF]">
                  Luxury Tours
                </span>
              </h2>
              <div className="h-1 w-16 bg-[#00D1FF] rounded-none mx-auto md:mx-0"></div>
            </div>

            <div className="space-y-3">
              <p className="text-slate-700 leading-snug text-sm md:text-base font-medium">
                ETC specializes in Luxury and Special Interest Tours with focus on:
              </p>
              
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                {["Ayurveda", "Yoga", "Wildlife", "Textiles", "Jewellery", "Art & Crafts", "Architecture"].map((item, i) => (
                  <span key={i} className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded-none text-[9px] md:text-[10px] font-bold text-[#0033CC] uppercase tracking-wider">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed italic border-l-4 border-[#0033CC] pl-4">
              "Expect the best of tour programmes for traditionally most frequented destinations and beyond."
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "South India", d: "Temple & Ayurveda", color: "bg-orange-50/50" },
                { t: "North India", d: "Golden Triangle", color: "bg-blue-50/50" },
                { t: "Kashmir & Hills", d: "Paradise & Himalayas", color: "bg-emerald-50/50" },
                { t: "Pan India", d: "Exotic Destinations", color: "bg-purple-50/50" }
              ].map((item, i) => (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  key={i} 
                  className={`flex flex-col p-3.5 ${item.color} rounded-none border-b-2 border-[#0033CC] shadow-sm transition-all`}
                >
                  <span className="font-black text-[#001F7A] text-xs md:text-sm uppercase tracking-tight">{item.t}</span>
                  <span className="text-[9px] text-slate-500 font-bold leading-tight">{item.d}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-[#001F7A] font-black text-[10px] uppercase tracking-[0.2em] opacity-60">
              Total Travel Management
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[420px] order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0033CC] to-[#00D1FF] rotate-3 rounded-none opacity-10 scale-105"></div>
            
            <div className="absolute inset-0 overflow-hidden rounded-none shadow-xl border-2 border-white">
              <img 
                src="/mal.jpg" 
                className="w-full h-full object-cover"
                alt="Culture India"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3.5 rounded-none shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00D1FF] rounded-none flex items-center justify-center text-[#001F7A]">
                <Globe size={16} />
              </div>
              <div>
                <p className="text-[8px] font-black uppercase text-slate-400 leading-none">Certified</p>
                <p className="text-xs font-black text-[#001F7A] uppercase leading-none mt-1">Specialists</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

 {/* --- ULTRA COMPACT SERVICE SPECTRUM (5 CARDS PER LINE) --- */}
<section 
  className="relative py-12 px-4 bg-white bg-center text-white" 
>
  <div className="max-w-[1400px] mx-auto relative z-10">
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter drop-shadow-xl">
        SERVICE <span className="text-blue-800">SPECTRUM</span>
      </h2>
      <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded-none"></div>
    </div>

    {/* Responsive Grid: Desktop pe exactly 5 columns */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {services.map((service, i) => (
        <motion.div 
          key={i}
          // Hover par specific blue color jo image_b35dc0.jpg mein dikh raha hai
          whileHover={{ y: -5, backgroundColor: 'rgba(40, 51, 60, 0.95)', borderColor: 'rgba(59, 130, 246, 0.5)' }}
         className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[110px] transition-all duration-300 group hover:bg-white/10 hover:border-blue-400/50 shadow-lg"  >
          {/* Compact Icon */}
          <ChevronRight className="text-blue-400 mb-2 group-hover:text-white transition-colors" size={16} />
          
          {/* Card Title - High Contrast White text by default */}
          <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white italic leading-tight px-1 group-hover:scale-105 transition-transform">
            "{service}"
          </h4>
          
          {/* Sub-text visible on hover */}
          <p className="text-blue-300 font-black text-[8px] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            ETC Services
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* --- ULTRA COMPACT INFRASTRUCTURE (WITH BG IMAGES) --- */}
<section className="py-12 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    
    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
      
      {/* CARD 1: OUR SETUP */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative group min-h-[280px] flex flex-col justify-center p-6 md:p-8 rounded-[2rem] overflow-hidden bg-[#001F7A] text-white shadow-lg"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/setup-bg.jpg" // Change to your actual image path
            className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" 
            alt="ETC Setup"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F7A] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-blue-400" size={24} />
            <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Our Setup</h4>
          </div>
          <p className="text-[11px] md:text-xs lg:text-[13px] leading-relaxed font-medium text-gray-200">
            We are backed by an efficient and devoted team of professionals as well as world-class systems to back our operations, constituting our infrastructural setup. They act as determined pillars of strength for our company, assisting in its fast-paced progress. They also contribute in keeping our position and goodwill intact, resulting in a remarkable increase in the clientele network.
          </p>
        </div>
      </motion.div>

      {/* CARD 2: QUALITY SERVICES */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative group min-h-[280px] flex flex-col justify-center p-6 md:p-8 rounded-[2rem] overflow-hidden bg-blue-600 text-white shadow-lg"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/quality-bg.jpg" // Change to your actual image path
            className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" 
            alt="Quality Services"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-white" size={24} />
            <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Quality Services</h4>
          </div>
          <p className="text-[11px] md:text-xs lg:text-[13px] leading-relaxed font-medium text-blue-50">
            ETC is a reputed name in delivering premium quality services to our worthy customers. By the virtue of our supreme services, they put their trust on us, motivating us to improvise our services on a regular basis. We visualize their exotic dreams by designing tours as per their liking, besides providing them with air tickets and conducting hotel reservations in the best and well-known hotels of the world.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* --- INFINITE MEMBERSHIP & PAYMENTS CAROUSEL --- */}
<section className="bg-white py-12 overflow-hidden border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-10">
      <p className="text-blue-600 font-black tracking-[0.3em] uppercase text-[12px] md:text-[14px] italic">
        Memberships & Secure Payments
      </p>
      <div className="w-12 h-0.5 bg-slate-200 mx-auto mt-3"></div>
    </div>
    
    <div className="relative flex overflow-x-hidden group">
      {/* First Set of Logos */}
      <div className="flex animate-scroll whitespace-nowrap gap-8 py-4">
        {[...carouselLogos, ...carouselLogos].map((logo, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 bg-white p-4 rounded-none border border-slate-100 flex items-center justify-center h-24 w-44 shadow-sm hover:shadow-md transition-all duration-300 "
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="max-h-full max-w-full object-contain" 
            />
          </div>
        ))}
      </div>

      {/* Tailwind handles the animation via the style tag below */}
    </div>
  </div>

  {/* CSS Animation Logic */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 30s linear infinite;
      display: flex;
      width: max-content;
    }
    .group:hover .animate-scroll {
      animation-play-state: paused;
    }
  `}} />
</section>
    </div>
  );
};

export default AboutUsETC;