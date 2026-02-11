import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  // --- CONTENT DATA ---
  const indiaTours = ["Andaman Island", "Andhra & Telangana", "Tamil Nadu", "Goa", "Himachal", "Karnataka", "Kashmir", "Kerala", "Maharashtra", "North East", "Sikkim", "Uttarakhand"];
  const internationalTours = ["Australia", "Europe", "Maldives", "South Africa", "Dubai"];
  const blogs = [
    { title: "Top 7 Places Post-Pandemic", date: "2021", desc: "Beaches are forgotten by our minds and Beautiful hills are lost from our sight." },
    { title: "Memorable Pongal 2021", date: "Jan 2021", desc: "Life tossed us back and forth like a piece of paper. Let's celebrate again." },
    { title: "Budget Tamil Nadu", date: "Feb 2021", desc: "The first place in budget list is Megamalai located near Kumuli." }
  ];

  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. TOP BAR (Ref: Content list) */}
      <div className="bg-[#0a2339] text-white py-2 px-6 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
        <div className="flex gap-4">
          <span>Call: +91-44-2827 2279</span>
          <span className="hidden md:block italic text-blue-400">Recognized by Ministry of Tourism, Govt of India</span>
        </div>
        <div className="flex gap-4">
          <button className="hover:text-blue-400 transition-colors">Make Payment Online</button>
          <button className="bg-blue-600 px-3 py-1 rounded-sm">Get a Call Back</button>
        </div>
      </div>

      {/* 2. HERO SECTION (Ref: image_86bb3c style) */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2070" 
            className="w-full h-full object-cover grayscale-[30%]" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a2339]"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.5em] text-xs mb-4 text-blue-400 font-bold"
          >
            Since 2008
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none"
          >
            EXPLORE <br/> <span className="text-transparent border-t border-b border-white px-4">INDIA</span>
          </motion.h1>
          <p className="max-w-xl mx-auto mt-8 text-slate-300 text-sm md:text-base leading-relaxed">
            EXPRESS TRAVEL CORPORATE SERVICES LLP is synonymous with leisure and business travel management of premium quality.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-white hover:text-black px-10 py-4 text-xs font-black uppercase tracking-widest transition-all shadow-xl">Book Your Trip</button>
            <button className="border border-white/30 backdrop-blur-md px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">Discover More</button>
          </div>
        </div>
      </section>

      {/* 3. TOURS GRID (Ref: image_583bc3 style + India Tours content) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0a2339]">India <span className="text-blue-600">Packages</span></h2>
              <p className="text-slate-400 text-sm mt-2 uppercase tracking-widest">Emerald, Blue and You</p>
            </div>
            <div className="flex gap-2">
               {["All", "South", "North", "Islands"].map(cat => (
                 <button key={cat} className="px-4 py-2 text-[10px] font-bold uppercase border border-slate-200 hover:bg-[#0a2339] hover:text-white transition-all">{cat}</button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {indiaTours.slice(0, 8).map((item, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="bg-white group cursor-pointer shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={`https://source.unsplash.com/random/400x500?india,${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item} />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">Featured</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{item}</h3>
                  <p className="text-xs text-slate-400 mt-2">Explore the earth's heaven with Express Travel.</p>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                    <span>View Package</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOG SECTION (Ref: Blog Content) */}
      <section className="py-24 bg-[#0a2339] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic">Travel <span className="text-blue-500">Stories</span></h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {blogs.map((blog, i) => (
              <div key={i} className="group cursor-pointer">
                <p className="text-blue-400 text-xs font-bold uppercase mb-2 tracking-widest">{blog.date}</p>
                <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-blue-400 transition-colors">{blog.title}</h3>
                <p className="text-slate-400 text-sm mt-4 leading-relaxed line-clamp-2">{blog.desc}</p>
                <button className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-blue-600 pb-1">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER (Ref: Footer Content) */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-2xl font-black text-blue-600 mb-6 uppercase tracking-tighter">EXPRESS TRAVEL</h4>
            <p className="text-slate-500 text-xs leading-loose uppercase tracking-widest">
              Established 31 Jan, 2008. <br/> Excellence in Corporate Mobility.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 text-slate-400">Quick Links</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-200">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">India Tours</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">International</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Car Rentals</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 text-slate-400">Reach Us</h5>
            <div className="text-xs text-slate-400 space-y-4 leading-relaxed">
              <p><b className="text-white">Chennai:</b> New No.21, Nungambakkam, Chennai – 034.</p>
              <p><b className="text-white">Phone:</b> +91-44-2827 2279</p>
              <p><b className="text-white">Email:</b> enquiry@expresstravelcorp.com</p>
            </div>
          </div>

          <div>
            <h5 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 text-slate-400">Branches</h5>
            <ul className="text-xs text-slate-400 space-y-2 uppercase tracking-tighter">
              <li>• New Delhi (Phase-1)</li>
              <li>• Bhopal (Hoshangabad Road)</li>
              <li>• Indore (Near Bombay Hospital)</li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[9px] text-slate-600 uppercase tracking-widest">
          Copyright © 2026. EXPRESS TRAVEL CORPORATE SERVICES LLP. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default Blog;