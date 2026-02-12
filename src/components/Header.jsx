import React, { useState, useEffect, useRef } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//international tour pages
import AustraliaPage from './AustraliaPage';
import EuropePage from './EuropePage';
import MaldivesPage from './MaldivesPage';
import SouthAfricaPage from './SouthAfricaPage';
import DubaiPage from './DubaiPage';
//domestic tour pages
import AndamanPage from './AndamanPage';
import KeralaPage from './KeralaPage';
import KashmirPage from './KashmirPage';
import GoaPage from './GoaPage';
import HimachalPage from './HimachalPage';
import TamilNaduPage from './TamilNaduPage';  
import AndhraPage from './AndhraPage';  
import KarnatakaPage from './KarnatakaPage';
import MaharashtraPage from './MaharashtraPage';
import SikkimPage from './SikkimPage';
import NorthEastPage from './NorthEastPage';
import UttarakhandPage from './UttarakhandPage';
import { ChevronDown, Menu, Globe, Send, X, CreditCard } from 'lucide-react';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/australia" element={<AustraliaPage />} />
        <Route path="/tours/europe" element={<EuropePage />} />
        <Route path="/tours/maldives" element={<MaldivesPage />} />
        <Route path="/tours/south-africa" element={<SouthAfricaPage />} />
        <Route path="/tours/dubai" element={<DubaiPage />} />
        // 3. DOMESTIC TOUR ROUTES
        <Route path="/tours/india/andaman" element={<AndamanPage />} />
        <Route path="/tours/india/kerala" element={<KeralaPage />} />
        <Route path="/tours/india/kashmir" element={<KashmirPage />} />
        <Route path="/tours/india/goa" element={<GoaPage />} />
        <Route path="/tours/india/himachal" element={<HimachalPage />} />
        <Route path="/tours/india/tamil" element={<TamilNaduPage />} />
        <Route path="/tours/india/andhra" element={<AndhraPage />} />
        <Route path="/tours/india/karnataka" element={<KarnatakaPage />} />
        <Route path="/tours/india/maharashtra" element={<MaharashtraPage />} />
        <Route path="/tours/india/sikkim" element={<SikkimPage />} />
        <Route path="/tours/india/north" element={<NorthEastPage />} />
        <Route path="/tours/india/uttarakhand" element={<UttarakhandPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langDropdown, setLangDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollToSection = (e, targetId) => {
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
  {
  name: 'India Tours',
  link: '#',
  submenu: [
    { name: 'Andaman Island - Emerald. Blue And You', path: '/tours/india/andaman' },
    { name: 'Andhra Pradesh & Telangana', path: '/tours/india/andhra-pradesh' },
    { name: 'Enchanting Tamil Nadu', path: '/tours/india/tamil-nadu' },
    { name: 'Goa - A Perfect Holiday Destination', path: '/tours/india/goa' },
    { name: 'Himachal Pradesh - The Land Of Gods', path: '/tours/india/himachal' },
    { name: 'Karnataka - One State, Many Worlds', path: '/tours/india/karnataka' },
    { name: 'Kashmir - The Earth Heaven', path: '/tours/india/kashmir' },
    { name: 'Kerala - God\'s Own Country', path: '/tours/india/kerala' },
    { name: 'Maharashtra - Unlimited', path: '/tours/india/maharashtra' },
    { name: 'North East Package', path: '/tours/india/north-east' },
    { name: 'Sikkim - Small But Beautiful', path: '/tours/india/sikkim' },
    { name: 'Uttarakhand - Simply Heaven', path: '/tours/india/uttarakhand' }
  ]
},
    {
      name: 'International',
      link: '#',
      submenu: [
        { name: 'AUSTRALIA', path: '/tours/australia' },
        { name: "EUROPE - Whenever You're Ready", path: '/tours/europe' },
        { name: 'MALDIVES - The Sunny Side of Life', path: '/tours/maldives' },
        { name: 'SOUTH AFRICA - Inspiring New Ways', path: '/tours/south-africa' },
        { name: 'Visit DUBAI', path: '/tours/dubai' }
      ]
    },
    { name: 'Blog', link: '/blog' },
    { name: 'Car Rentals', link: 'https://express-travel-fxaf.onrender.com', isExternal: true },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' }
  ];

  const languages = ['English', 'Hindi', 'Tamil', 'French', 'German', 'Spanish', 'Arabic'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans">
      
      {/* BRANDING BAR */}
      <div className={`bg-white px-4 md:px-8 shadow-sm transition-all duration-500 overflow-visible ${
          isScrolled ? 'max-h-0 opacity-0 invisible py-0' : 'max-h-[150px] py-4 opacity-100 visible'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 shrink-0 cursor-pointer">
            <img src="/LOGO.jpg" alt="Logo" className="h-12 md:h-16 w-auto object-contain" />
            <div className="flex flex-col border-l-2 border-blue-900 pl-3">
              <span className="text-[18px] md:text-[24px] font-black tracking-tighter text-blue-900 leading-none">EXPRESS TRAVEL</span>
              <span className="text-[9px] md:text-[12px] font-bold text-blue-600 uppercase mt-1">Corporate Services LLP</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-center gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 flex items-center gap-2 shadow-md transition-all">
                <CreditCard size={14} />
                <span className="text-[10px] font-black uppercase tracking-wider">Make Payment Online</span>
              </button>

              <div className="relative" ref={langRef}>
                <button onClick={() => setLangDropdown(!langDropdown)}
                  className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest bg-blue-50 px-3 py-1 border border-blue-100">
                  <Globe size={12} /> 
                  <span>Select Language</span>
                  <ChevronDown size={10} className={`transition-transform ${langDropdown ? 'rotate-180' : ''}`} />
                </button>
                {langDropdown && (
                  <div className="absolute top-full right-0 w-48 bg-white shadow-2xl border border-gray-100 z-[100] mt-1">
                    <ul className="max-h-60 overflow-y-auto py-1 custom-scrollbar">
                      {languages.map((lang, idx) => (
                        <li key={idx} onClick={() => setLangDropdown(false)}
                          className="px-4 py-2.5 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white border-b border-gray-50 last:border-0 cursor-pointer uppercase transition-colors">
                          {lang}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end border-l pl-6 border-gray-100">
              <span className="text-[20px] font-black text-blue-900 leading-none uppercase tracking-tight">
                Incredible <span className="text-blue-600">!</span>ndia
              </span>
              <p className="text-[9px] font-bold text-gray-500 uppercase mt-1 text-right leading-tight">
                Recognized by Ministry of Tourism<br/>Govt. of India
              </p>
            </div>

            {/* HAMBURGER BUTTON */}
            <button className="xl:hidden p-2 text-blue-900" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <div className={`hidden xl:flex justify-center px-4 transition-all duration-300 ${isScrolled ? 'mt-4' : 'mt-2'}`}>
        <div className="bg-white shadow-xl border border-gray-100 flex items-center h-12 max-w-fit px-2">
          <nav className="flex items-center h-full">
            <ul className="flex items-center h-full">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group h-12 flex items-center px-5 border-r border-gray-100 last:border-0"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  
                  {item.isExternal ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-all">
                      {item.name}
                    </a>
                  ) : item.link && item.link.startsWith('#') ? (
                    <a href={item.link} onClick={(e) => handleScrollToSection(e, item.link)} className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-all">
                      {item.name}
                      {item.submenu && <ChevronDown size={14} className="opacity-40" />}
                    </a>
                  ) : (
                    <Link to={item.link || '/'} className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-all">
                      {item.name}
                      {item.submenu && <ChevronDown size={14} className="opacity-40" />}
                    </Link>
                  )}

                  {/* DESKTOP SUBMENU FIX */}
                  {item.submenu && activeDropdown === item.name && (
                    <ul className="absolute top-12 left-0 w-72 bg-white shadow-2xl border-t-4 border-blue-600 py-2 z-[60]">
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          {typeof sub === 'object' ? (
                            <Link to={sub.path} className="block px-6 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-blue-50 border-b border-gray-50 last:border-0 uppercase transition-colors">
                              {sub.name}
                            </Link>
                          ) : (
                            <span className="block px-6 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-blue-50 border-b border-gray-50 last:border-0 uppercase cursor-pointer">
                              {sub}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white w-full h-full flex flex-col p-6 overflow-y-auto xl:hidden">
          <div className="flex justify-between items-center mb-10">
            <img src="/LOGO.jpg" alt="Logo" className="h-10 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-blue-900">
              <X size={35} />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {menuItems.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-3">
                <div className="flex justify-between items-center">
                  <Link 
                    to={item.link !== '#' ? item.link : ''} 
                    onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                    className="text-lg font-black text-blue-900 uppercase tracking-tight"
                  >
                    {item.name}
                  </Link>
                </div>
                {item.submenu && (
                  <div className="mt-3 flex flex-col gap-2 pl-4 border-l-2 border-blue-600">
                    {item.submenu.map((sub, i) => (
                      <Link 
                        key={i} 
                        to={typeof sub === 'object' ? sub.path : '#'} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[11px] font-bold text-gray-500 uppercase py-1"
                      >
                        {typeof sub === 'object' ? sub.name : sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2563eb; }
      `}</style>
    </header>
  );
};

export default Header;