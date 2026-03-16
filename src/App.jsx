import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Standard Components
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

// Pages
import TourItinerary from './components/TourItinerary';
import DomesticListingPage from './components/DomesticListingPage';

// Admin Pages
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

// Scroll to Top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- MAIN CONTENT WRAPPER ---
// Is function ke andar hum check karenge ki Header/Footer dikhana hai ya nahi
function AppContent() {
  const location = useLocation();
  
  // In paths par Header, Footer aur Floating Icons nahi dikhenge
  const isAdminPath = location.pathname.startsWith('/admin') || location.pathname === '/admin-login';

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Agar admin path NAHI hai, tabhi Header dikhao */}
      {!isAdminPath && <Header />}
      
      <main>
        <Routes>
          <Route path="/" element={<><Herosection /><About /><Tour /><Fleet /></>} />
          <Route path="/home" element={<><Herosection /><About /><Tour /><Fleet /></>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/tour/:slug" element={<TourItinerary />} />
          <Route path="/tours/:slug" element={<TourItinerary />} />
          <Route path="/tours/india/:categoryName" element={<DomesticListingPage />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminPanel /> 
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>

      {/* Agar admin path NAHI hai, tabhi Footer aur baki cheezein dikhao */}
      {!isAdminPath && (
        <>
          <PaymentPartners />
          <Footer />
          <FloatingControls />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;