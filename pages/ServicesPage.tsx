import React from 'react';
import { motion } from 'framer-motion';
import ServiceGrid from '../components/services/ServiceGrid';
import CTA from '../components/shared/CTA';
import { DETAILED_SERVICES, HERO_IMAGES, SERVICES } from '../constants';
import { useBooking } from '../contexts/BookingContext';
import PageTransition from '../components/shared/PageTransition';

// Workaround for framer-motion type issues
const M = motion as any;

const ServicesPage: React.FC = () => {
  const { openModal } = useBooking();
  
  return (
    <PageTransition className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="pt-32 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
           <M.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-center justify-center p-8 text-center shadow-neo border-2 border-black"
            >
              {/* Bg Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{backgroundImage: `url("${HERO_IMAGES.services}")`}}
              ></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
              
              <div className="relative z-20 max-w-3xl flex flex-col items-center gap-6">
                <span className="px-4 py-1.5 rounded-full bg-white/20 text-white border border-white/30 text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                   What We Offer
                </span>
                <h1 className="text-white text-5xl md:text-7xl font-display font-bold leading-tight">
                  Pathways to <span className="text-secondary">Healing</span>
                </h1>
                <p className="text-white/90 text-xl font-medium max-w-xl">
                  Comprehensive psychotherapy and counselling services designed to support every stage of your mental health journey.
                </p>
                <button 
                  onClick={openModal}
                  className="mt-4 px-8 py-4 bg-secondary text-black text-lg font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  Book a Session
                </button>
              </div>
           </M.div>
        </div>
      </div>

      {/* Intro Grid */}
      <ServiceGrid services={SERVICES} showHeading={false} />

      {/* Detailed Services */}
      <div className="px-4 md:px-10 py-16 bg-light dark:bg-dark">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {DETAILED_SERVICES.map((service, idx) => (
             <M.div 
               key={idx}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.1 }}
             >
              <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-8 bg-white dark:bg-card-dark p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-neo transition-all duration-300`}>
                <div className="flex-1 flex flex-col justify-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                     <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-text-main dark:text-white mb-3">{service.title}</h3>
                    <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {service.testimonial && (
                    <div className="bg-gray-50 dark:bg-black/20 p-6 rounded-2xl border-l-4 border-secondary">
                      <p className="italic text-text-main dark:text-gray-200 text-lg font-medium">"{service.testimonial.quote}"</p>
                      <p className="text-sm font-bold mt-3 text-primary uppercase tracking-wider">— {service.testimonial.author}</p>
                    </div>
                  )}
                </div>
                <div 
                  className="w-full md:w-2/5 min-h-[300px] bg-cover bg-center rounded-[2rem]"
                  style={{backgroundImage: `url("${service.imageUrl}")`}}
                ></div>
              </div>
            </M.div>
          ))}
        </div>
      </div>

      <CTA />
    </PageTransition>
  );
};

export default ServicesPage;