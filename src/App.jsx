import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';

// Page imports - Note: Renamed 'surround sound' folder to 'surround-sound' for best practices
import Printer from './pages/printer/Printer';
import Door from './pages/door/Door';
import Forcourt from './pages/forcourt/Forcourt';
import Ipbx from './pages/ipbx/Ipbx';
import Solar from './pages/solar/Solar';
import Surround from './pages/surround sound/Surround';
import Water from './pages/water/Water';

import './App.css';
import Cctv from './pages/cctv/Cctv';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Main content - grows to fill available space */}
        <main className="flex-grow">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Landing />} />

            {/* Product/Service routes */}
            <Route path="/printer" element={<Printer />} />
            <Route path="/door" element={<Door />} />
            <Route path="/forcourt" element={<Forcourt />} />
            <Route path="/ipbx" element={<Ipbx />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/surround" element={<Surround />} />
            <Route path="/water" element={<Water />} />
            <Route path="/cctv" element={<Cctv />} />

            {/* Fallback route - optional (404 page) */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}