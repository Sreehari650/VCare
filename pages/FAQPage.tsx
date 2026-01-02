import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQAccordion from '../components/faq/FAQAccordion';
import CTA from '../components/shared/CTA';
import { FAQS } from '../constants';
import PageTransition from '../components/shared/PageTransition';

// Workaround for framer-motion type issues
const M = motion as any;

const FAQPage: React.FC = () => {
  // Extract unique categories
  const categories = useMemo(() => {
    const cats = FAQS.map(faq => faq.category);
    return ["All", ...new Set(cats)];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = useMemo(() => {
    let result = FAQS;

    // Filter by Category
    if (activeCategory !== "All") {
      result = result.filter(faq => faq.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        faq => 
          faq.question.toLowerCase().includes(query) || 
          faq.answer.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <PageTransition className="flex flex-col min-h-screen">
      {/* Hero */}
      <div className="pt-32 pb-16 px-4 md:px-10 bg-light dark:bg-dark">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <M.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-secondary text-black mx-auto mb-2 border-2 border-black shadow-neo-sm rotate-3"
          >
            <span className="material-symbols-outlined text-4xl">live_help</span>
          </M.div>
          <M.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-main dark:text-white text-5xl md:text-6xl font-display font-bold leading-tight"
          >
            How can we help?
          </M.h1>
          <M.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted dark:text-gray-400 text-xl max-w-xl mx-auto leading-relaxed mb-4"
          >
            Everything you need to know about our services, pricing, and process.
          </M.p>

          {/* Search Bar */}
          <M.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto w-full"
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-500">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <input
              type="text"
              className="block w-full p-5 pl-14 text-lg font-medium text-gray-900 border-2 border-gray-200 rounded-2xl bg-white focus:ring-0 focus:border-primary dark:bg-card-dark dark:border-gray-700 dark:placeholder-gray-400 dark:text-white shadow-sm transition-all hover:border-gray-300"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </M.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white dark:bg-card-dark rounded-t-[4rem] shadow-inner -mt-8 pt-16">
        <div className="max-w-4xl mx-auto px-4 md:px-10 pb-20">
          
          {/* Category Filters */}
          <M.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((cat, idx) => (
              <M.button
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchQuery("");
                }}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 border-2 ${
                  activeCategory === cat
                    ? 'bg-primary border-primary text-white shadow-lg transform -translate-y-1'
                    : 'bg-light dark:bg-background-dark border-transparent text-text-muted dark:text-gray-400 hover:border-primary/20 hover:text-primary'
                }`}
              >
                {cat}
              </M.button>
            ))}
          </M.div>

          {/* Accordion */}
          <div className="min-h-[300px]">
            <FAQAccordion items={filteredFAQs} />
            
            {filteredFAQs.length === 0 && (
               <div className="text-center py-20 text-text-muted flex flex-col items-center gap-4">
                 <span className="material-symbols-outlined text-5xl opacity-30">search_off</span>
                 <p className="text-lg">No questions found matching your criteria.</p>
                 <button 
                  onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
                  className="text-primary font-bold hover:underline"
                 >
                   Clear Filters
                 </button>
               </div>
            )}
          </div>
          
          {/* Contact Support Note */}
          <M.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-background-dark dark:to-gray-800 p-10 rounded-[3rem] border border-white dark:border-gray-700"
          >
            <h3 className="text-2xl font-display font-bold text-text-main dark:text-white mb-2">Still stuck?</h3>
            <p className="text-text-muted dark:text-gray-400 mb-8 text-lg">
              Can't find the answer? Our team is just a message away.
            </p>
            <button className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-text-main dark:bg-white text-white dark:text-black text-base font-bold hover:opacity-90 transition-opacity">
              Contact Support
            </button>
          </M.div>

        </div>
      </div>
      
      <CTA title="Ready to chat?" subtitle="Booking your first appointment is easy." buttonText="Book Now" />
    </PageTransition>
  );
};

export default FAQPage;