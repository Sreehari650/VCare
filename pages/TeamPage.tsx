import React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGES, TEAM, VALUES } from '../constants';
import { useBooking } from '../contexts/BookingContext';
import PageTransition from '../components/shared/PageTransition';

// Workaround for framer-motion type issues
const M = motion as any;

const TeamPage: React.FC = () => {
  const { openModal } = useBooking();

  return (
    <PageTransition className="flex flex-col min-h-screen">
       {/* Hero Section */}
       <section className="pt-36 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Hero Text */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <M.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent self-center md:self-start border border-accent/20"
            >
              <span className="material-symbols-outlined text-lg">verified</span>
              <span>Certified Professionals</span>
            </M.div>
            <M.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tight text-text-main dark:text-white"
            >
              Healing Minds, <br/>
              <span className="text-primary">Empowering Lives</span>
            </M.h1>
            <M.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-muted dark:text-gray-300 font-normal leading-relaxed max-w-xl"
            >
              Meet the compassionate experts dedicated to your mental well-being. Clinical expertise with genuine empathy.
            </M.p>
          </div>
          {/* Hero Image */}
          <M.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-[3rem] overflow-hidden border-4 border-black dark:border-white shadow-neo bg-secondary">
              <div 
                className="w-full h-full bg-center bg-cover object-cover transition-transform hover:scale-110 duration-700"
                style={{backgroundImage: `url("${HERO_IMAGES.team}")`}}
              ></div>
            </div>
          </M.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-white dark:bg-card-dark py-20 md:py-32 rounded-t-[4rem] relative overflow-hidden -mt-10 z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
          <div className="flex flex-col gap-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Core <span className="text-accent">Principles</span></h2>
              <p className="text-lg text-text-muted dark:text-gray-400">Built on a foundation of trust, expertise, and commitment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((val, idx) => (
                <M.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-6 rounded-[2.5rem] bg-light dark:bg-background-dark p-8 border border-transparent hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-card-dark text-black dark:text-white border-2 border-black dark:border-white shadow-neo-sm">
                    <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-text-main dark:text-white mb-2">{val.title}</h3>
                    <p className="text-text-muted dark:text-gray-400 leading-relaxed">{val.description}</p>
                  </div>
                </M.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Team Grid */}
      <div className="w-full bg-light dark:bg-dark py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <M.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
              <M.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={member.name} 
                className="flex flex-col items-center text-center group bg-white dark:bg-card-dark p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-primary transition-colors"
              >
                <div 
                  className="w-32 h-32 rounded-full mb-4 bg-cover bg-center border-4 border-secondary shadow-md group-hover:scale-105 transition-transform duration-300"
                  style={{backgroundImage: `url("${member.imageUrl}")`}}
                ></div>
                <h3 className="text-xl font-display font-bold text-text-main dark:text-white">{member.name}</h3>
                <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-sm text-text-muted dark:text-gray-400 line-clamp-3 leading-relaxed">{member.description}</p>
              </M.div>
            ))}
          </M.div>
        </div>
      </div>

      <div className="bg-light dark:bg-dark pb-20">
         <div className="max-w-4xl mx-auto px-4">
            <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
               <div className="relative z-10 flex flex-col items-center gap-6">
                 <h2 className="text-3xl md:text-5xl font-display font-bold">Join Our Team?</h2>
                 <p className="text-lg text-white/90 max-w-lg">We are always looking for passionate professionals to join our mission.</p>
                 <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-black transition-colors">
                   View Careers
                 </button>
               </div>
            </div>
         </div>
      </div>
    </PageTransition>
  );
};

export default TeamPage;