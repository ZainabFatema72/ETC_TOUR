import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, Globe, Send, X, CreditCard, ChevronRight } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langDropdown, setLangDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1280) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(false); 
      }
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

  // Naya Function: Jab bhi koi Link click ho, top par scroll kare
  const handleLinkClick = (link) => {
    setIsMobileMenuOpen(false); // Mobile menu band kare
    if (link && !link.startsWith('#')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileSubmenu = (itemName) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === itemName ? null : itemName);
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
     { name: 'AUSTRALIA', path: '/tours/australia-wonders' },
     { name: "EUROPE - Greece & Turkey", path: "/tours/europe-greece-turkey"},  
       
    { name: 'MALDIVES - The Sunny Side of Life', path: '/tours/maldives' },
    
        { name: 'SOUTH AFRICA - Inspiring New Ways', path: '/tours/south-africa' },
        { name: 'Visit DUBAI', path: '/tours/dubai' }
      ]
    },
    { name: 'Blog', link: '/blog' },
    // UPDATE: target="_blank" is used for the external car rental link
    { name: 'Car Rentals', link: 'https://express-travel-fxaf.onrender.com', isExternal: true },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' }
  ];

  const languages = ['English', 'Hindi', 'Tamil', 'French', 'German', 'Spanish', 'Arabic'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans">
      
      {/* LAYER 1: BRANDING BAR */}
      <div 
        className={`bg-white px-2 md:px-8 shadow-sm transition-all duration-500 overflow-visible pointer-events-auto ${
          isScrolled 
            ? 'xl:max-h-0 xl:opacity-0 xl:invisible xl:py-0' 
            : 'max-h-[200px] py-2 md:py-4 opacity-100 visible'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-1 md:gap-4">
          
          <Link to="/" className="flex items-center gap-1 md:gap-4 shrink-0 min-w-0 cursor-pointer">
            <img src="/LOGO.jpg" alt="Logo" className="h-8 md:h-16 w-auto object-contain flex-shrink-0" />
            <div className="flex flex-col border-l-2 border-blue-900 pl-1.5 md:pl-3 overflow-hidden">
              <span className="text-[11px] md:text-[24px] font-black tracking-tighter text-blue-900 leading-none uppercase truncate">Express Travel</span>
              <span className="text-[6px] md:text-[12px] font-bold text-blue-600 uppercase mt-0.5 md:mt-1 truncate">Corporate Services LLP</span>
            </div>
          </Link>

          <div className="flex items-center gap-1 md:gap-6 shrink-0">
            <div className="flex items-center gap-1 md:gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-10 md:w-20 md:h-14 flex flex-col items-center justify-center shadow-sm md:shadow-md transition-all rounded-sm group flex-shrink-0">
                <CreditCard size={12} className="md:size-5" />
                <span className="text-[5px] md:text-[8px] font-black uppercase text-center leading-tight mt-0.5 md:mt-1">Pay Online</span>
              </button>

              <div className="relative flex-shrink-0" ref={langRef}>
                <button 
                  onClick={() => setLangDropdown(!langDropdown)}
                  className={`flex flex-col items-center justify-center w-12 h-10 md:w-20 md:h-14 transition-all rounded-sm border ${
                    langDropdown ? 'bg-blue-600 text-white border-blue-600' : 'text-blue-600 border-blue-100 bg-blue-50 hover:bg-blue-100'
                  }`}
                >
                  <Globe size={12} className="md:size-5" /> 
                  <div className="flex items-center gap-0.5 md:gap-1 mt-0.5 md:mt-1">
                    <span className="text-[5px] md:text-[8px] font-black uppercase text-center leading-tight">Language</span>
                    <ChevronDown size={7} className={`transition-transform md:size-2 ${langDropdown ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                {langDropdown && (
                  <div className="absolute top-[105%] right-0 w-32 md:w-48 bg-white shadow-2xl border border-gray-100 z-[100] mt-1 animate-in fade-in duration-200">
                    <div className="bg-blue-600 h-1 w-full"></div>
                    <ul className="max-h-60 overflow-y-auto py-1 custom-scrollbar">
                      {languages.map((lang, idx) => (
                        <li key={idx} onClick={() => setLangDropdown(false)} className="px-3 md:px-4 py-2 text-[9px] md:text-[11px] font-bold text-gray-700 hover:bg-blue-600 hover:text-white border-b border-gray-50 last:border-0 cursor-pointer uppercase transition-colors">
                          {lang}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden xl:flex flex-col items-end border-l pl-6 border-gray-100">
              <span className="text-[20px] font-black text-blue-900 leading-none uppercase tracking-tight">
                Incredible <span className="text-blue-600">!</span>ndia
              </span>
              <p className="text-[9px] font-bold text-gray-500 uppercase mt-1 text-right leading-tight">
                Recognized by Ministry of Tourism<br/>Govt. of India
              </p>
            </div>

            <button className="xl:hidden p-1 text-blue-900 flex-shrink-0" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} className="md:size-8" />
            </button>
          </div>
        </div>
      </div>

      {/* LAYER 2: DESKTOP NAVBAR */}
      <div className={`hidden xl:flex justify-center px-4 transition-all duration-300 ${isScrolled ? 'mt-4' : 'mt-2'}`}>
        <div className="bg-white shadow-xl border border-gray-100 flex items-center h-12 max-w-fit px-2 pointer-events-auto">
          <nav className="flex items-center h-full">
            <ul className="flex items-center h-full">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group h-12 flex items-center px-5 border-r border-gray-100 last:border-0" onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  {/* UPDATE: External links now open in a new tab */}
                  {item.isExternal ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-all">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.link && !item.link.startsWith('#') ? item.link : '#'} 
                      onClick={(e) => {
                        if (item.link && item.link.startsWith('#')) {
                          handleScrollToSection(e, item.link);
                        } else {
                          handleLinkClick(item.link);
                        }
                      }} 
                      className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-all"
                    >
                      {item.name}
                      {item.submenu && <ChevronDown size={14} className="opacity-40" />}
                    </Link>
                  )}
                  {item.submenu && activeDropdown === item.name && (
                    <ul className="absolute top-12 left-0 w-72 bg-white shadow-2xl border-t-4 border-blue-600 py-2 z-[60]">
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link 
                            to={sub.path} 
                            onClick={() => handleLinkClick(sub.path)}
                            className="block px-6 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-blue-50 border-b border-gray-50 last:border-0 uppercase transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="h-12 flex items-center px-4 bg-gray-50 border-l border-gray-100">
                <Link to="/enquiry" onClick={() => handleLinkClick('/enquiry')}>
                  <button className="bg-blue-600 text-white py-2 px-5 text-[10px] font-black uppercase flex items-center gap-2 hover:bg-blue-800 transition-all">
                    <Send size={12} /> Enquiry
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white w-full h-full flex flex-col p-6 overflow-y-auto xl:hidden animate-in fade-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-8">
            <img src="/LOGO.jpg" alt="Logo" className="h-10 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-blue-900 bg-blue-50 p-2 rounded-full">
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex flex-col border-b border-gray-50">
                <div className="flex justify-between items-center py-4">
                  {item.submenu ? (
                    <button onClick={() => toggleMobileSubmenu(item.name)} className="flex justify-between items-center w-full text-left">
                      <span className={`text-[15px] font-black uppercase tracking-tight ${mobileSubmenuOpen === item.name ? 'text-blue-600' : 'text-blue-900'}`}>
                        {item.name}
                      </span>
                      <ChevronRight size={20} className={`text-blue-600 transition-transform duration-300 ${mobileSubmenuOpen === item.name ? 'rotate-90' : ''}`} />
                    </button>
                  ) : (
                    /* UPDATE: External links in mobile menu also open in a new tab */
                    <a 
                      href={item.link} 
                      target={item.isExternal ? "_blank" : "_self"} 
                      rel="noopener noreferrer" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-[15px] font-black text-blue-900 uppercase tracking-tight w-full"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
                {item.submenu && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSubmenuOpen === item.name ? 'max-h-[1000px] mb-4' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-1 pl-4 border-l-2 border-blue-600 bg-blue-50/30 rounded-r-md py-2">
                      {item.submenu.map((sub, i) => (
                        <Link key={i} to={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] font-bold text-gray-500 uppercase py-2.5 px-2 hover:text-blue-600">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-10">
             <button className="w-full bg-blue-600 text-white py-4 rounded-md flex items-center justify-center gap-3 font-bold uppercase text-xs shadow-lg">
                <CreditCard size={18} /> Make Payment Online
             </button>
          </div>
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