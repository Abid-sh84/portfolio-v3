import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { blogPosts } from '../lib/constants';

export default function AllBlogs() {
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
                All <span className="text-portfolio-accent">Blog Posts</span>
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
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-portfolio-primary rounded-lg overflow-hidden shadow-xl border border-portfolio-secondary hover:shadow-portfolio-accent/20 transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-portfolio-accent text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-white">{post.title}</h3>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>                  <Link
                    to={post.url}
                    className="text-portfolio-accent hover:text-white transition-colors flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
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
