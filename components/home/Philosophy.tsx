import React from 'react';
import { motion } from 'framer-motion';

// Workaround for framer-motion type issues
const M = motion as any;

interface PhilosophyProps {
  transparent?: boolean;
}

const Philosophy: React.FC<PhilosophyProps> = ({ transparent }) => {
  return (
    <div className={`w-full py-20 md:py-32 rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 relative z-20 ${transparent ? 'bg-white/80 dark:bg-card-dark/60 backdrop-blur-lg border-t border-white/20' : 'bg-white dark:bg-card-dark shadow-[0_-10px_40px_rgba(0,0,0,0.05)]'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-16">
        <div className="flex flex-col gap-6 text-center items-center">
          <M.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-4 py-1.5 rounded-full bg-secondary text-black font-bold text-xs uppercase tracking-widest border border-black"
          >
            Our Philosophy
          </M.div>
          <M.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-main dark:text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-3xl"
          >
            Merging Science with <span className="text-primary italic">Compassion</span>
          </M.h3>
          <M.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            We believe in a holistic approach to mental well-being, grounding our practice in empathy and evidence-based techniques.
          </M.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'volunteer_activism', title: 'Empathy First', desc: 'We listen without judgment to understand your unique story.', color: 'bg-primary/10 text-primary' },
            { icon: 'psychology', title: 'Science-Based', desc: 'Methods grounded in the latest psychological research.', color: 'bg-secondary/20 text-green-700' },
            { icon: 'spa', title: 'Holistic Healing', desc: 'Connecting mind, body, and spirit for comprehensive wellness.', color: 'bg-accent/10 text-accent' }
          ].map((item, idx) => (
            <M.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-gray-50/80 dark:bg-background-dark/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 hover:shadow-neo hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <div>
                <h4 className="text-text-main dark:text-white text-2xl font-display font-bold mb-3">{item.title}</h4>
                <p className="text-text-muted dark:text-gray-400 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </M.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Philosophy;