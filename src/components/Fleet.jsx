import React from 'react';

const fleetData = [
  { tag: "BMW", title: "The Pinnacle", desc: "Experience power and prestige for an unforgettable journey." },
  { tag: "KIA Carnival", title: "Luxury MPV", desc: "Spacious comfort redefined for weddings and corporate events." },
  { tag: "Hiace", title: "Group Style", desc: "Ideal for outstation trips without compromising on luxury." },
  { tag: "Mercedes", title: "Iconic S-Class", desc: "Unparalleled sophistication and performance on every road." },
  { tag: "Fortuner", title: "Rugged Elegance", desc: "Unleash power on city drives or outstation adventures." },
  { tag: "Weddings", title: "Grand Entrance", desc: "Exquisite rides to make your special day even more memorable." },
];

const LuxuryFleet = () => {
  return (
    <section className="relative py-3 overflow-hidden min-h-screen flex items-center">
      {/* BACKGROUND IMAGE WITH OVERLAY */}
      

      <div className="max-w-6xl mx-auto px-2 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-1">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter reveal">
            Our <span className="text-blue-500">Premium</span> Fleet
          </h2>
          <p className="text-slate-300 mt-2 text-sm uppercase tracking-[0.2em] reveal">Redefining Sophistication on the Road</p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetData.map((car, i) => (
            <div 
              key={i} 
              className="reveal group bg-white/10 backdrop-blur-md p-8 rounded-none border border-white/10 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-500 shadow-2xl"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span className="text-[15px] font-bold text-blue-400 uppercase tracking-widest border border-blue-400/30 px-3 py-1 rounded-none mb-4 inline-block">
                {car.tag}
              </span>
              <h3 className="text-xl font-bold text-white mt-5 group-hover:text-blue-400 transition-colors">
                {car.title}
              </h3>
              <p className="text-slate-200 text-sm mt-3 leading-relaxed opacity-80">
                {car.desc}
              </p>
              <div className="mt-1 flex items-center text-blue-400 font-black text-[15px] uppercase tracking-wider cursor-pointer group-hover:gap-2 transition-all">
                Explore Vehicle <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center reveal" style={{ animationDelay: '800ms' }}>
          <button className="bg-blue-600 text-white text-xs font-black py-4 px-12 rounded-full hover:bg-white hover:text-blue-600 transition-all active:scale-95 uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Book Your Ride Now
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        section {
          background-attachment: fixed; /* Parallax Effect */
        }
      `}</style>
    </section>
  );
};

export default LuxuryFleet;
