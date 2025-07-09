import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubContributions } from '../lib/github-service';
import './GithubActivity.css';

export default function GithubActivity() {
  const calendarRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [contributionData, setContributionData] = useState({
    months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    days: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
    cells: [
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
      new Array(53).fill(0),
    ],
    username: 'Abid-sh84',
    totalContributions: 0,
    avatarUrl: '',
    loading: true,
    error: null
  });
  
  useEffect(() => {
    // Intersection Observer to trigger animations when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Fetch GitHub contributions data
  useEffect(() => {
    const username = 'Abid-sh84'; // Your GitHub username
    
    async function loadContributions() {
      try {
        setContributionData(prevData => ({
          ...prevData,
          loading: true,
          error: null
        }));
        
        const data = await fetchGitHubContributions(username);
        
        setContributionData({
          ...data,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Failed to load GitHub contributions:', error);
        setContributionData(prevData => ({
          ...prevData,
          loading: false,
          error: 'Failed to load GitHub contribution data'
        }));
      }
    }
    
    loadContributions();
  }, []);

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

  return (    
    <section id="github-activity" className="pt-4 pb-20 bg-[#0F0F0F]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-6"
        >
          <motion.div 
            variants={itemVariants} 
            className="flex items-center space-x-3 mb-8"
          >
            <motion.span variants={itemVariants} className="text-[#3B82F6] text-2xl">
              <i className="fab fa-github"></i>
            </motion.span>
            <motion.h3 variants={itemVariants} className="text-xl font-bold">
              I am active on
            </motion.h3>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="github-calendar-container"
        >
          {contributionData.loading ? (
            <motion.div variants={itemVariants} className="text-center py-8">
              <div className="inline-block w-6 h-6 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
              <p className="mt-2 text-gray-300">Loading GitHub contribution data...</p>
            </motion.div>
          ) : contributionData.error ? (
            <motion.div variants={itemVariants} className="text-center py-8 text-red-400">
              <p>{contributionData.error}</p>
              <p className="mt-2 text-sm">Using fallback data instead</p>
            </motion.div>
          ) : (
            <motion.div 
              variants={itemVariants} 
              className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg overflow-auto"
              ref={calendarRef}
            >
              {/* User info section */}
              <div className="flex items-center justify-center mb-6">
                {contributionData.avatarUrl && (
                  <img 
                    src={contributionData.avatarUrl} 
                    alt={`${contributionData.username}'s avatar`}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <h4 className="text-white font-medium">{contributionData.username}</h4>
                  <p className="text-gray-400 text-sm">{contributionData.totalContributions} contributions in the last year</p>
                </div>
              </div>
              
              <div className="custom-github-calendar">
                {/* Contribution grid only */}
                <div className="calendar-grid-container simplified">
                  {/* Contribution grid */}
                  <div className="contribution-grid">
                    {contributionData.cells.map((row, rowIndex) => (
                      <div key={`row-${rowIndex}`} className="grid-row">
                        {row.map((level, cellIndex) => (
                          <div 
                            key={`cell-${rowIndex}-${cellIndex}`} 
                            className={`grid-cell contribution-level-${level}`}
                            title={`${level} contributions on ${new Date().toLocaleDateString()}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Last push information */}
                <div className="last-push-info">
                  {contributionData.lastPushDate ? (
                    <div className="text-white text-sm mt-3">
                      Last push on <span className="text-blue-500">{contributionData.lastPushDate.formatted}</span>
                    </div>
                  ) : (
                    <div className="text-white text-sm mt-3">
                      Last push on <span className="text-blue-500">2 Jul 2025</span>
                    </div>
                  )}
                </div>
                
                {/* Legend */}
                <div className="contribution-legend">
                  <div className="legend-scale">
                    <span>Less</span>
                    <div className="legend-cells">
                      <div className="legend-cell contribution-level-0"></div>
                      <div className="legend-cell contribution-level-1"></div>
                      <div className="legend-cell contribution-level-2"></div>
                      <div className="legend-cell contribution-level-3"></div>
                      <div className="legend-cell contribution-level-4"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Call-to-action text and button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-10 max-w-2xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="https://github.com/Abid-sh84"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-[#3B82F6] text-[#3B82F6] rounded-md hover:bg-[#3B82F6]/10 transition"
              >
                <i className="fab fa-github mr-2"></i>
                See my projects on GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
