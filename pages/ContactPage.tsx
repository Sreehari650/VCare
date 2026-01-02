import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';

// Workaround for framer-motion type issues
const M = motion as any;

const ContactPage: React.FC = () => {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <div className="pt-32 pb-20 px-4 md:px-10 bg-light dark:bg-dark flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <M.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-text-main dark:text-white mb-6"
            >
              Get in <span className="text-primary">Touch</span>
            </M.h1>
            <M.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-muted dark:text-gray-400 max-w-2xl mx-auto"
            >
              Whether you have a question about our services or need to schedule an appointment, our team is here to help.
            </M.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info & Map */}
            <M.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="flex flex-col gap-8"
            >
               <div className="bg-white dark:bg-card-dark p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                     <span className="material-symbols-outlined text-primary">location_on</span>
                     Visit Us
                  </h3>
                  <div className="aspect-video w-full bg-gray-200 rounded-xl mb-6 overflow-hidden relative group">
                     {/* Pseudo Map */}
                     <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                        <span className="text-slate-500 font-bold">Map Preview</span>
                     </div>
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8080517835157!2d73.5065!3d4.1722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7f457723708d%3A0xc3f5c50311f71590!2sVilla%20College!5e0!3m2!1sen!2smv!4v1625555555555!5m2!1sen!2smv" 
                       width="100%" 
                       height="100%" 
                       style={{border:0}} 
                       allowFullScreen 
                       loading="lazy"
                       className="relative z-10 opacity-80 hover:opacity-100 transition-opacity"
                     ></iframe>
                  </div>
                  <p className="text-text-muted dark:text-gray-400 text-lg">
                    Villa College<br/>
                    Rah Dhebai Hingun, Male'<br/>
                    Maldives, 20373
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-primary/5 dark:bg-white/5 p-6 rounded-[2rem] border border-primary/10">
                    <span className="material-symbols-outlined text-3xl text-primary mb-4">call</span>
                    <h4 className="font-bold text-lg mb-2">Phone</h4>
                    <p className="text-text-muted dark:text-gray-400">330 2113</p>
                    <p className="text-text-muted dark:text-gray-400">737 2113</p>
                 </div>
                 <div className="bg-secondary/10 dark:bg-secondary/5 p-6 rounded-[2rem] border border-secondary/20">
                    <span className="material-symbols-outlined text-3xl text-green-600 mb-4">mail</span>
                    <h4 className="font-bold text-lg mb-2">Email</h4>
                    <p className="text-text-muted dark:text-gray-400 break-all text-sm">info.vcare@villacollege.edu.mv</p>
                 </div>
               </div>
            </M.div>

            {/* Form */}
            <M.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-white dark:bg-card-dark p-8 md:p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl"
            >
              <h3 className="text-3xl font-display font-bold mb-2">Send a Message</h3>
              <p className="text-text-muted dark:text-gray-400 mb-8">We usually respond within 24 hours.</p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider pl-1">Name</label>
                    <input type="text" className="w-full h-14 rounded-2xl bg-gray-50 dark:bg-background-dark border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-black px-4 transition-all" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider pl-1">Phone</label>
                    <input type="tel" className="w-full h-14 rounded-2xl bg-gray-50 dark:bg-background-dark border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-black px-4 transition-all" placeholder="Your phone" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider pl-1">Email</label>
                  <input type="email" className="w-full h-14 rounded-2xl bg-gray-50 dark:bg-background-dark border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-black px-4 transition-all" placeholder="Your email" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider pl-1">Message</label>
                  <textarea rows={5} className="w-full rounded-2xl bg-gray-50 dark:bg-background-dark border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-black p-4 transition-all resize-none" placeholder="How can we help?"></textarea>
                </div>

                <button type="button" className="mt-4 w-full h-16 bg-primary text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-violet-700 hover:scale-[1.02] transition-all">
                  Send Message
                </button>
              </form>
            </M.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;