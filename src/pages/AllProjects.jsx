import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { projects } from '../lib/constants';

export default function AllProjects() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-dark-text">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <motion.div 
              initial="initial"
              animate="in"
              variants={pageVariants}
            >
              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold"
              >
                All <span className="text-portfolio-accent">Projects</span>
              </motion.h1>
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-portfolio-accent mt-4 mb-2"
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >              <Link 
                to="/" 
                className="px-4 py-2 rounded-md border border-portfolio-accent text-portfolio-accent text-sm transition hover:bg-portfolio-accent/10 flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial="initial"
            animate="in"
            variants={pageVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-portfolio-primary rounded-lg overflow-hidden shadow-xl border border-portfolio-secondary hover:shadow-portfolio-accent/20 transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.duration}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-portfolio-secondary text-portfolio-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-portfolio-accent text-gray-900 text-sm font-medium transition hover:bg-opacity-80"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md border border-portfolio-accent text-portfolio-accent text-sm transition hover:bg-portfolio-accent/10"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
