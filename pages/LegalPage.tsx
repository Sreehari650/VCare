import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';

// Workaround for framer-motion type issues
const M = motion as any;

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookies' | 'portal';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    privacy: {
      title: "Privacy Policy",
      text: "At VCare, we prioritize your privacy. All clinical data is encrypted and compliant with HIPAA and local regulations. We do not share your personal information with third parties without your explicit consent, except where required by law."
    },
    terms: {
      title: "Terms of Service",
      text: "By using VCare services, you agree to our terms. Cancellations must be made at least 24 hours in advance. Harassment of staff or other patients will not be tolerated and may result in termination of services."
    },
    cookies: {
      title: "Cookie Policy",
      text: "We use cookies to improve your website experience. These small text files help us understand how you use our site and allow us to remember your preferences. You can disable cookies in your browser settings at any time."
    },
    portal: {
      title: "Patient Portal",
      text: "Redirecting to secure portal..."
    }
  };

  const data = content[type];

  return (
    <PageTransition className="flex flex-col min-h-screen">
      <div className="pt-32 pb-20 px-4 md:px-10 flex-1 flex flex-col items-center justify-center bg-light dark:bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <M.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-display font-bold mb-8 text-text-main dark:text-white"
          >
            {data.title}
          </M.h1>
          
          <M.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-card-dark p-10 rounded-[2.5rem] shadow-sm text-left border border-gray-100 dark:border-gray-800"
          >
            <p className="text-lg leading-relaxed text-text-muted dark:text-gray-300">
              {data.text}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted dark:text-gray-300">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {type === 'portal' && (
               <div className="mt-8 text-center">
                 <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-violet-700">Login to Portal</button>
               </div>
            )}
          </M.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LegalPage;