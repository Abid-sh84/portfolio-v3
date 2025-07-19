import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo, socialLinks } from '../lib/constants';
import './Navigation.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Navigation links with their icons
  const navLinks = [
    { name: 'About', href: '#about', icon: 'fas fa-user' },
    { name: 'Skills', href: '#skills', icon: 'fas fa-code' },
    { name: 'Projects', href: '#projects', icon: 'fas fa-laptop-code' },
    { name: 'Experience', href: '#experience', icon: 'fas fa-briefcase' },
    { name: 'Blogs', href: '#blogs', icon: 'fas fa-feather' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
  ];
  // Handle scroll event to change navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle closing the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-menu-dropdown') && 
          !event.target.closest('button')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);  // Smooth scroll to section
  const scrollToSection = (href) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate to homepage with the section anchor using React Router
      navigate(`/${href}`);
    }
  };

  return (
    <>      {/* Desktop Navigation - Fixed to right side */}      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed right-5 top-[35%] transform -translate-y-[30%] z-50 hidden md:flex flex-col space-y-4 desktop-side-nav"
      >
        {navLinks.map((link) => (          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative nav-icon-wrapper ${
              activeSection === link.href.substring(1) 
                ? 'bg-portfolio-accent text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
            }`}
            aria-label={link.name}
          >
            <i className={`${link.icon} text-lg`}></i>
            <span className="absolute right-full mr-3 px-2 py-1 rounded bg-gray-900 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </motion.nav>

      {/* Top Navigation - Logo and Mobile Menu */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 ${
          isScrolled ? 'bg-portfolio-dark/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/"
                className="text-portfolio-accent font-bold text-2xl md:text-3xl hover:text-white transition-colors"
              >
                A
                <span className="text-white">.</span>
              </Link>
            </div>            {/* Desktop Navigation */}
            <div className="hidden md:block">
              {!isHomePage && (
                <Link
                  to="/"
                  className="text-portfolio-accent border border-portfolio-accent hover:bg-portfolio-accent/10 px-4 py-2 rounded transition-colors"
                >
                  Home
                </Link>
              )}
            </div>            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="text-portfolio-accent border border-portfolio-accent hover:bg-portfolio-accent/10 px-3 py-2 rounded transition-colors flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
              </button>
            </div>
          </div>
        </div>
      </motion.div>      {/* Mobile Navigation - Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-80 z-50 md:hidden bg-portfolio-dark/95 mobile-menu-sidebar backdrop-blur-lg border-r border-gray-800"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center p-6 border-b border-gray-800">
                  <Link 
                    to="/"
                    className="text-portfolio-accent font-bold text-2xl hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    A<span className="text-white">.</span>
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { 
                        e.preventDefault(); 
                        scrollToSection(link.href);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center py-4 px-3 rounded-lg mb-2 transition-all duration-200 ${
                        activeSection === link.href.substring(1) 
                          ? 'text-portfolio-accent bg-portfolio-accent/10 nav-active'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                      }`}
                    >
                      <i className={`${link.icon} text-lg mr-4 w-6 text-center`}></i>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>

                {/* Sidebar Footer */}
                <div className="p-6 border-t border-gray-800">
                  {!isHomePage && (
                    <Link
                      to="/"
                      className="flex items-center justify-center w-full py-3 px-4 text-portfolio-accent border border-portfolio-accent hover:bg-portfolio-accent/10 rounded-lg transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      <i className="fas fa-home text-lg mr-3"></i>
                      <span>Home</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
