import React, { useState, useEffect } from 'react'; // Added hooks
import { Link } from 'react-router-dom';
import { Plane, Hotel, Utensils, Activity, Car, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AustraliaPackage = () => {
  // --- 1. STATE & DATA ---
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Jestin Mathew",
      text: "We would like to appreciate your good office for arranging travel trip to Maldives for our Director, Mr Walfred Tagor..."
    },
    {
      name: "Ramesh Babu",
      text: "Dear Sir, We had arranged a vehicle for Mr. Swithun Manoharan - Executive Vice President from your M/s Express Travel..."
    },
    {
      name: "Santosh Krinsky",
      text: "I wanted to take the opportunity to write to you and thank you for your efforts to make our 2 week tour of Tamil Nadu..."
    }
  ];

  const highlights = [
    { icon: <Plane size={20} />, text: "Flights" },
    { icon: <Hotel size={20} />, text: "Hotels" },
    { icon: <Utensils size={20} />, text: "Meals" },
    { icon: <Activity size={20} />, text: "Activities" },
    { icon: <Car size={20} />, text: "Transfers" },
  ];

 const itinerary = [
  {
    day: "Day 01",
    title: "SYDNEY ARRIVAL & SHOWBOAT CRUISE",
    image: "/sidarr.jpg",
    desc: "Arrive Sydney. Indian Lunch included. Check-in and free time. Evening Sydney Showboat Dinner Cruise with Indian Banquet on board and return transfers. (Standard Indian Package)"
  },
  {
    day: "Day 02",
    title: "SYDNEY CITY TOUR & 2 ATTRACTIONS",
    image: "/bondi.jpg",
    desc: "Breakfast included. Private City Tour: Opera House (Guided Tour), Bondi Beach, Harbour Bridge, Mrs Macquarie's Chair. Includes Choice of 2 attractions: Aquarium/Zoo/Tower Eye/Madame Tussauds. Indian Lunch & Dinner included."
  },
  {
    day: "Day 03",
    title: "BLUE MOUNTAINS & SCENIC WORLD",
    image: "/bluemount.jpg",
    desc: "Full Day Blue Mountains Tour via Homebush Olympic Site. Visit Featherdale Wildlife Park and Echo Point (Three Sisters). Includes Ultimate Discovery Pass at Scenic World (Railway, Skyway & Cableway). Indian Meals included."
  },
  {
    day: "Day 04",
    title: "SYDNEY – BRISBANE – GOLD COAST",
    image: "/cost.jpg",
    desc: "Transfer to Sydney Airport for flight to Brisbane. On arrival, Indian Lunch and transfer to Gold Coast hotel. Evening free at leisure. Standard Indian Dinner included."
  },
  {
    day: "Day 05",
    title: "SEA WORLD EXPLORATION",
    image: "/seaworld.jpg",
    desc: "Full day at Sea World. Optional 30-min Hot Air Balloon flight. Includes Indian Buffet lunch at Shoreline Sea World Resort and Indian Dinner."
  },
  {
    day: "Day 06",
    title: "MOVIE WORLD MAGIC",
    image: "/movieworld.jpg",
    desc: "Full day Movie World Admission. Experience Hollywood in the Gold Coast. Indian Buffet dinner at Legends Dining included."
  },
  {
    day: "Day 07",
    title: "GOLD COAST – CAIRNS (KURANDA)",
    image: "goldcoast.jpg",
    desc: "Flight to Cairns. Visit Kuranda Village with Skyrail Cableway. Evening Tjapukai By Night cultural show with dinner and return transfers."
  },
  {
    day: "Day 08",
    title: "GREAT BARRIER REEF CRUISE",
    image: "https://images.unsplash.com/photo-1580136608260-42d1c470386e?q=80&w=400",
    desc: "Big Cat Green Island Cruise with semi-submersible vessel. Buffet Lunch served on board. Standard Indian Dinner and return transfers included."
  },
  {
    day: "Day 09",
    title: "CAIRNS – MELBOURNE",
    image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=400",
    desc: "Transfer to Cairns Airport for flight to Melbourne. Private transfer to city hotel. Indian Lunch (walk/packed) and Indian Dinner included."
  },
  {
    day: "Day 10",
    title: "MELBOURNE CITY TOUR & PHILLIP ISLAND",
    image: "https://images.unsplash.com/photo-1470290371042-4c6856af712c?q=80&w=400",
    desc: "City Tour: Fitzroy Garden, St. Patrick's Cathedral, Federation Square. Includes MCG Guided Tour. Evening Phillip Island Penguin Parade & Koala Centre. Indian Lunch & Dinner included."
  },
  {
    day: "Day 11",
    title: "GREAT OCEAN ROAD TOUR",
    image: "https://images.unsplash.com/photo-1508688941199-3f0a53b5897c?q=80&w=400",
    desc: "Full Day (12 hrs) Great Ocean Road. See the Twelve Apostles, Loch Ard Gorge & London Bridge. Pizza Lunch with chips, drinks and ice cream. Standard Indian Dinner included."
  },
  {
    day: "Day 12",
    title: "MELBOURNE DEPARTURE",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400",
    desc: "Breakfast and final Indian Lunch included. Private transfer to Melbourne Airport for your flight back to Chennai. Tour Ends."
  },
];

  // --- 2. AUTO PLAY LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="pt-24 md:pt-44 bg-white font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Premium International Tour</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter leading-none text-slate-900">
              AUSTRALIA<br/><span className="text-blue-600">WONDERS</span>
            </h1>
            <p className="text-lg font-bold text-slate-500 mb-8 max-w-md">
              Sydney (3N) • Gold Coast (3N) • Cairns (2N) • Melbourne (3N)
            </p>
            <div className="flex gap-4 mb-12">
              <div className="bg-slate-900 text-white px-6 py-3 text-xs font-black uppercase tracking-widest">12 Days / 11 Nights</div>
              <div className="border border-slate-200 px-6 py-3 text-xs font-black uppercase tracking-widest">Fixed Departure</div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100">
                  <span className="text-blue-600">{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full lg:w-1/2 relative">
            <div className="h-[420px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Australia" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 hidden md:block shadow-2xl z-20">
              <p className="text-4xl font-black italic mb-1">100%</p>
              <p className="text-sm font-bold tracking-widest uppercase text-white">Satisfied Travelers</p>
            </div>
          </motion.div>
        </div>

        {/* --- ITINERARY SECTION --- */}
        <div className="py-20 bg-slate-50 -mx-6 px-6 mb-20 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-2 text-slate-900">Detailed Itinerary</h2>
              <div className="h-1.5 w-20 bg-blue-600 mx-auto"></div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-100 -translate-x-1/2 hidden md:block border-l-2 border-dashed border-blue-200"></div>
              
              <div className="space-y-12">
                {itinerary.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div 
  key={index} 
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true }}
  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
>
  <div className="w-full md:w-1/2 flex justify-center px-4">
    {/* Image Container with rotation logic */}
    <div className={`relative p-2 bg-white shadow-xl ${isEven ? 'rotate-1' : '-rotate-1'} border border-slate-100`}>
      <div className="w-64 h-44 overflow-hidden bg-slate-200">
        <img 
          src={step.image} // <--- Ab ye har day ke liye alag photo uthayega
          alt={step.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
      </div>
      <div className="absolute top-0 left-0 bg-blue-600 text-white text-[9px] font-bold px-2 py-1">
        {step.day}
      </div>
    </div>
  </div>

  {/* Central Number Circle */}
  <div className="absolute left-1/2 -translate-x-1/2 w-9 h-9 bg-blue-600 text-white rounded-none border-4 border-white flex items-center justify-center z-10 shadow-lg md:flex hidden font-black text-[10px]">
    {index + 1}
  </div>

  {/* Text Content */}
  <div className={`w-full md:w-1/2 px-4 md:px-10 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
    <h3 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-tight">{step.title}</h3>
    <div className={`h-1 w-10 bg-blue-600 mb-3 ${isEven ? 'mr-auto' : 'ml-auto'}`}></div>
    <p className="text-slate-600 leading-snug font-medium text-sm">{step.desc}</p>
  </div>
</motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* TESTIMONIAL CARD */}
          <div className="bg-white border border-gray-100 shadow-2xl relative overflow-hidden rounded-none h-[350px] flex flex-col group">
            <div className="bg-blue-600 py-3 px-8 w-[70%] rounded-r-full shadow-lg relative z-20 -ml-2 mt-6">
              <span className="text-white font-bold tracking-wider uppercase text-xs">Testimonials</span>
            </div>

            <div className="p-8 pt-4 flex flex-col h-full justify-between relative z-10">
              <div className="relative h-56">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20, x: 50 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: 20, x: -50 }}
                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex text-yellow-400 gap-1 mt-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-4 -left-4 text-blue-50 opacity-50" size={40} />
                      <p className="text-slate-600 font-medium italic text-[15px] leading-relaxed relative z-10 pl-2">
                        "{testimonials[index].text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-black shadow-xl">
                        {testimonials[index].name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-slate-800 text-sm uppercase tracking-tight">{testimonials[index].name}</p>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Verified Client</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-3 mt-4">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? 'w-10 bg-blue-600' : 'w-2 bg-slate-200'}`} />
                ))}
              </div>
            </div>
            <Quote className="absolute -bottom-6 -right-6 text-slate-50 rotate-180" size={120} />
          </div>

          {/* CTA CARD */}
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-900 to-slate-900 p-10 relative h-[350px] flex flex-col justify-center">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Explore Dream Destinations!
              </h2>
              <p className="text-blue-300 font-bold text-lg italic mb-10">
                A journey of a thousand miles begins with a single step. We are ready to present you the best!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/enquiry" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3">
                  Book Now <Plane size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AustraliaPackage;