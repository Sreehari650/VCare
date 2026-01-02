import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../contexts/BookingContext';

// Workaround for framer-motion type issues
const M = motion as any;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useBooking();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-primary font-bold bg-primary/10 rounded-full px-4 py-1" 
      : "text-text-main dark:text-gray-200 hover:text-primary font-medium px-4 py-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all";
  };

  return (
    <M.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
    >
      <div className="glass-panel w-full max-w-5xl rounded-full shadow-lg pointer-events-auto transition-all duration-300">
        <div className="px-4 md:px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="h-10 md:h-12 w-auto flex items-center justify-center">
              <img 
                src="https://drive.google.com/thumbnail?id=1htZ5WjWfk1ifI8WbPOI7gCIAjhtwJ_he&sz=w500" 
                alt="VCare Logo" 
                className="h-full w-auto object-contain" 
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-2 items-center">
            <div className="flex items-center gap-1 mr-4">
              <Link to="/" className={`text-sm tracking-tight ${isActive('/')}`}>Home</Link>
              <Link to="/services" className={`text-sm tracking-tight ${isActive('/services')}`}>Services</Link>
              <Link to="/team" className={`text-sm tracking-tight ${isActive('/team')}`}>Team</Link>
              <Link to="/faq" className={`text-sm tracking-tight ${isActive('/faq')}`}>FAQ</Link>
            </div>
            <M.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(124, 58, 237, 0.7)",
                  "0 0 0 10px rgba(124, 58, 237, 0)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={openModal}
              className="flex cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-violet-700 transition-colors text-white text-sm font-bold tracking-wide shadow-glow"
            >
              Book Now
            </M.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-text-main dark:text-white flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer">
              <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <M.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-card-dark rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 pointer-events-auto"
          >
            <div className="p-6 flex flex-col gap-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-text-main dark:text-white">Home</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-text-main dark:text-white">Services</Link>
              <Link to="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-text-main dark:text-white">Team</Link>
              <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-text-main dark:text-white">FAQ</Link>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg mt-2"
              >
                Book Consultation
              </button>
            </div>
          </M.div>
        )}
      </AnimatePresence>
    </M.header>
  );
};

export default Header;