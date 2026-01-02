import React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGES, TRUSTED_USERS } from '../../constants';
import { useBooking } from '../../contexts/BookingContext';

// Workaround for framer-motion type issues
const M = motion as any;

const Hero: React.FC = () => {
  const { openModal } = useBooking();

  return (
    <div className="w-full bg-light dark:bg-dark relative overflow-hidden pt-32 pb-20 px-4">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-8 flex-1 text-center lg:text-left">
            <div className="flex flex-col gap-2">
              <M.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                 <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-bold tracking-wider uppercase mb-4 inline-block">
                  Mental Wellness Reimagined
                 </span>
              </M.div>
              <M.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-text-main dark:text-white text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter"
              >
                Reclaim Your <br/>
                <span className="text-gradient">Peace of Mind</span>
              </M.h1>
              <M.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4"
              >
                Professional counselling and psychotherapy tailored to your unique mental landscape. Merging clinical science with profound human compassion.
              </M.p>
            </div>
            <M.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <button 
                onClick={openModal}
                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-2xl h-14 px-8 bg-primary hover:bg-violet-700 transition-all text-white text-lg font-bold shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border-2 border-black dark:border-white"
              >
                Start Journey
              </button>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-2xl h-14 px-8 bg-white dark:bg-card-dark border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors text-text-main dark:text-white text-lg font-bold">
                Learn More
              </button>
            </M.div>
            
            {/* Trusted Users */}
            <M.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <div className="flex -space-x-4">
                {TRUSTED_USERS.map((url, i) => (
                   <div 
                   key={i}
                   className="w-12 h-12 rounded-full border-4 border-white dark:border-dark bg-gray-200 bg-cover bg-center"
                   style={{backgroundImage: `url("${url}")`}}
                 ></div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                 <div className="flex text-yellow-400">
                   <span className="material-symbols-outlined text-sm filled">star</span>
                   <span className="material-symbols-outlined text-sm filled">star</span>
                   <span className="material-symbols-outlined text-sm filled">star</span>
                   <span className="material-symbols-outlined text-sm filled">star</span>
                   <span className="material-symbols-outlined text-sm filled">star</span>
                 </div>
                 <p className="text-sm font-bold text-text-main dark:text-white">Trusted by 500+ patients</p>
              </div>
            </M.div>
          </div>

          {/* Image Content */}
          <M.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[550px]">
               {/* Decorative blobs behind image */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full border-2 border-black dark:border-white z-20 flex items-center justify-center">
                  <span className="text-3xl">🌱</span>
               </div>
               <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-accent rounded-full border-2 border-black dark:border-white z-20 flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
               </div>

              <div className="w-full h-full rounded-[3rem] overflow-hidden border-4 border-black dark:border-white shadow-neo bg-white dark:bg-card-dark relative z-10">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-700 ease-in-out" 
                  style={{backgroundImage: `url("${HERO_IMAGES.home}")`}}
                ></div>
              </div>
            </div>
          </M.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;