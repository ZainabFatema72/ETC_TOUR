import React from 'react';
import Header from './components/Header';
import Tour from './components/Tour';
import Herosection from './components/Herosection';
import Footer from './components/Footer';
import Destination from './components/About'; 
import About from './components/About';
import Fleet from './components/Fleet';
import HHerosection from './components/HHerosection';
import Holiday from './components/Holiday';
function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
     <Header />
      <main>
        <HHerosection/>
        <Herosection/>
        <About/>
        <Tour/>
        <Holiday/>
        <Fleet/>
       </main>
      <Footer />
    </div>
  );
}

export default App;

