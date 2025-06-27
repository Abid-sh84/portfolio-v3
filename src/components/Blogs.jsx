import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../lib/constants';

export default function Blogs() {
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
    <section id="blogs" className="py-20 bg-portfolio-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-portfolio-accent">Blog</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            I write about web development, programming tips, and my experiences as a developer.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
        </motion.div>        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <Link to="/blogs">
            <motion.button 
              variants={itemVariants}
              className="px-8 py-3 rounded-md border-2 border-portfolio-accent text-portfolio-accent font-medium transition hover:bg-portfolio-accent/10 inline-flex items-center"
            >
              <i className="fas fa-book-open mr-2"></i>
              View All Blog Posts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
