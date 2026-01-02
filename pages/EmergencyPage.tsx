import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';

// Workaround for framer-motion type issues
const M = motion as any;

const EmergencyPage: React.FC = () => {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <div className="pt-32 pb-20 px-4 md:px-10 bg-red-50 dark:bg-red-950/20 flex-1">
        <div className="max-w-4xl mx-auto text-center">
          <M.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="w-24 h-24 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto mb-8 shadow-lg animate-pulse"
          >
             <span className="material-symbols-outlined text-5xl">warning</span>
          </M.div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-red-600 dark:text-red-400 mb-6">
            Emergency Support
          </h1>
          
          <div className="bg-white dark:bg-card-dark p-8 md:p-12 rounded-[2.5rem] shadow-xl border-2 border-red-100 dark:border-red-900 mb-10">
             <p className="text-xl md:text-2xl font-bold mb-4">
               If you or someone you know is in immediate danger, please call emergency services immediately.
             </p>
             <a href="tel:102" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white text-2xl font-bold rounded-2xl hover:bg-red-700 transition-colors shadow-lg">
                <span className="material-symbols-outlined">call</span>
                Call 102 (Ambulance)
             </a>
             <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
               <a href="tel:119" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/10 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                  Police (119)
               </a>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
             <div className="bg-white dark:bg-card-dark p-8 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary">Crisis Hotlines</h3>
                <ul className="space-y-4">
                   <li className="flex justify-between items-center border-b pb-2">
                      <span>Psychological Support</span>
                      <a href="tel:1422" className="font-bold text-primary hover:underline">1422</a>
                   </li>
                   <li className="flex justify-between items-center border-b pb-2">
                      <span>Child Helpline</span>
                      <a href="tel:1412" className="font-bold text-primary hover:underline">1412</a>
                   </li>
                   <li className="flex justify-between items-center pb-2">
                      <span>Domestic Violence</span>
                      <a href="tel:1421" className="font-bold text-primary hover:underline">1421</a>
                   </li>
                </ul>
             </div>
             
             <div className="bg-white dark:bg-card-dark p-8 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-text-main dark:text-white">Hospital Contacts</h3>
                <ul className="space-y-4">
                   <li className="flex justify-between items-center border-b pb-2">
                      <span>IGMH</span>
                      <a href="tel:3335335" className="font-bold hover:text-primary">333 5335</a>
                   </li>
                   <li className="flex justify-between items-center border-b pb-2">
                      <span>ADK Hospital</span>
                      <a href="tel:3313553" className="font-bold hover:text-primary">331 3553</a>
                   </li>
                   <li className="flex justify-between items-center pb-2">
                      <span>Tree Top Hospital</span>
                      <a href="tel:3351610" className="font-bold hover:text-primary">335 1610</a>
                   </li>
                </ul>
             </div>
          </div>
          
          <p className="mt-12 text-text-muted text-sm">
            Disclaimer: VCare is a clinic and does not provide 24/7 emergency services. If you are in a crisis, please utilize the resources above.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default EmergencyPage;