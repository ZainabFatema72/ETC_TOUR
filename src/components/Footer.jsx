import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [activeBranch, setActiveBranch] = useState(0);

  const branches = [
    { city: 'NEW DELHI', addr: 'F-11/12, Triveni Complex, Sheikh Sarai, Phase-1 - 110017' },
    { city: 'BHOPAL', addr: 'Flat Number F-05, Shri Ram Complex, Shri Ram Colony, Hoshangabad Road, Bhopal - 462026'},
    { city: 'INDORE', addr: ' Plot No. 54, Scheme No. 94, Ring Road Near Bombay Hospital, Indore - 452010' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBranch((prev) => (prev + 1) % branches.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [branches.length]);

  const styles = `
    .footer-wrapper {
      background-color: #111827;
      color: #ffffff;
      font-family: 'Inter', sans-serif;
      padding: 40px 0 0 0;
      border-top: 1px solid #1f2937;
    }

    .footer-grid {
      max-width: 1550px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.4fr 1.1fr 0.8fr 1.6fr 1fr;
      gap: 40px;
      padding: 0 60px 60px 60px;
      align-items: start;
    }

    .footer-column { display: flex; flex-direction: column; }

    .logo-wrapper {
      height: 75px; 
      margin-bottom: 25px;
      display: flex;
      align-items: center;
    }

    .brand-spacer { height: 75px; margin-bottom: 25px; }

    .branch-heading-btn {
      display: inline-block;
      background-color: #3b82f6;
      color: white !important;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 10px 18px;
      border-radius: 4px;
      text-decoration: none;
      margin-bottom: 25px;
      width: fit-content;
      transition: 0.3s;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
    }

    .column-title {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 25px;
      position: relative;
    }

    .column-title::after {
      content: "";
      position: absolute;
      left: 0; bottom: -8px;
      width: 25px; height: 2px;
      background-color: #3b82f6;
    }

    .carousel-container {
      position: relative;
      height: 100px;
      overflow: hidden;
      width: 100%;
    }

    .branch-slide {
      position: absolute;
      top: 0; left: 0; width: 100%;
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.6s ease-in-out;
      visibility: hidden;
    }

    .branch-slide.active { opacity: 1; transform: translateY(0); visibility: visible; }

    .contact-item-box { display: flex; flex-direction: column; gap: 12px; }

    /* Fix: Contact row alignment */
    .contact-row { 
      display: flex; 
      align-items: flex-start; 
      gap: 8px; 
      width: 100%;
    }

    .contact-label { color: #60a5fa; font-weight: 800; min-width: 85px; font-size: 12.5px; }

    .contact-data { color: #f1f5f9; font-size: 13px; flex: 1; }

    /* Fix: Email specifically for mobile */
    .email-text {
      color: #3b82f6;
      font-weight: bold;
      font-size: 13px;
      word-break: break-all;
      display: inline-block;
    }

    .social-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }

    .social-item {
      background-color: #1f2937;
      width: 38px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #374151;
      transition: 0.3s;
      text-decoration: none;
    }

    .social-item:hover {
      background-color: #3b82f6;
      border-color: #3b82f6;
      transform: translateY(-3px);
    }

    .bottom-bar {
      background-color: #0b0f1a;
      padding: 20px 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #1f2937;
    }

    @media (max-width: 1200px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 768px) {
      .footer-grid { 
        grid-template-columns: 1fr; 
        padding: 0 30px 40px 30px; 
        text-align: center;
        gap: 35px;
      }
      .footer-column { align-items: center; }
      .brand-spacer, .logo-wrapper { height: auto; margin-bottom: 20px; }
      .column-title::after { left: 50%; transform: translateX(-50%); }
      
      /* Center all rows on mobile */
      .contact-row { 
        justify-content: center; 
        text-align: left; 
        max-width: 320px; 
        margin: 0 auto; 
      }
      
      .social-flex { justify-content: center; }
      .bottom-bar { flex-direction: column; gap: 20px; text-align: center; }
      
      .carousel-container { height: auto; min-height: 120px; }
      .address-wrap { display: block; max-width: 100%; word-wrap: break-word; }
      
      /* Email mobile adjustment */
      .email-text {
        word-break: break-word; /* Better for reading on phones */
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <footer className="footer-wrapper">
        <div className="footer-grid">
          
          {/* Identity */}
          <div className="footer-column">
            <div className="logo-wrapper">
              <img src="/logo footer2.jpg" alt="Express Travel Logo" style={{ height: '75px', filter: 'brightness(1.2)', objectFit: 'contain' }} />
            </div>
            <h3 className="column-title">Head Office</h3>
            <div style={{ marginBottom: '10px' }}>
              <b style={{ color: '#fff', fontSize: '13px' }}>EXPRESS TRAVEL CORPORATE SERVICES LLP</b><br />
              <span className="address-wrap" style={{ color: '#94a3b8', fontSize: '12.5px', lineHeight: '1.6' }}>
                New No.21, (Old No.12), New Tank Street,<br />
                Nungambakkam, Chennai – 600 034.<br />
                Tamilnadu, INDIA.
              </span>
            </div>
          </div>

          {/* Branches Carousel */}
          <div className="footer-column">
            <div className="brand-spacer"></div>
            <a href="#contact-us" className="branch-heading-btn">Our Branches</a>
            <div className="carousel-container">
              {branches.map((branch, index) => (
                <div key={index} className={`branch-slide ${index === activeBranch ? 'active' : ''}`}>
                  <span style={{ color: '#fff', fontWeight: '800', fontSize: '12px' }}>{branch.city}</span><br/>
                  <span className="address-wrap" style={{ color: '#94a3b8', fontSize: '11.5px', lineHeight: '1.5' }}>
                    {branch.addr}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
              {branches.map((_, i) => (
                <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: i === activeBranch ? '#3b82f6' : '#374151' }} />
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="footer-column">
            <div className="brand-spacer"></div>
            <h3 className="column-title">Information</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{marginBottom: '10px'}}><a href="/about" style={{fontSize: '13px', color: '#f1f5f9', textDecoration: 'none'}}>› ABOUT US</a></li>
              <li style={{marginBottom: '10px'}}><a href="/services" style={{fontSize: '13px', color: '#f1f5f9', textDecoration: 'none'}}>› SERVICES</a></li>
              <li style={{marginBottom: '10px'}}><a href="/contact" style={{fontSize: '13px', color: '#f1f5f9', textDecoration: 'none'}}>› CONTACT US</a></li>
            </ul>
          </div>

          {/* Contact Us - ALIGNMENT FIXED */}
          <div className="footer-column" id="contact-us">
            <div className="brand-spacer"></div>
            <h3 className="column-title">Contact Us</h3>
            <div className="contact-item-box">
              <div className="contact-row">
                <span className="contact-label">Phone:</span>
                <span className="contact-data">+91-44-2827 2279</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Tours:</span>
                <span className="contact-data">Mr. Mohan (+91 97910 07710)</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Transport:</span>
                <span className="contact-data">Mr. Suresh (+91 98408 87777)</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Email:</span>
                <span className="contact-data">
                    <span className="email-text">enquiry@expresstravelcorp.com</span>
                </span>
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div className="footer-column">
            <div className="brand-spacer"></div>
            <h3 className="column-title">Connect</h3>
            <div className="social-flex">
              <a href="https://www.facebook.com/touroperatorsinchennai/" target="_blank" rel="noreferrer" className="social-item">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.21c0-.837.398-1.29 1.144-1.29h2.856v-4.21h-3.856c-3.103 0-5.144 1.822-5.144 4.997v2.713z"/></svg>
              </a>
              <a href="https://workspaceupdates.googleblog.com" target="_blank" rel="noreferrer" className="social-item">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61z"/></svg>
              </a>
              <a href="#" className="social-item">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#" className="social-item">
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <p style={{ fontSize: '10px', marginTop: '10px', color: '#60a5fa', fontWeight: '900', letterSpacing: '2px' }}>
               EXCELLENCE SINCE 1999
            </p>
          </div>

        </div>

        <div className="bottom-bar">
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>
            Copyright © 2026. EXPRESS TRAVEL CORPORATE SERVICES LLP. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '10px', color: '#475569', fontWeight: '700' }}>POWERED BY</span>
            <a href="https://royalswebtechpvtltd.com/" target="_blank" rel="noreferrer">
              <img src='/rwtlogo.png' alt="Powered By" style={{ height: '32px', filter: 'brightness(1.1)' }} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;