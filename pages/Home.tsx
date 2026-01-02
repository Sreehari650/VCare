import React from 'react';
import Hero from '../components/home/Hero.tsx';
import Philosophy from '../components/home/Philosophy.tsx';
import ServiceGrid from '../components/services/ServiceGrid.tsx';
import TeamGrid from '../components/team/TeamGrid.tsx';
import CTA from '../components/shared/CTA.tsx';
import { SERVICES, TEAM } from '../constants';
import PageTransition from '../components/shared/PageTransition.tsx';

const Home: React.FC = () => {
  return (
    <PageTransition className="flex flex-col min-h-screen">
      <Hero />
      <Philosophy />
      <ServiceGrid services={SERVICES} limit={4} />
      <TeamGrid team={TEAM} limit={4} />
      <CTA />
    </PageTransition>
  );
};

export default Home;