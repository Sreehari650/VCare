import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Workaround for framer-motion type issues
const M = motion as any;

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <M.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white dark:bg-card-dark pt-20 pb-10 border-t-2 border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          {/* Brand */}
          <M.div variants={itemVariants} className="flex flex-col gap-6 max-w-sm">
            <Link to="/" className="flex items-center">
              <img 
                src="https://drive.google.com/thumbnail?id=1htZ5WjWfk1ifI8WbPOI7gCIAjhtwJ_he&sz=w500" 
                alt="VCare Logo" 
                className="h-24 object-contain -ml-4"
              />
            </Link>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed font-medium">
              Providing a safe haven for mental wellness through compassion, science, and a touch of humanity.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-light dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-sm group">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" 
                  alt="Facebook" 
                  className="w-6 h-6 object-contain transition-all" 
                />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-light dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-sm group">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" 
                  alt="Twitter" 
                  className="w-5 h-5 object-contain transition-all" 
                />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-light dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-sm group">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" 
                  alt="Instagram" 
                  className="w-6 h-6 object-contain transition-all" 
                />
              </a>
            </div>
          </M.div>
          
          <div className="flex flex-wrap gap-12 lg:gap-24">
            {/* Links 1 */}
            <M.div variants={itemVariants} className="flex flex-col gap-6">
              <h4 className="font-display font-bold text-text-main dark:text-white text-xl">Clinic</h4>
              <div className="flex flex-col gap-3">
                <Link to="/team" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">About Us</Link>
                <Link to="/team" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">Our Team</Link>
                <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">Careers</a>
                <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">Contact</a>
              </div>
            </M.div>

            {/* Links 2 */}
            <M.div variants={itemVariants} className="flex flex-col gap-6">
              <h4 className="font-display font-bold text-text-main dark:text-white text-xl">Support</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">FAQ</a>
                <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">Insurance</a>
                <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">Patient Portal</a>
                <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary font-medium transition-colors text-base">Emergency</a>
              </div>
            </M.div>

            {/* Location / Contact */}
            <M.div variants={itemVariants} className="flex flex-col gap-6">
              <h4 className="font-display font-bold text-text-main dark:text-white text-xl">Visit Us</h4>
              <div className="text-text-muted dark:text-gray-400 text-base leading-relaxed">
                <p>Villa College</p>
                <p>Male', Maldives</p>
              </div>
              <div className="text-text-muted dark:text-gray-400 text-base flex flex-col gap-2">
                 <div>
                    <span className="font-bold text-text-main dark:text-gray-300 block">Call us</span>
                    <span>330 2113 or 737 2113</span>
                 </div>
                 <div>
                    <span className="font-bold text-text-main dark:text-gray-300 block">Email us</span>
                    <span className="break-all text-primary font-medium">info.vcare@villacollege.edu.mv</span>
                 </div>
              </div>
            </M.div>
          </div>
        </div>
        
        <M.div 
          variants={itemVariants}
          className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-gray-100 dark:border-gray-800 gap-6"
        >
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <p className="text-sm text-text-muted dark:text-gray-500 font-medium">
               © 2023 VCare. All rights reserved.
             </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="text-sm font-bold text-text-main dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-bold text-text-main dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm font-bold text-text-main dark:text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </M.div>
      </div>
    </M.footer>
  );
};

export default Footer;