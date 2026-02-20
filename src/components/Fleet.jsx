import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fleet = [
  { brand: "BMW", title: "THE PINNACLE OF PERFORMANCE", tag: "PERFORMANCE", cat: "LUXURY", img: "https://images.91wheels.com/assets/c_images/gallery/bmw/7-series/bmw-7-series-8-1742387934.jpg?w=480&q=80" },
  { brand: "KIA CARNIVAL", title: "LUXURY FOR EVERY OCCASION", tag: "EXECUTIVE", cat: "SUV", img: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/139107/new-carnival-right-front-three-quarter-2.jpeg?isig=0&q=80" },
  { brand: "COMMUTER HIACE", title: "TRAVEL IN GROUP STYLE", tag: "TRAVEL", cat: "GROUP", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJFOJ3DJJfwFMycwPycib5bV0_Rv9q5Vb9A&s" },
  { brand: "WEDDING COLLECTION", title: "A GRAND ENTRANCE", tag: "WEDDINGS", cat: "SPECIAL", img: "https://content.jdmagicbox.com/v2/comp/chandigarh/w5/0172px172.x172.230227114601.f4w5/catalogue/joshi-z-luxury-cars-morinda-road-kurali-luxury-car-rental-hqhv04lw6r.jpg" },
  { brand: "TOYOTA FORTUNER", title: "RUGGED ELEGANCE", tag: "ADVENTURE", cat: "SUV", img: "https://images.overdrive.in/wp-content/uploads/2016/04/New-Toyota-Fortuner.jpg" },
  { brand: "MERCEDES BENZ", title: "ICONIC LUXURY", tag: "ICONIC", cat: "LUXURY", img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLS/9791/1763535546980/front-left-side-47.jpg?impolicy=resize&imwidth=480" },
  { brand: "MERCEDES S-CLASS", title: "UNMATCHED SOPHISTICATION", tag: "VIP LUXURY", cat: "LUXURY", img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/S-Class/10852/1763536912245/front-left-side-47.jpg" },
  { brand: "MERCEDES E-CLASS", title: "TIMELESS ELEGANCE", tag: "BUSINESS", cat: "LUXURY", img: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/162929/e-class-exterior-right-front-three-quarter-35.png?isig=0&q=80" },
  { brand: "FORTUNER OUTSTATION", title: "ADVENTURE BEYOND CITY", tag: "OUTSTATION", cat: "SUV", img: "https://content.jdmagicbox.com/comp/bareilly/h7/9999px581.x581.230712155252.m4h7/catalogue/n94bk2xx9g10k01-r8mdqbwmwe-250.jpg" },
  { brand: "CORPORATE MERCEDES", title: "IMPRESS WITH EXECUTIVE", tag: "CORPORATE", cat: "LUXURY", img: "https://www.mercedes-benz.com/assets/vehicles/international-corporate-sales/update-07-2025/01-international-corporate-sales-media-carousel-cla-3840x2160.jpeg" },
  { brand: "S-CLASS OUTSTATION", title: "LUXURY BEYOND BOUNDARIES", tag: "ELITE TRAVEL", cat: "LUXURY", img: "https://i0.wp.com/abhaytravels.co.in/wp-content/uploads/2023/05/benzsclass.jpg?fit=642%2C362&ssl=1" },
  { brand: "HIACE OUTSTATION", title: "GROUP LUXURY ON THE GO", tag: "GROUP PRO", cat: "GROUP", img: "https://heritagecabs.in/assets/uploads/product_images/Toyota-Hiace.png" },
  { brand: "CARNIVAL OUTSTATION", title: "STYLE BEYOND LIMITS", tag: "LONG DRIVE", cat: "SUV", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiB7mHf_z9JA-2ffu7QiuXncZBpCvwZ5t62Q&s" }
];

const Fleet = () => {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'LUXURY', 'SUV', 'GROUP', 'SPECIAL'];
  const filtered = filter === 'ALL' ? fleet : fleet.filter(c => c.cat === filter);

  return (
    <div className="bg-white min-h-screen font-sans text-[#1A202C]">
      
      {/* Header Section - Spacing strictly reduced */}
      <section className="pt-4 pb-8 md:pt-6 md:pb-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <div className="w-full mb-4">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase mb-1 block italic">
              Premium Fleet
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-2">
              Explore <span className="text-blue-600">Elite.</span>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-3"></div>
            <p className="text-gray-400 text-[10px] md:text-xs max-w-xs mx-auto leading-tight">
              Curated selection for your premium travel.
            </p>
          </div>
          
          {/* Filter Bar */}
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-1.5">
              {categories.map(f => (
                <button 
                  key={f} 
                  onClick={() => setFilter(f)} 
                  className={`px-6 py-2 text-[9px] font-bold tracking-widest transition-all duration-300 ${
                    filter === f 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-50 text-gray-400 hover:bg-white border border-gray-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((car) => (
              <motion.div 
                layout 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                key={car.brand} 
                className="group bg-white flex flex-col border border-gray-100 hover:border-blue-100 transition-all duration-300"
              >
                <div className="relative h-48 bg-[#F9FAFB] flex items-center justify-center p-6 overflow-hidden">
                  <img 
                    src={car.img} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    alt={car.brand} 
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white text-[7px] px-3 py-1 font-black uppercase tracking-widest">
                    {car.tag}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-1">
                    {car.brand}
                  </h3>
                  <p className="text-[9px] text-blue-600 font-bold tracking-wider uppercase mb-4">
                    {car.title}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <button className="w-full bg-gray-900 text-white py-3 text-[9px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                      Reserve Now
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Fleet;