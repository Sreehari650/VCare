import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';
import { motion } from 'framer-motion';

// Workaround for framer-motion type issues
const M = motion as any;

interface ServiceGridProps {
  services: Service[];
  limit?: number;
  showHeading?: boolean;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, limit, showHeading = true }) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="w-full bg-light dark:bg-dark py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {showHeading && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <M.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-text-main dark:text-white text-4xl md:text-5xl font-display font-bold leading-tight mb-4"
              >
                Our Services
              </M.h2>
              <M.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-text-muted dark:text-gray-400 text-lg"
              >
                Comprehensive mental health support designed for every stage of your journey.
              </M.p>
            </div>
            <Link to="/services" className="hidden md:flex px-6 py-3 rounded-full border-2 border-text-main dark:border-white font-bold hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              View All Services
            </Link>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, idx) => (
            <M.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-card-dark p-8 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-neo duration-300"
            >
              <div className="mb-6 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-text-main dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">{service.description}</p>
              
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </M.div>
          ))}
        </div>

        {showHeading && (
          <div className="mt-10 md:hidden text-center">
            <Link to="/services" className="inline-block px-8 py-3 rounded-full bg-text-main text-white font-bold shadow-lg">View All</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceGrid;