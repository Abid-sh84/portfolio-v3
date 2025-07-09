import { motion } from 'framer-motion';
import './Preloader.css';

export default function Preloader({ isLoading, onComplete }) {
  return (
    <motion.div
      className="preloader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, delay: isLoading ? 0 : 0.5 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          onComplete();
        }
      }}
      style={{ 
        display: isLoading ? 'flex' : 'flex',
        pointerEvents: isLoading ? 'all' : 'none'
      }}
    >
      {/* Background */}
      <div className="preloader-background" />
      
      {/* Particle Animation Background */}
      <div className="particle-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      {/* Main Logo Animation */}
      <div className="preloader-content">
        <motion.div
          className="preloader-logo"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Letter A with typewriter effect */}
          <motion.span
            className="preloader-letter-a"
            initial={{ 
              opacity: 0,
              rotateX: -90,
              transformPerspective: 1000
            }}
            animate={{ 
              opacity: 1,
              rotateX: 0
            }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8,
              ease: "backOut"
            }}
          >
            A
          </motion.span>
          
          {/* Dot with bounce effect */}
          <motion.span
            className="preloader-dot"
            initial={{ 
              scale: 0,
              rotate: -180,
              opacity: 0
            }}
            animate={{ 
              scale: [0, 1.3, 1],
              rotate: [180, 0, 0],
              opacity: 1
            }}
            transition={{ 
              delay: 1.2, 
              duration: 0.6,
              ease: "backOut"
            }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Orbiting dots */}
        <motion.div
          className="orbit-container"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="orbit-dot"
              style={{
                transform: `rotate(${i * 60}deg) translateX(60px)`
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 1.5 + i * 0.1,
                duration: 0.3
              }}
            />
          ))}
        </motion.div>

        {/* Loading text with wave effect */}
        <motion.div
          className="preloader-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {"Loading...".split("").map((char, i) => (
            <motion.span
              key={i}
              animate={{ 
                y: [0, -8, 0],
                color: ["#cbd5e1", "#3b82f6", "#cbd5e1"]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
