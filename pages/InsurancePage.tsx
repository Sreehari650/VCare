import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import CTA from '../components/shared/CTA';

// Workaround for framer-motion type issues
const M = motion as any;

const InsurancePage: React.FC = () => {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <div className="pt-32 pb-20 px-4 md:px-10 bg-light dark:bg-dark">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-text-main dark:text-white mb-6">
                Insurance & <span className="text-primary">Billing</span>
              </h1>
              <p className="text-xl text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                We believe mental healthcare should be accessible. We work with major providers to minimize your out-of-pocket costs.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-6">Accepted Insurance</h2>
                 <div className="grid grid-cols-2 gap-4">
                    {['Aasandha', 'Allied Insurance', 'Cigna Global', 'Bupa', 'Solarelle', 'Amana Takaful'].map((ins, i) => (
                      <div key={i} className="flex items-center gap-2 p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                         <span className="material-symbols-outlined text-green-500">verified_user</span>
                         <span className="font-bold">{ins}</span>
                      </div>
                    ))}
                 </div>
                 <p className="mt-6 text-text-muted text-sm">
                   * Coverage depends on your specific plan. Please verify with your provider.
                 </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-[3rem] border border-primary/20">
                 <h3 className="text-2xl font-bold mb-4">Self-Pay Rates</h3>
                 <p className="mb-6 text-text-muted">For clients without insurance or preferring extra privacy.</p>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white dark:bg-black/20 rounded-xl">
                       <span className="font-medium">Initial Consultation</span>
                       <span className="font-bold text-primary">$150</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white dark:bg-black/20 rounded-xl">
                       <span className="font-medium">Therapy Session (50m)</span>
                       <span className="font-bold text-primary">$120</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white dark:bg-black/20 rounded-xl">
                       <span className="font-medium">Group Therapy</span>
                       <span className="font-bold text-primary">$40</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
      <CTA title="Questions about costs?" subtitle="Our billing team is happy to verify your benefits before your first visit." buttonText="Contact Billing" />
    </PageTransition>
  );
};

export default InsurancePage;