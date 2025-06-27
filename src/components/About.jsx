import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { personalInfo } from '../lib/constants';
import './About.css';

export default function About() {
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
    <section id="about" className="py-20 bg-portfolio-dark" ref={ref} style={{ boxShadow: 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-portfolio-accent">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-portfolio-accent mx-auto"></motion.div>
        </motion.div>        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:col-span-5 flex justify-center"
          >            <motion.div 
              variants={itemVariants}
              className="relative"
            >              <div className="w-full max-w-[250px] md:max-w-md h-auto rounded-lg overflow-hidden mb-4 about-image-container mx-auto">
                <img 
                  src="/assets/abid_img_1750579704980.jpg" 
                  alt={`${personalInfo.name}`} 
                  className="w-full object-contain about-image" 
                  style={{ boxShadow: 'none', aspectRatio: '3/4', maxHeight: '400px' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-portfolio-accent rounded-lg hidden md:block"></div>
            </motion.div>
          </motion.div>          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4 md:col-span-7"
          ><motion.h3 variants={itemVariants} className="text-2xl font-semibold">
              The <span className="text-portfolio-accent">Story</span> Behind The Code
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-gray-300">
             The story behind every line of my code begins with a deep passion for crafting meaningful digital experiences. I specialize in transforming blank screens into responsive, user-friendly interfaces that not only function well but feel intuitive.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-4 bg-black/20 border border-gray-800/50 rounded-lg p-4">
              <p className="text-portfolio-accent italic">
              I build seamless MERN stack web applications with a focus on clean design, interactive UI, and real-world problem solving
              </p>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-300 mt-4">
              Beyond my work with the MERN stack, I explore new technologies and design principles, believing that great software 
              comes from blending technical excellence with human-centered design. My academic foundation at Mumbai University SMT. CHM College, Ulhasnagar 2023 - 2026 (Expected)
              (9.5 CGPA) empowers me to turn challenges into opportunities for growth.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-black/30 border border-gray-700/30 rounded-full text-sm text-gray-300">Problem Solver</span>
              <span className="px-3 py-1 bg-black/30 border border-gray-700/30 rounded-full text-sm text-gray-300">Digital Craftsman</span>
              
              <span className="px-3 py-1 bg-black/30 border border-gray-700/30 rounded-full text-sm text-gray-300">Learner</span>
            </motion.div>            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="/abid_resume (2)_1750578812328.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-md bg-portfolio-accent text-gray-900 font-medium transition hover:bg-opacity-80 inline-flex items-center space-x-2 text-sm"
              >
                <span>See Resume</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
