import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Tour from './components/Tour';
import Herosection from './components/Herosection';
import Footer from './components/Footer';
import About from './components/About';
import Fleet from './components/Fleet';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog'; 
import Services from './components/Services';
import ContactUs from './Contact';
//international tour pages
import AustraliaPage from './components/AustraliaPage';
import EuropePage from './components/EuropePage';
import MaldivesPage from './components/MaldivesPage';
import SouthAfricaPage from './components/SouthAfricaPage';
import DubaiPage from './components/DubaiPage';
//demestic tour pages 
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
function App() {
  return (
    <Router>
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
            {/* 2. INTERNATIONAL TOUR ROUTES */}
            
            <Route path="/tours/australia" element={<AustraliaPage />} />
            <Route path="/tours/europe" element={<EuropePage />} />
            <Route path="/tours/maldives" element={<MaldivesPage />} />
            <Route path="/tours/south-africa" element={<SouthAfricaPage />} />
            <Route path="/tours/dubai" element={<DubaiPage />} />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;