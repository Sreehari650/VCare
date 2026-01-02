import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

// Workaround for potential type issues with framer-motion in strict setups
const M = motion as any;

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const PageTransition: React.FC<PageTransitionProps> = ({ children, className = "" }) => {
  // Scroll to top when the new page mounts
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <M.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for smooth feel
      className={`flex-1 w-full flex flex-col ${className}`}
    >
      {children}
    </M.div>
  );
};

export default PageTransition;