import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../lib/constants';

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark py-12 border-t border-portfolio-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xl font-bold text-portfolio-accent mb-4">
              {personalInfo.name}
            </h4>
            <p className="text-gray-300 mb-4">
              {personalInfo.description}
            </p>
            <div className="flex space-x-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
                  className="text-gray-300 hover:text-portfolio-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#skills'); }}
                  className="text-gray-300 hover:text-portfolio-accent transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}
                  className="text-gray-300 hover:text-portfolio-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#blogs" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#blogs'); }}
                  className="text-gray-300 hover:text-portfolio-accent transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="text-gray-300 hover:text-portfolio-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-portfolio-accent mr-2 mt-1"></i>
                <span className="text-gray-300">{personalInfo.location}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-portfolio-accent mr-2 mt-1"></i>
                <a href={socialLinks.email} className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-portfolio-accent mr-2 mt-1"></i>
                <a href={socialLinks.phone} className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Designed & Developed with <span className="text-red-500">♥</span> by {personalInfo.name}
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => scrollToSection('#home')}
        className="fixed bottom-8 right-8 w-10 h-10 bg-portfolio-accent text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-80 transition-colors"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </footer>
  );
}
