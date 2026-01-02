import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import CTA from '../components/shared/CTA';
import { VALUES } from '../constants';

// Workaround for framer-motion type issues
const M = motion as any;

const AboutPage: React.FC = () => {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <div className="pt-32 pb-20 px-4 md:px-10 bg-light dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <M.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-text-main dark:text-white mb-6"
            >
              Our <span className="text-primary">Story</span>
            </M.h1>
            <M.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-muted dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              From a small practice to a comprehensive mental wellness center, our journey has been driven by one goal: making high-quality care accessible to all.
            </M.p>
          </div>

          {/* Content Split */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
             <M.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex-1"
             >
                <div className="rounded-[3rem] overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl aspect-video">
                   <img 
                     src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                     alt="Clinic Interior" 
                     className="w-full h-full object-cover"
                   />
                </div>
             </M.div>
             <M.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col gap-6"
             >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main dark:text-white">
                  A Sanctuary for Healing
                </h2>
                <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                  Founded in 2015, VCare began with a simple belief: that mental health support should be as normalized and accessible as physical healthcare. We started as a small team of three therapists in a shared office.
                </p>
                <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                  Today, we are proud to be one of the leading mental health clinics in the region, offering a diverse range of services from psychiatry to art therapy. Despite our growth, our core philosophy remains unchanged—every individual deserves to be heard, understood, and supported.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-4">
                   <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800">
                      <span className="block text-4xl font-bold text-primary mb-2">8+</span>
                      <span className="text-sm text-text-muted">Years of Service</span>
                   </div>
                   <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800">
                      <span className="block text-4xl font-bold text-secondary text-black dark:text-secondary mb-2">5k+</span>
                      <span className="text-sm text-text-muted">Lives Impacted</span>
                   </div>
                </div>
             </M.div>
          </div>

          {/* Values */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((val, idx) => (
                <M.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-card-dark p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:shadow-neo transition-all"
                >
                   <span className="material-symbols-outlined text-4xl text-primary mb-4">{val.icon}</span>
                   <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                   <p className="text-text-muted dark:text-gray-400 leading-relaxed">{val.description}</p>
                </M.div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <CTA />
    </PageTransition>
  );
};

export default AboutPage;