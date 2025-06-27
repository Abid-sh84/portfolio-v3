import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { blogPosts } from '../../lib/constants';
import { SyntaxHighlighter, vscDarkPlus } from '../../lib/syntax-highlighter';

export default function MernStack() {
  const blog = blogPosts.find(post => post.id === 'mern-stack');

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const pageVariants = {
    initial: { opacity: 0 },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="in"
            variants={pageVariants}
            className="mb-10"
          >
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/blogs" 
                className="px-4 py-2 rounded-md border border-portfolio-accent text-portfolio-accent text-sm transition hover:bg-portfolio-accent/10 flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Blogs
              </Link>
              
              <span className="text-gray-400 text-sm">{blog.date}</span>
            </div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{blog.title}</h1>
              <div className="w-20 h-1 bg-portfolio-accent mb-6"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-accent flex items-center justify-center text-white mr-3">
                  <span>{blog.author.charAt(0)}</span>
                </div>
                <span className="text-gray-300">{blog.author}</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-10 h-96 overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              {blog.content.map((section, index) => {
                if (section.type === 'paragraph') {
                  return (
                    <motion.p 
                      key={index} 
                      variants={itemVariants}
                      className="mb-6 text-gray-300"
                    >
                      {section.text}
                    </motion.p>
                  );
                }
                
                if (section.type === 'heading') {
                  return (
                    <motion.h2 
                      key={index} 
                      variants={itemVariants}
                      className="text-2xl font-bold mt-10 mb-4 text-white"
                    >
                      {section.text}
                    </motion.h2>
                  );
                }
                
                if (section.type === 'list') {
                  return (
                    <motion.ul 
                      key={index} 
                      variants={itemVariants}
                      className="list-disc pl-6 mb-8 text-gray-300 space-y-2"
                    >
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  );
                }
                
                if (section.type === 'code') {
                  return (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      className="mb-8"
                    >
                      <SyntaxHighlighter
                        language={section.language}
                        style={vscDarkPlus}
                        className="rounded-md"
                        showLineNumbers
                      >
                        {section.text}
                      </SyntaxHighlighter>
                    </motion.div>
                  );
                }
                
                return null;
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 border-t border-gray-800 pt-10"
          >
            <h3 className="text-xl font-semibold mb-6">Read More</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(post => post.id !== blog.id)
                .slice(0, 2)
                .map(post => (
                  <Link
                    key={post.id}
                    to={post.url}
                    className="bg-portfolio-primary rounded-lg overflow-hidden border border-portfolio-secondary hover:border-portfolio-accent transition-all duration-300"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-portfolio-accent text-sm mb-2">{post.date}</p>
                      <h3 className="text-lg font-semibold mb-2 text-white">{post.title}</h3>
                      <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
