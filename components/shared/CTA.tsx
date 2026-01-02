import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
  iconBgColor?: string;
}

// Workaround for framer-motion type issues
const M = motion as any;

const CTA: React.FC<CTAProps> = ({ 
  title = "Ready to prioritize your mental health?",
  subtitle = "Book a consultation today and take the first step towards a clearer, calmer mind.",
  buttonText = "Book Appointment",
}) => {
  const { openModal } = useBooking();

  return (
    <div className="w-full py-20 px-4 bg-light dark:bg-dark">
      <M.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-r from-primary to-accent p-10 md:p-20 text-center flex flex-col gap-8 items-center relative overflow-hidden shadow-glow"
      >
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-2 shadow-lg border border-white/30">
            <span className="material-symbols-outlined text-4xl">calendar_month</span>
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-display font-bold leading-tight max-w-4xl">
            {title}
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium">
            {subtitle}
          </p>
          <M.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="mt-6 flex min-w-[200px] cursor-pointer items-center justify-center rounded-2xl h-16 px-10 bg-white text-primary hover:bg-secondary hover:text-black transition-all text-lg font-bold shadow-neo hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px]"
          >
            {buttonText}
          </M.button>
        </div>
      </M.div>
    </div>
  );
};

export default CTA;