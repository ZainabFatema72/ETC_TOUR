import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, Hotel, Heart, Plane, Users, Ship, FileText, Globe, DollarSign 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Transportation",
      desc: "Your choice of cars and reliable services at the best available prices.",
      icon: <Car className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      title: "Hotels",
      desc: "Get the best hotel deals, with C&K's assurance of quality service.",
      icon: <Hotel className="w-8 h-8" />,
      color: "bg-teal-500"
    },
    {
      title: "Wedding Events",
      desc: "Every wedding we undertake is a unique package that fits the couple like their perfect engagement ring!",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-rose-500"
    },
    {
      title: "Flights",
      desc: "Time your flights to suit your holiday itinerary and eliminate delays.",
      icon: <Plane className="w-8 h-8" />,
      color: "bg-sky-500"
    },
    {
      title: "MICE",
      desc: "Specialized niche of group tourism dedicated to planning, booking, and facilitating conferences.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-indigo-600"
    },
    {
      title: "Cruises",
      desc: "Find the right package and set sail for your dream cruise vacation.",
      icon: <Ship className="w-8 h-8" />,
      color: "bg-cyan-600"
    },
    {
      title: "Visa",
      desc: "Expert assistance in navigating the complex world of international travel documentation.",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-emerald-600"
    },
    {
      title: "Passport",
      desc: "Facilitating appointments and documentation for swift passport processing with right guidance.",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-amber-500"
    },
    {
      title: "Forex",
      desc: "Leading retail forex dealers authorized by RBI to provide seamless currency solutions.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Ref: image_583bc3 "Why we are the best" style */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs"
          >
            Express Travel Corporate Services LLP
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mt-3">
            Premium <span className="text-blue-600">Travel Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-6 text-slate-500 text-sm md:text-base leading-relaxed">
            From luxury fleet management to global tour planning, we provide a superior total travel management service.
          </p>
        </div>

        {/* Services Grid - Ref: image_583bc3 icon style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative group overflow-hidden"
            >
              {/* Icon Background Circle */}
              <div className={`w-16 h-16 ${service.color} text-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                {service.desc}
              </p>

              <button className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                Know More <span className="text-lg">→</span>
              </button>

              {/* Decorative Corner Element */}
              <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${service.color} opacity-5 rounded-full group-hover:scale-[5] transition-all duration-700`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Ref: image_630aa5 search bar style */}
        <div className="mt-20 bg-[#0a2339] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Globe className="w-64 h-64 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight relative z-10">
            Need a Customized Travel Solution?
          </h3>
          <p className="text-blue-200 mt-2 relative z-10 text-sm uppercase tracking-widest">
            One of our executives will call you back soon
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
            <button className="bg-blue-600 text-white px-10 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-blue-900 transition-all shadow-xl">
              Get a Call Back Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;