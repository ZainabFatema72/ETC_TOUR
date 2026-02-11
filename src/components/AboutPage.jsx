import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, ShieldCheck, Globe, 
  Palmtree, Flower2, Gem, Landmark,
  MapPin, Phone, Mail, Clock, Briefcase, Car, Hotel, Ship
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white text-slate-900 font-sans overflow-hidden">
      
      {/* SECTION 1: CINEMATIC HERO (Ref: image_63252a Style) */}
      <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071" 
            alt="India Heritage" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2339]/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              About <span className="text-blue-400">Us</span>
            </h1>
            <p className="text-blue-100 text-lg uppercase tracking-widest font-bold border-l-4 border-blue-400 pl-6">
              Synonymous with leisure and business travel management
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE LEGACY (Ref: image_63252a "Trusted Agency" Layout) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Established 31 January, 2008</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-8">
                Premium Total <br/>
                <span className="text-blue-600">Travel Management</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-slate-900">EXPRESS TRAVEL CORPORATE SERVICES LLP (ETC)</span> has focused for the past 10 years on providing the world community—from individuals to large groups—with a superior total travel management service of premium quality.
                </p>
                <p>
                  We never compromise on the personalised service and attention to detail which every customer expects and deserves. We visualize exotic dreams by designing tours as per our clients' liking.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                alt="Architecture"
              />
              <div className="absolute -bottom-10 -left-10 bg-[#0a2339] p-10 rounded-2xl text-white shadow-2xl hidden md:block border-b-8 border-blue-600">
                <p className="text-5xl font-black leading-none">10+</p>
                <p className="text-xs uppercase tracking-widest font-bold mt-2">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPECIALIZED DIVISIONS (Ref: image_63252a Feature Cards) */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Specialized <span className="text-blue-600">Focus Areas</span></h2>
            <p className="text-slate-500 mt-2 uppercase tracking-[0.2em] text-xs font-bold">Insightful tours for fairs, festivals, and culture</p>
          </div>
          <div className="grid md:grid-cols-4 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-blue-600 p-10 text-white hover:bg-blue-700 transition-colors">
              <Flower2 className="w-10 h-10 mb-6" />
              <h3 className="text-sm font-bold uppercase mb-4 tracking-widest">Ayurveda & Yoga</h3>
              <p className="text-blue-100 text-[11px] leading-relaxed uppercase">Traditional healing retreats and wellness focus.</p>
            </div>
            <div className="bg-[#00acc1] p-10 text-white hover:bg-[#0097a7] transition-colors">
              <Palmtree className="w-10 h-10 mb-6" />
              <h3 className="text-sm font-bold uppercase mb-4 tracking-widest">Wildlife Safaris</h3>
              <p className="text-blue-50 text-[11px] leading-relaxed uppercase">Experience cultural, historical, and tribal India.</p>
            </div>
            <div className="bg-[#00838f] p-10 text-white hover:bg-[#006064] transition-colors">
              <Gem className="w-10 h-10 mb-6" />
              <h3 className="text-sm font-bold uppercase mb-4 tracking-widest">Art & Crafts</h3>
              <p className="text-blue-50 text-[11px] leading-relaxed uppercase">Emphasis on textiles, jewellery, and architecture.</p>
            </div>
            <div className="bg-[#0a2339] p-10 text-white hover:bg-slate-900 transition-colors">
              <Landmark className="w-10 h-10 mb-6" />
              <h3 className="text-sm font-bold uppercase mb-4 tracking-widest">Temple Tours</h3>
              <p className="text-slate-300 text-[11px] leading-relaxed uppercase">South India and traditionally frequented destinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICE SPECTRUM (Ref: image_631242 Detail Layout) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-6">Our Tour & <br/><span className="text-blue-600">Travel Services</span></h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 uppercase font-bold tracking-wider">
                We are a distinguished service provider backed by an efficient and devoted team of professionals.
              </p>
              <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
                <p className="text-xs font-black uppercase text-blue-900 leading-loose">
                  Our team acts as determined pillars of strength, assisting in fast-paced progress and keeping our goodwill intact.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Inbound & Domestic Tours", icon: <MapPin className="w-4 h-4"/> },
                { name: "Luxury Car/Coach Rentals", icon: <Car className="w-4 h-4"/> },
                { name: "Hotel Bookings", icon: <Hotel className="w-4 h-4"/> },
                { name: "Wedding Events", icon: <Users className="w-4 h-4"/> },
                { name: "MICE (Events & Conferences)", icon: <Briefcase className="w-4 h-4"/> },
                { name: "International Cruises", icon: <Ship className="w-4 h-4"/> },
                { name: "Visa & Passport Guidance", icon: <Globe className="w-4 h-4"/> },
                { name: "Forex Services", icon: <Clock className="w-4 h-4"/> }
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-4 p-5 border border-slate-100 hover:shadow-lg transition-all rounded-lg group">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <span className="font-bold uppercase text-[10px] tracking-[0.1em] text-slate-800">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT & BRANCHES (Ref: image_583bc3 Footer Style) */}
      <footer className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-16 mb-12">
            <div>
              <h4 className="text-xl font-black text-blue-400 uppercase tracking-tighter mb-6">Express Travel</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest font-bold">
                Registered Office: New No.21, New Tank Street, Nungambakkam, Chennai – 600 034.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.3em] mb-6 text-slate-400">Managers</h5>
              <div className="space-y-4 text-[10px] font-black uppercase tracking-widest">
                <p><span className="text-blue-500">Transport:</span> Mr. Suresh <br/> +91 98408 87777</p>
                <p><span className="text-blue-500">Tours:</span> Mr. Mohan <br/> +91 97910 07710</p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.3em] mb-6 text-slate-400">Nationwide Setup</h5>
              <ul className="text-[10px] text-slate-500 space-y-2 uppercase font-bold tracking-widest">
                <li>• New Delhi (Sheikh Sarai)</li>
                <li>• Bhopal (Hoshangabad Road)</li>
                <li>• Indore (Ring Road)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.3em] mb-6 text-slate-400">Support</h5>
              <p className="text-[10px] text-slate-500 font-bold uppercase mb-2 flex items-center gap-2"><Mail className="w-3 h-3"/> enquiry@expresstravelcorp.com</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase flex items-center gap-2"><Phone className="w-3 h-3"/> +91-44-2827 2279</p>
            </div>
          </div>
          <div className="text-center text-[9px] text-slate-600 uppercase tracking-[0.5em] font-black">
            Copyright © 2026. EXPRESS TRAVEL CORPORATE SERVICES LLP. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;