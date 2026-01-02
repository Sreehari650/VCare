import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import FAQPage from './pages/FAQPage';
import { BookingProvider } from './contexts/BookingContext';
import BookingModal from './components/shared/BookingModal';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display">
          <Header />
          <main className="flex-1 flex flex-col">
            <AnimatedRoutes />
          </main>
          <Footer />
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
};

export default App;