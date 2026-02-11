import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About Us', link: '/about' },
    {
      name: 'India Tours',
      submenu: [
        'Andaman Island', 'Andhra Pradesh & Telangana', 'Enchanting Tamil Nadu',
        'Goa', 'Himachal Pradesh', 'Karnataka', 'Kashmir', 'Kerala',
        'Maharashtra', 'North East Package', 'Sikkim', 'Uttarakhand'
      ]
    },
    {
      name: 'International Tours',
      submenu: ['Australia', 'Europe', 'Maldives', 'South Africa', 'Visit Dubai']
    },
    { name: 'Blog', link: '/blog' },
    // External link mark kiya hai
    { name: 'Car Rentals', link: 'https://express-travel-fxaf.onrender.com', isExternal: true },
    { name: 'Services', link: '/services' },
    { name: 'Contact Us', link: '#contact-us' }
  ];

  const handleScroll = (e, targetId) => {
    if (targetId?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans bg-white shadow-md border-b border-gray-100">
      <div className="w-full flex items-center justify-between px-8 py-5">
        
        {/* LEFT: MAIN LOGO */}
        <div className="flex items-center gap-2 shrink-0 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src="/LOGO.jpg" alt="ETC Logo" className="h-12 md:h-14 w-auto object-contain" />
          <div className="flex flex-col justify-center border-l-2 border-blue-900 pl-4">
            <span className="text-[16px] md:text-[18px] font-black text-blue-900 leading-none tracking-tight">EXPRESS TRAVEL</span>
            <span className="text-[11px] md:text-[12px] font-bold text-blue-600 leading-none mt-1 uppercase">CORPORATE SERVICES LLP</span>
          </div>
        </div>

        {/* CENTER: NAVIGATION */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-6 text-[12px] font-extrabold uppercase tracking-wider text-slate-800">
            {menuItems.map((item, index) => (
              <li 
                key={index} 
                className="relative group py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* External aur Internal link logic */}
                {item.isExternal ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.link} 
                    onClick={(e) => handleScroll(e, item.link)}
                    className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="w-3.5 h-3.5 opacity-40 group-hover:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                )}

                {item.submenu && activeDropdown === item.name && (
                  <ul className="absolute left-0 mt-4 w-64 bg-white shadow-2xl border-t-4 border-blue-600 py-3 z-[60]">
                    {item.submenu.map((sub, i) => (
                      <li key={i} className="px-6 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 last:border-0 transition-all">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: INCREDIBLE INDIA TYPOGRAPHY LOGO */}
        <div className="hidden lg:flex items-center">
          <div className="flex flex-col items-center border-l-2 border-blue-100 pl-6">
            <div className="flex flex-col items-center mb-1">
              <span className="text-[20px] font-serif font-bold text-blue-900 leading-none tracking-tighter">
                Incredible <span className="text-blue-600">!</span>ndia
              </span>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-extrabold text-blue-900 uppercase tracking-tighter leading-none">
                Recognized by Ministry of Tourism
              </p>
              <p className="text-[9px] font-bold text-blue-600 uppercase tracking-tight mt-1">
                Government of India
              </p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;