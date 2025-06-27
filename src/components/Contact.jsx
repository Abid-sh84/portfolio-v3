import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../lib/constants';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-portfolio-accent">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any queries or opportunities.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto bg-portfolio-dark p-8 rounded-lg shadow-xl border border-portfolio-secondary contact-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 contact-info-grid">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white text-left">
                Let's Connect
              </motion.h3>
              
              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/20 flex items-center justify-center text-portfolio-accent flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">{personalInfo.location}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/20 flex items-center justify-center text-portfolio-accent flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-portfolio-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/20 flex items-center justify-center text-portfolio-accent flex-shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-300 hover:text-portfolio-accent transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Social Media & CTA */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white text-left mb-4">
                  Follow Me
                </motion.h3>
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-portfolio-dark flex items-center justify-center text-gray-300 hover:text-portfolio-accent hover:border-portfolio-accent border border-gray-700 transition-colors contact-social-icon">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-portfolio-dark flex items-center justify-center text-gray-300 hover:text-portfolio-accent hover:border-portfolio-accent border border-gray-700 transition-colors contact-social-icon">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-portfolio-dark flex items-center justify-center text-gray-300 hover:text-portfolio-accent hover:border-portfolio-accent border border-gray-700 transition-colors contact-social-icon">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-portfolio-dark flex items-center justify-center text-gray-300 hover:text-portfolio-accent hover:border-portfolio-accent border border-gray-700 transition-colors contact-social-icon">
                    <i className="fab fa-discord text-xl"></i>
                  </a>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="mt-8">
                <a 
                  href={`mailto:${personalInfo.email}?subject=Project Inquiry&body=Hello ${personalInfo.name},%0D%0A%0D%0AI'm interested in discussing a potential project with you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`} 
                  className="inline-block w-full px-6 py-4 bg-portfolio-accent text-gray-900 font-medium rounded-md hover:bg-opacity-90 transition-all transform hover:scale-[1.02] contact-cta-button"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Me an Email
                </a>
              </motion.div>
            </div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              Looking forward to hearing from you! I'm available for freelance projects and full-time opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
