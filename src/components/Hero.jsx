import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../lib/constants';
import './Hero.css';
import { useState, useRef } from 'react';
import CursorEffect from './CursorEffect';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };  return (
    <>
      {/* Canvas-based cursor effect that follows the mouse */}
      <CursorEffect />
      
      <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center bg-[#0F0F0F] hero-glow-section relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side Content */}
          <div className="text-left order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            >
              Hi I am
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-[#3B82F6]">{personalInfo.name}</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-xl text-[#3B82F6] mb-2">
                <span className="text-white">&gt;</span> {personalInfo.title}
              </p>
              <p className="text-lg text-[#3B82F6] mb-8">
                &amp; {personalInfo.subtitle}
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-md text-slate-300 mb-8 max-w-xl"
            >
              {personalInfo.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
                className="px-6 py-3 rounded-md border-2 border-[#3B82F6] text-[#3B82F6] font-medium transition hover:bg-opacity-20 hover:bg-[#3B82F6] inline-block"
              >
                Explore My Journey
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-5 mt-4"
            >
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition-colors" aria-label="GitHub">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href={socialLinks.email} className="text-gray-400 hover:text-[#3B82F6] transition-colors" aria-label="Email">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </motion.div>
          </div>
          
          {/* Right Side Image */}          <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              {/* SVG decoration similar to the screenshot (optional) */}              
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                <svg className="svg-decoration" width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M30,-30C41.7,-16.8,55.3,-8.4,58.6,3.4C62,15.1,55,30.2,43.3,41.8C31.5,53.3,15.8,61.3,0.1,61.2C-15.6,61,-31.2,52.7,-44.7,41.1C-58.2,29.5,-69.6,14.7,-70.1,-0.5C-70.5,-15.7,-60.1,-31.5,-46.6,-44.7C-33.1,-57.9,-16.6,-68.5,-3.3,-65.2C9.9,-61.9,19.8,-44.6,30,-30Z" 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="1" 
                    transform="translate(100 100) scale(0.8)" 
                  />
                </svg>
              </div>
              
              {/* Circular image with glowing effect */}                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative hero-image-container hero-cursor-target"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="hero-glow animated-circle"></div>
                <div 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#3B82F6] hero-image-border"
                  style={{
                    transition: 'transform 0.2s ease-out',
                    transform: isHovering ? 'scale(1.03)' : 'scale(1)'
                  }}
                >
                  <img 
                    src="/assets/abid_img_1750579704980.jpg" 
                    alt={`${personalInfo.name}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </motion.div>
            </div>
          </div>        </div>
      </div>
    </section>
    </>
  );
}
