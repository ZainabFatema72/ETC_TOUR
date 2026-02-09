import React, { useState } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'Home', link: '/' },
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
    { name: 'Car Rentals', link: '/cars' },
    { name: 'Services', link: '/services' },
    { name: 'Contact Us', link: '/contact' }
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 font-sans">
      
      <div className="container mx-auto bg-white shadow-2xl rounded-b-[35px] flex items-center justify-between px-8 py-4 border-b border-gray-100">
        
        {/* LOGO */}
        <div className="flex flex-col">
          <img src="/LOGO.jpg" alt="ETC Logo" className="h-10 md:h-12 w-auto object-contain" />
          <span className="text-[13px] md:text-[15px] font-bold text-blue-800 tracking-tighter">
            EXPRESS TRAVEL CORPORATE SERVICES LLP
          </span>
        </div>

        {/* NAVIGATION MENU */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-5 text-[15px] font-extrabold uppercase tracking-tighter text-[#002349]">
            {menuItems.map((item, index) => (
              <li 
                key={index} 
                className="relative group py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-blue-600 transition">
                  {item.name}
                  {item.submenu && (
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  )}
                </div>

                {/* DROPDOWN MENU */}
                {item.submenu && activeDropdown === item.name && (
                  <ul className="absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg py-3 border-t-4 border-blue-600 animate-fadeIn">
                    {item.submenu.map((sub, i) => (
                      <li key={i} className="px-4 py-2 text-[15px] text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-50 last:border-0">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ENQUIRE NOW BUTTON */}
        <div className="flex items-center gap-4">
          <button className="bg-[#1e4e8c] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-blue-900 transition-all">
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;