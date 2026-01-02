import React from 'react';
import { TeamMember } from '../../types';
import { motion } from 'framer-motion';

// Workaround for framer-motion type issues
const M = motion as any;

interface TeamGridProps {
  team: TeamMember[];
  limit?: number;
  showHeading?: boolean;
  transparent?: boolean;
}

const TeamGrid: React.FC<TeamGridProps> = ({ team, limit, showHeading = true, transparent }) => {
  const displayTeam = limit ? team.slice(0, limit) : team;

  return (
    <div className={`w-full py-20 md:py-32 rounded-[3rem] ${transparent ? 'bg-white/60 dark:bg-card-dark/40 backdrop-blur-lg border border-white/20' : 'bg-white dark:bg-card-dark shadow-inner'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {showHeading && (
           <div className="text-center mb-20">
            <M.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-main dark:text-white text-4xl md:text-5xl font-display font-bold leading-tight mb-6"
            >
              Meet Our <span className="text-primary">Specialists</span>
            </M.h2>
            <M.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Our diverse team of licensed therapists brings a wealth of experience and specialized training.
            </M.p>
          </div>
        )}
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayTeam.map((member, idx) => (
            <M.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex flex-col items-center text-center group bg-light/80 dark:bg-background-dark/80 backdrop-blur-md p-6 rounded-[2rem] hover:bg-secondary/20 transition-colors"
            >
              <div 
                className="w-36 h-36 rounded-full mb-6 bg-cover bg-center border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 ease-out"
                style={{backgroundImage: `url("${member.imageUrl}")`}}
              ></div>
              <h3 className="text-xl font-display font-bold text-text-main dark:text-white">{member.name}</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-sm text-text-muted dark:text-gray-400 line-clamp-3 leading-relaxed">{member.description}</p>
              
              <button className="mt-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                 <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </M.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;