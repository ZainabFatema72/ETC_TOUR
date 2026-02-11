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
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;