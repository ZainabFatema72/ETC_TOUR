import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Tour from './components/Tour';
import Herosection from './components/Herosection';
import Footer from './components/Footer';
import About from './components/About';
import Fleet from './components/Fleet';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog'; 
import Services from './components/Services';
import ContactUs from './components/Contact';
import PaymentPartners from './components/payment';
import EnquiryPage from './components/enquery'; 
import FloatingControls from './components/FloatingIcons';
//detailpages backend international
import TourItinerary from './components/TourItinerary';
import TourDetails from './components/TourDetails';
//demestic tour pages  nahi cahiye to yeh hata dena
import AndamanPage from './components/AndamanPage';
import KeralaPage from './components/KeralaPage';
import KashmirPage from './components/KashmirPage';
import GoaPage from './components/GoaPage';
import HimachalPage from './components/HimachalPage';
import TamilNaduPage from './components/TamilNaduPage';
import AndhraPage from './components/AndhraPage';
import KarnatakaPage from './components/KarnatakaPage';
import MaharashtraPage from './components/MaharashtraPage';
import SikkimPage from './components/SikkimPage';
import NorthEastPage from './components/NorthEastPage'; 
import UttrakhandPage from './components/UttarakhandPage'; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi pathname (URL) badlega, ye top par bhej dega

  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-800">
        <Header />
        <main>
          <Routes>
            {/* HOME PAGE: Default path "/" aur "/home" dono ke liye same content */}
            <Route path="/" element={
              <>
                <Herosection />
                <About />
                <Tour />
                <Fleet />
              </>
            } />
            
            {/* Home par click karne se wapas upar wala content dikhe iske liye path set karein */}
            <Route path="/home" element={
              <>
                <Herosection />
                <About />
                <Tour />
                <Fleet />
              </>
            } />

            {/* Path ko '/about' rakhein agar Header mein bhi '/about' hai */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/enquiry" element={<EnquiryPage />} />


            <Route path="/tours/:slug" element={<TourDetails />} />   
            <Route path="/tours/:slug/itinerary" element={<TourItinerary />} />
            <Route path="/tours/:slug" element={<TourItinerary />} />

            

            // 3. DOMESTIC TOUR ROUTES
            {/* INDIA TOUR ROUTES */}
        <Route path="/tours/india/andaman" element={<AndamanPage />} />
        <Route path="/tours/india/kerala" element={<KeralaPage />} />
        <Route path="/tours/india/kashmir" element={<KashmirPage />} />
        <Route path="/tours/india/goa" element={<GoaPage />} />
        <Route path="/tours/india/himachal" element={<HimachalPage />} />
        <Route path="/tours/india/tamil-nadu" element={<TamilNaduPage />} />
        <Route path="/tours/india/andhra-pradesh" element={<AndhraPage />} />
         <Route path="/tours/india/karnataka" element={<KarnatakaPage />} />
        <Route path="/tours/india/maharashtra" element={<MaharashtraPage />} />
        <Route path="/tours/india/sikkim" element={<SikkimPage />} />
       <Route path="/tours/india/north-east" element={<NorthEastPage />} />
        <Route path="/tours/india/uttarakhand" element={<UttrakhandPage />} />
          </Routes>
        </main>
        <PaymentPartners />
        <Footer />
        <FloatingControls />
      </div>
    </Router>
  );
}

export default App;