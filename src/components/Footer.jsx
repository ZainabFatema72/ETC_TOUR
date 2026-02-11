import React from 'react';

const Footer = () => {
  const styles = `
    .footer-wrapper {
      background-color: #111827;
      color: #ffffff;
      font-family: 'Inter', sans-serif;
      padding: 30px 0 0 0;
      border-top: 1px solid #1f2937;
    }
    .footer-grid {
      max-width: 1250px; /* Reduced max-width to bring columns closer */
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.4fr 0.8fr 1.3fr 0.9fr; /* Tightened column ratios */
      gap: 30px; /* Balanced gap for a clean look */
      padding: 0 40px 30px 40px;
      align-items: start;
    }
    .footer-column.align-content { margin-top: 85px; } 
    
    .column-title {
      font-size: 14px;
      font-weight: 800;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 18px;
      position: relative;
    }
    .column-title::after {
      content: "";
      position: absolute;
      left: 0; bottom: -6px;
      width: 25px; height: 2px;
      background-color: #3b82f6;
    }

    .footer-list { list-style: none; padding: 0; margin: 0; }
    .footer-list li {
      font-size: 13.5px;
      line-height: 1.4;
      color: #cbd5e1;
      margin-bottom: 6px;
    }
    .footer-list a { color: #cbd5e1; text-decoration: none; transition: 0.3s; }
    .footer-list a:hover { color: #3b82f6; }

    .contact-compact-block { display: flex; flex-direction: column; gap: 2px; margin-top: 5px; } 
    .contact-item { font-size: 12.5px; display: flex; gap: 5px; margin-bottom: 1px; }

    /* Blinking Button for Branches */
    @keyframes blink-animation {
      0% { opacity: 1; transform: scale(1); box-shadow: 0 0 0px #3b82f6; }
      50% { opacity: 0.8; transform: scale(1.03); box-shadow: 0 0 12px #3b82f6; }
      100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0px #3b82f6; }
    }
    .blink-btn {
      display: inline-block;
      background-color: #3b82f6;
      color: white;
      padding: 8px 14px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 900;
      text-transform: uppercase;
      text-decoration: none;
      margin-bottom: 15px;
      animation: blink-animation 2s infinite ease-in-out;
      border: none;
      cursor: pointer;
    }

    .social-btn {
      background: #1e293b;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: 0.3s;
    }
    .social-btn:hover { background: #3b82f6; transform: translateY(-3px); }

    .powered-by-link { display: flex; align-items: center; gap: 8px; text-decoration: none; }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
      .footer-column.align-content { margin-top: 0; }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <footer className="footer-wrapper">
        <div className="footer-grid">
          
          {/* 1. HEAD OFFICE & LOGO */}
          <div className="footer-column">
            <div style={{ marginBottom: '25px' }}>
              <img src="/logo footer2.jpg" alt="Logo" style={{ height: '80px', objectFit: 'contain' }} />
            </div>
            <h3 className="column-title">Head Office</h3>
            <div style={{ fontSize: '13.5px', lineHeight: '1.5', color: '#cbd5e1' }}>
              <b style={{ color: '#fff' }}>EXPRESS TRAVEL CORPORATE SERVICES LLP</b><br />
              New No.21, (Old No.12), New Tank Street,<br />
              Nungambakkam, Chennai – 600 034.<br />
              Tamilnadu, INDIA.
            </div>
          </div>

          {/* 2. INFORMATION */}
          <div className="footer-column align-content">
            <h3 className="column-title">Information</h3>
            <ul className="footer-list">
              <li><a href="/about">› ABOUT US</a></li>
              <li><a href="/services">› SERVICES</a></li>
              <li><a href="/contact">› CONTACT US</a></li>
            </ul>
          </div>

          {/* 3. CONTACT US - FULL DATA RESTORED */}
          <div className="footer-column align-content">
            <h3 className="column-title">Contact Us</h3>
            <ul className="footer-list">
              <li style={{ color: '#fff', fontWeight: '700' }}>
                Phone: <span style={{ color: '#cbd5e1', fontWeight: '400' }}>+91-44-2827 2279 / 4203 7171 / 2822 4413</span>
              </li>
              <li style={{ fontSize: '12.5px', marginTop: '-4px' }}>Tele Fax: +91-44-2823 3152</li>
              
              <li className="contact-compact-block">
                <div className="contact-item">
                  <b style={{ color: '#60a5fa', minWidth: '70px' }}>Tours:</b> 
                  <span>Mr. Mohan (+91 97910 07710)</span>
                </div>
                <div className="contact-item">
                  <b style={{ color: '#60a5fa', minWidth: '70px' }}>Transport:</b> 
                  <span>Mr. Suresh (+91 98408 87777)</span>
                </div>
              </li>
              
              <li style={{ color: '#60a5fa', fontSize: '12.5px', marginTop: '4px', fontWeight: 'bold' }}>
                ✉️ enquiry@expresstravelcorp.com
              </li>
            </ul>
          </div>

          {/* 4. CONNECT & BRANCH BUTTON */}
          <div className="footer-column align-content">
            <a href="/branches" className="blink-btn">Our Branches</a>
            <h3 className="column-title">Connect</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
               <a href="https://www.facebook.com/touroperatorsinchennai/" target="_blank" rel="noreferrer" className="social-btn">
                 <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
               </a>
               <a href="https://workspaceupdates.googleblog.com" target="_blank" rel="noreferrer" className="social-btn">
                 <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm17 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z"/></svg>
               </a>
               <a href="#" className="social-btn">
                 <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
            <p style={{ fontSize: '10px', marginTop: '20px', color: '#60a5fa', fontWeight: '900', letterSpacing: '1px' }}>
              EXCELLENCE SINCE 1999
            </p>
          </div>

        </div>

        {/* BOTTOM BAR - Royals Clickable Logo */}
        <div style={{ background: '#0b0f1a', padding: '12px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1f2937' }}>
          <div style={{ fontSize: '11px', color: '#94a3b8' }}>
            © 2026 EXPRESS TRAVEL. ALL RIGHTS RESERVED.
          </div>
          
          <a href="https://royalswebtechpvtltd.com/" target="_blank" rel="noopener noreferrer" className="powered-by-link">
            <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold' }}>POWERED BY</span>
            <img src='/rwtlogo.png' alt="Royals Webtech" style={{ height: '32px', opacity: 0.8 }} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;