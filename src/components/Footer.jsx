import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#002349] text-white pt-16 pb-8 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="bg-white p-2 inline-block mb-6">
            <img src="/LOGO.jpg" alt="ETC Logo" className="h-10" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Established on 31 January 2008, we never compromise on personalized service and attention to detail.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-[#0033CC] pl-3">QUICK LINKS</h4>
          <ul className="text-gray-400 space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">India Tours</li>
            <li className="hover:text-white cursor-pointer">International Tours</li>
            <li className="hover:text-white cursor-pointer">Car Rentals</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-bold text-lg mb-6 border-l-4 border-[#0033CC] pl-3">OUR BRANCHES</h4>
          <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
            <div>
              <p className="text-white font-bold mb-1 uppercase tracking-wider text-[10px]">Head Office</p>
              <p>Nungambakkam, Chennai</p>
            </div>
            <div>
              <p className="text-white font-bold mb-1 uppercase tracking-wider text-[10px]">New Delhi</p>
              <p>Sheikh Sarai, Phase-1</p>
            </div>
            <div>
              <p className="text-white font-bold mb-1 uppercase tracking-wider text-[10px]">Bhopal</p>
              <p>Hoshangabad Road</p>
            </div>
            <div>
              <p className="text-white font-bold mb-1 uppercase tracking-wider text-[10px]">Indore</p>
              <p>Ring Road, Scheme No. 94</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-xs">
        © 2026 EXPRESS TRAVEL CORPORATE SERVICES LLP. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;