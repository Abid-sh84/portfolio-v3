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
      </motion.nav>      {/* Top Navigation - Logo, Resume and Mobile Menu */}
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
            </div>            {/* Desktop Resume Button */}
            <div className="hidden md:block">
              <a 
                href="/abid_resume (2)_1750578812328.pdf"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-portfolio-accent border border-portfolio-accent hover:bg-portfolio-accent/10 px-4 py-2 rounded transition-colors"
              >
                Resume
              </a>
              {!isHomePage && (
                <Link
                  to="/"
                  className="text-portfolio-accent border border-portfolio-accent hover:bg-portfolio-accent/10 px-4 py-2 rounded transition-colors ml-4"
                >
                  Home
                </Link>
              )}
            </div>{/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="text-portfolio-accent border border-portfolio-accent hover:bg-portfolio-accent/10 px-4 py-2 rounded transition-colors"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </motion.div>      {/* Mobile Navigation - Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-50 md:hidden bg-portfolio-dark/95 mobile-menu-dropdown"
          >
            <div className="px-4 py-3 border-t border-gray-800 backdrop-blur-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(link.href);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center py-3 transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? 'text-portfolio-accent nav-active'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <i className={`${link.icon} text-lg mr-3 w-6 text-center`}></i>
                  <span>{link.name}</span>
                </a>
              ))}
              
              {/* Mobile Resume Button */}              <a 
                href="/abid_resume (2)_1750578812328.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center py-3 text-portfolio-accent"
                onClick={() => setMenuOpen(false)}
              >
                <i className="fas fa-file-alt text-lg mr-3 w-6 text-center"></i>
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
