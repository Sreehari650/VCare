import React from 'react';
import Hero from '../components/home/Hero.tsx';
import Philosophy from '../components/home/Philosophy.tsx';
import ServiceGrid from '../components/services/ServiceGrid.tsx';
import TeamGrid from '../components/team/TeamGrid.tsx';
import CTA from '../components/shared/CTA.tsx';
import { SERVICES, TEAM } from '../constants';
import PageTransition from '../components/shared/PageTransition.tsx';
import NeuralNetworkBackground from '../components/home/NeuralNetworkBackground.tsx';

const Home: React.FC = () => {
  return (
    <PageTransition className="flex flex-col min-h-screen relative">
      {/* Canvas Background */}
      <NeuralNetworkBackground />

      <div className="relative z-10">
        <Hero transparent />
        <Philosophy transparent />
        <ServiceGrid services={SERVICES} limit={4} transparent />
        <TeamGrid team={TEAM} limit={4} transparent />
        <CTA transparent />
      </div>
    </PageTransition>
  );
};

export default Home;