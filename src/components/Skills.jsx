import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { skills } from '../lib/constants';
import './SkillsAnimation.css';

export default function Skills() {
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
  // Map skill names to their respective icons
  const skillIcons = {
    // Frontend
    HTML: "fab fa-html5",
    CSS: "fab fa-css3-alt",
    JavaScript: "fab fa-js",
    "React.js": "fab fa-react",
    jQuery: "fab fa-jquery",
    TypeScript: "devicon-typescript-plain",
    Redux: "devicon-redux-original",
    
    // Backend
    "Node.js": "fab fa-node-js",
    "Express.js": "devicon-express-original",
    "RESTful APIs": "fas fa-exchange-alt",
    
    // Database
    MongoDB: "devicon-mongodb-plain",
    MySQL: "devicon-mysql-plain",
    PostgreSQL: "devicon-postgresql-plain",
    
    // Tools
    Git: "fab fa-git-alt",
    GitHub: "fab fa-github",
    Bootstrap: "fab fa-bootstrap",
    "Tailwind CSS": "devicon-tailwindcss-plain",
    "Vue.js": "fab fa-vuejs",
    Firebase: "devicon-firebase-plain",
    Postman: "devicon-postman-plain",
    Webpack: "devicon-webpack-plain"
  };

  // Color map for skill icons
  const skillColors = {
    HTML: "text-orange-600",
    CSS: "text-blue-500",
    JavaScript: "text-yellow-400",
    "React.js": "text-cyan-400",
    jQuery: "text-blue-600",
    TypeScript: "text-blue-600",
    Redux: "text-purple-500",
    
    "Node.js": "text-green-500",
    "Express.js": "text-white",
    "RESTful APIs": "text-purple-400",
    
    MongoDB: "text-green-600",
    MySQL: "text-blue-600",
    PostgreSQL: "text-blue-400",
    
    Git: "text-red-500",
    GitHub: "text-gray-200",
    Bootstrap: "text-purple-600",
    "Tailwind CSS": "text-cyan-500",
    "Vue.js": "text-emerald-500",
    Firebase: "text-orange-500",
    Postman: "text-orange-600",
    Webpack: "text-blue-400"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Combine all skills into a single array
  const allSkills = [...skills];
  // Skill icon component
  const SkillIcon = ({ skill }) => {
    const iconClass = skillIcons[skill.name] || "fas fa-code";
    
    // Check if it's a devicon or font-awesome icon
    const isDevicon = iconClass.startsWith("devicon");
    
    return (
      <div className="skill-icon mx-6 my-4 flex flex-col items-center justify-center">
        <div 
          className={`skill-icon-inner w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${skillColors[skill.name] || "text-[#3B82F6]"} bg-black/40 border border-gray-800/30 mb-2 hover:border-[#3B82F6] hover:scale-110 transition-all duration-300`}
        >
          {isDevicon ? (
            <i className={`${iconClass} text-3xl md:text-4xl`}></i>
          ) : (
            <i className={`${iconClass} text-3xl md:text-4xl`}></i>
          )}
        </div>
        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
      </div>
    );
  };
  return (
    <section id="skills" className="pt-20 pb-10 bg-[#0F0F0F]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#3B82F6]">Skills</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-[#3B82F6] mx-auto"></motion.div>
          <motion.p variants={itemVariants} className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern, responsive web applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >          {/* All Skills in one block with categorized display */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#3B82F6] mr-3">
                <i className="fas fa-laptop-code text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">I am familiar with</h3>
            </div>
            
            <div className="skills-container bg-black/20 border border-gray-800 rounded-lg p-6">
              <div className="fade-left"></div>
              <div className="fade-right"></div>
              
              <div className="overflow-hidden">
                <div className="scroll-left">
                  {[...allSkills, ...allSkills].map((skill, index) => (
                    <SkillIcon key={`skill-${skill.name}-${index}`} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Categorized skills display - alternative view */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="bg-black/20 border border-gray-800 rounded-lg p-6 transition-all hover:border-[#3B82F6]/50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#3B82F6] mr-3">
                    <i className="fas fa-code text-lg"></i>
                  </div>
                  <h4 className="text-lg font-medium text-white">Frontend</h4>
                </div>
                <div className="flex flex-wrap">
                  {allSkills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                    <div key={`frontend-${index}`} className="flex items-center mr-4 mb-3">
                      <i className={`${skillIcons[skill.name] || 'fas fa-code'} ${skillColors[skill.name] || 'text-[#3B82F6]'} mr-2`}></i>
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div className="bg-black/20 border border-gray-800 rounded-lg p-6 transition-all hover:border-[#3B82F6]/50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#3B82F6] mr-3">
                    <i className="fas fa-server text-lg"></i>
                  </div>
                  <h4 className="text-lg font-medium text-white">Backend</h4>
                </div>
                <div className="flex flex-wrap">
                  {allSkills.filter(skill => skill.category === 'backend').map((skill, index) => (
                    <div key={`backend-${index}`} className="flex items-center mr-4 mb-3">
                      <i className={`${skillIcons[skill.name] || 'fas fa-code'} ${skillColors[skill.name] || 'text-[#3B82F6]'} mr-2`}></i>
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Database */}
              <div className="bg-black/20 border border-gray-800 rounded-lg p-6 transition-all hover:border-[#3B82F6]/50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#3B82F6] mr-3">
                    <i className="fas fa-database text-lg"></i>
                  </div>
                  <h4 className="text-lg font-medium text-white">Database</h4>
                </div>
                <div className="flex flex-wrap">
                  {allSkills.filter(skill => skill.category === 'database').map((skill, index) => (
                    <div key={`db-${index}`} className="flex items-center mr-4 mb-3">
                      <i className={`${skillIcons[skill.name] || 'fas fa-database'} ${skillColors[skill.name] || 'text-[#3B82F6]'} mr-2`}></i>
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tools & DevOps */}
              <div className="bg-black/20 border border-gray-800 rounded-lg p-6 md:col-span-2 lg:col-span-3 transition-all hover:border-[#3B82F6]/50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#3B82F6] mr-3">
                    <i className="fas fa-tools text-lg"></i>
                  </div>
                  <h4 className="text-lg font-medium text-white">Tools & DevOps</h4>
                </div>
                <div className="flex flex-wrap">
                  {allSkills.filter(skill => skill.category === 'tools').map((skill, index) => (
                    <div key={`tool-${index}`} className="flex items-center mr-4 mb-3">
                      <i className={`${skillIcons[skill.name] || 'fas fa-wrench'} ${skillColors[skill.name] || 'text-[#3B82F6]'} mr-2`}></i>
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}