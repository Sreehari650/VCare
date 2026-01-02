import React, { useState } from 'react';
import { FAQ } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

// Workaround for framer-motion type issues
const M = motion as any;

interface FAQAccordionProps {
  items: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence mode='wait'>
        {items.map((item, idx) => (
          <M.div 
            key={`${item.question}-${idx}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                openIndex === idx 
                ? 'bg-white dark:bg-card-dark border-primary shadow-neo-sm' 
                : 'bg-white dark:bg-card-dark border-gray-200 dark:border-gray-800 hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className={`font-display font-bold text-lg pr-4 transition-colors ${openIndex === idx ? 'text-primary' : 'text-text-main dark:text-white'}`}>
                {item.question}
              </span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-primary text-white rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white'}`}>
                  <span className="material-symbols-outlined">expand_more</span>
              </div>
            </button>
            <M.div 
              initial={false}
              animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-text-muted dark:text-gray-400 text-base leading-relaxed border-t border-transparent max-w-3xl">
                {item.answer}
              </div>
            </M.div>
          </M.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion;