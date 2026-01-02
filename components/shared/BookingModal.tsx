import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';

// Workaround for framer-motion type issues
const M = motion as any;

const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useBooking();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <M.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <M.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#1a222c] rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 pb-0">
              <div>
                <h3 className="text-2xl font-display font-bold text-text-main dark:text-white">Let's Connect</h3>
                <p className="text-sm text-text-muted dark:text-gray-400 mt-1">We'll get back to you within 24 hours.</p>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Form */}
            <div className="p-8 flex flex-col gap-5">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-main dark:text-gray-300 uppercase tracking-wider pl-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe"
                  className="w-full h-12 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-background-dark px-4 font-medium focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-card-dark transition-all dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-main dark:text-gray-300 uppercase tracking-wider pl-1">Email</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com"
                  className="w-full h-12 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-background-dark px-4 font-medium focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-card-dark transition-all dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold text-text-main dark:text-gray-300 uppercase tracking-wider pl-1">Service Interest</label>
                 <div className="relative">
                   <select className="w-full h-12 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-background-dark px-4 font-medium focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-card-dark transition-all dark:text-white appearance-none">
                      <option>Individual Therapy</option>
                      <option>Couples Counselling</option>
                      <option>Child & Teen Therapy</option>
                      <option>Psychiatry</option>
                      <option>Other</option>
                   </select>
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                     <span className="material-symbols-outlined">expand_more</span>
                   </div>
                 </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-main dark:text-gray-300 uppercase tracking-wider pl-1">Message</label>
                <textarea 
                  rows={3}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-background-dark p-4 font-medium focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-card-dark transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <button className="mt-4 w-full h-14 bg-primary text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-none hover:translate-y-1 transition-all">
                Submit Request
              </button>
            </div>
          </M.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;