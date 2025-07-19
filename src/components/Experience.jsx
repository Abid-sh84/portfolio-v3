import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { experiences } from '../lib/constants';

export default function Experience() {
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
    <section id="experience" className="py-20 bg-portfolio-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-portfolio-accent">Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            My professional journey as a developer.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolio-accent rounded-full hidden md:block opacity-20"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              variants={itemVariants}
              className={`flex flex-col md:flex-row mb-12 last:mb-0 relative ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-portfolio-accent hidden md:block z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-portfolio-dark p-6 rounded-lg shadow-xl border border-portfolio-secondary hover:shadow-portfolio-accent/20 transition-shadow">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-portfolio-accent mb-2">{exp.company}</h4>
                  <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-portfolio-secondary text-portfolio-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
}
