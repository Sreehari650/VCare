import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import CTA from '../components/shared/CTA';

// Workaround for framer-motion type issues
const M = motion as any;

const POSITIONS = [
  { title: "Licensed Clinical Psychologist", type: "Full-time", location: "Male'", department: "Clinical" },
  { title: "Administrative Assistant", type: "Part-time", location: "Male'", department: "Operations" },
  { title: "Child Therapist", type: "Full-time", location: "Male'", department: "Clinical" },
];

const CareersPage: React.FC = () => {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <div className="pt-32 pb-20 px-4 md:px-10 bg-light dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <M.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="px-4 py-2 rounded-full bg-secondary text-black font-bold text-sm mb-4 inline-block"
             >
               We are hiring!
             </M.span>
             <M.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-display font-bold text-text-main dark:text-white mb-6"
             >
               Join Our <span className="text-primary">Mission</span>
             </M.h1>
             <M.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-xl text-text-muted dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
             >
               Be part of a compassionate team dedicated to redefining mental healthcare. We value growth, empathy, and innovation.
             </M.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
             <div className="bg-white dark:bg-card-dark p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-neo">
                <h3 className="text-3xl font-bold mb-4">Why VCare?</h3>
                <ul className="space-y-4">
                  {[
                    "Competitive compensation packages",
                    "Ongoing professional development",
                    "Supportive, multidisciplinary team",
                    "Flexible scheduling options",
                    "Modern, comfortable facilities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-text-muted dark:text-gray-300">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div 
               className="min-h-[300px] rounded-[3rem] bg-cover bg-center border-2 border-black dark:border-white"
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")'}}
             ></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="flex flex-col gap-4">
               {POSITIONS.map((job, idx) => (
                 <M.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 bg-white dark:bg-card-dark rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-primary transition-all group"
                 >
                    <div>
                      <h4 className="text-xl font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h4>
                      <div className="flex gap-4 text-sm text-text-muted dark:text-gray-400">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {job.type}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {job.location}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">domain</span> {job.department}</span>
                      </div>
                    </div>
                    <button className="mt-4 sm:mt-0 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/10 text-text-main dark:text-white font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                      Apply Now
                    </button>
                 </M.div>
               ))}
            </div>
          </div>
        </div>
      </div>
      <CTA title="Don't see a fit?" subtitle="Send us your resume anyway. We are always looking for talent." buttonText="Contact Us" />
    </PageTransition>
  );
};

export default CareersPage;