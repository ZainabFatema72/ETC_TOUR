import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // New state for Drawer

  const services = [
    {
      title: "Transportation",
      desc: "Your choice of cars and reliable services at the best available prices.",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
    },
    {
      title: "Hotels",
      desc: "Get the best hotel deals with our assurance of premium quality service.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    },
    {
      title: "Wedding Events",
      desc: "Every wedding we undertake is a unique package designed for your perfect day.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    },
    {
      title: "Flights",
      desc: "Time your flights to suit your holiday itinerary and eliminate delays.",
      img: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
    },
    {
      title: "MICE",
      desc: "Specialized niche of group tourism dedicated to planning and facilitating conferences.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    },
    {
      title: "Cruises",
      desc: "Find the right package and set sail for your dream cruise vacation.",
      img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2070",
    },
    {
      title: "Visa",
      desc: "Expert assistance in navigating international travel documentation.",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017",
    },
    {
      title: "Passport",
      desc: "Facilitating appointments and documentation for swift passport processing.",
      img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070",
    },
    {
      title: "Forex",
      desc: "Authorized RBI retail forex dealers providing seamless currency solutions.",
      img: "https://images.pexels.com/photos/12955791/pexels-photo-12955791.jpeg",
    }
  ];

  const handleInquiryClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="bg-white text-slate-900 font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071" 
            alt="Services Header" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2339]/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-blue-100 text-lg uppercase tracking-widest font-bold border-l-4 border-blue-400 pl-6">
              Premium Total Travel Management Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12 border-l-4 border-blue-600 pl-6">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">World-Class <span className="text-blue-600">Solutions</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                onClick={() => setSelectedService(service)}
                className="relative h-[280px] overflow-hidden group rounded-xl shadow-md cursor-pointer border border-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                  <h3 className="text-white text-lg font-black uppercase tracking-tight mb-4">{service.title}</h3>
                  <div className="flex items-center gap-3 text-[9px] font-black text-white uppercase tracking-[0.3em] bg-blue-600/30 backdrop-blur-md border border-white/20 py-2 px-5 w-fit rounded-full group-hover:bg-blue-600 transition-all">
                    Explore Service <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-red-500 text-white p-2 h-10 w-10 flex items-center justify-center rounded-full transition-all">✕</button>
              
              <div className="h-56 relative overflow-hidden">
                <img src={selectedService.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 text-left">
                   <h2 className="text-white text-3xl font-black uppercase tracking-tighter">{selectedService.title}</h2>
                </div>
              </div>

              <div className="p-10 text-left">
                <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">Detailed Service Portfolio</p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-8">
                  {selectedService.desc} Express Travel Corporate Services LLP ensures that every aspect of {selectedService.title.toLowerCase()} is handled with professional precision and personalized care.
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <button 
                    onClick={handleInquiryClick} 
                    className="bg-blue-600 text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all"
                  >
                    Inquire Now
                  </button>
                  <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Govt Approved Agency</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SIDE DRAWER LEAD FORM */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop for Drawer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-slate-900/60 z-[110] backdrop-blur-sm"
            />
            
            {/* Drawer Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[120] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">
                  Service <span className="text-blue-600">Inquiry</span>
                </h2>
                <button onClick={() => setIsDrawerOpen(false)} className="text-slate-400 hover:text-red-500 font-bold">CLOSE ✕</button>
              </div>

              <form className="space-y-6 text-left" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent!'); setIsDrawerOpen(false); }}>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Service Interested In</label>
                  <input 
                    type="text" 
                    readOnly 
                    value={selectedService?.title || "General Inquiry"} 
                    className="w-full bg-slate-50 border-b-2 border-slate-200 py-3 px-4 font-bold text-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Your Full Name</label>
                  <input required type="text" placeholder="full name" className="w-full border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-blue-600 transition-all" />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Phone Number</label>
                  <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-blue-600 transition-all" />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Email Address</label>
                  <input required type="email" placeholder="john@company.com" className="w-full border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-blue-600 transition-all" />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Message (Optional)</label>
                  <textarea rows="3" placeholder="Tell us about your requirements..." className="w-full border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-blue-600 transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-900 transition-all mt-6 shadow-lg shadow-blue-200">
                  Submit Inquiry
                </button>
              </form>

              <div className="mt-auto pt-10 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                  Our Manager will contact you within 24 hours. <br/>
                  <span className="text-blue-600">Urgent? Call +91 98408 87777</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;