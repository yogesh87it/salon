import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Stylists from './pages/Stylists';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-ivory">
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <PageWrapper>
                  <Home onOpenBooking={() => setIsBookingOpen(true)} />
                </PageWrapper>
              } 
            />
            <Route 
              path="/services" 
              element={
                <PageWrapper>
                  <Services />
                </PageWrapper>
              } 
            />
            <Route 
              path="/stylists" 
              element={
                <PageWrapper>
                  <Stylists />
                </PageWrapper>
              } 
            />
            <Route 
              path="/gallery" 
              element={
                <PageWrapper>
                  <Gallery />
                </PageWrapper>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              } 
            />
          </Routes>
        </AnimatePresence>

        <Footer />

        <AnimatePresence>
          {isBookingOpen && (
            <BookingModal 
              isOpen={isBookingOpen} 
              onClose={() => setIsBookingOpen(false)} 
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
