import { useRef, useEffect } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetMousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const isNearHeroImage = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas to window size and handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas and context
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const ctx = canvas.getContext('2d');
    
    // Update target position on mouse movement and check proximity to hero image
    const handleMouseMove = (e) => {
      targetMousePosition.current = { x: e.clientX, y: e.clientY };
      
      // Check if cursor is near the hero image
      const heroElement = document.querySelector('.hero-cursor-target');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + 
          Math.pow(e.clientY - centerY, 2)
        );
        
        // Consider cursor "near" if within 300px of center of hero image
        isNearHeroImage.current = distance < 400;
      }
    };
      // If the mouse leaves the window, gradually fade out the cursor effect
    const handleMouseLeave = () => {
      // Instead of immediately hiding, animate to a position off-screen over time
      const fadeOutInterval = setInterval(() => {
        targetMousePosition.current.x += (window.innerWidth * 2 - targetMousePosition.current.x) * 0.05;
        targetMousePosition.current.y += (window.innerHeight * 2 - targetMousePosition.current.y) * 0.05;
        
        // Stop the interval after a short time
        setTimeout(() => clearInterval(fadeOutInterval), 500);
      }, 30);
      
      isNearHeroImage.current = false;
    };

    // Animation function that renders the cursor effect
    const render = () => {
      // Smoothly interpolate between current position and target position
      mousePosition.current.x += (targetMousePosition.current.x - mousePosition.current.x) * 0.1;
      mousePosition.current.y += (targetMousePosition.current.y - mousePosition.current.y) * 0.1;
      
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the glow effect
      const x = mousePosition.current.x;
      const y = mousePosition.current.y;      // Create radial gradient for the cursor effect - larger and softer
      // Increase intensity and adjust color when near the hero image
      const intensity = isNearHeroImage.current ? 0.7 : 0.4;
      const size = isNearHeroImage.current ? 300 : 200;
      
      // Subtly change color when near hero image - more vibrant blue
      const blueValue = isNearHeroImage.current ? 255 : 246;
      const redValue = isNearHeroImage.current ? 59 : 59;
      const greenValue = isNearHeroImage.current ? 150 : 130;
      
      const gradient = ctx.createRadialGradient(x, y, 30, x, y, size);
      gradient.addColorStop(0, `rgba(${redValue}, ${greenValue}, ${blueValue}, ${intensity * 0.6})`);  // Blue glow
      gradient.addColorStop(0.3, `rgba(${redValue}, ${greenValue}, ${blueValue}, ${intensity * 0.3})`);
      gradient.addColorStop(0.6, `rgba(${redValue}, ${greenValue}, ${blueValue}, ${intensity * 0.15})`);
      gradient.addColorStop(1, `rgba(${redValue}, ${greenValue}, ${blueValue}, 0)`);
      
      // Apply the gradient - larger radius
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, isNearHeroImage.current ? 350 : 250, 0, Math.PI * 2);
      ctx.fill();
      
      // Continue the animation loop
      animationFrameId.current = window.requestAnimationFrame(render);
    };
      // Start tracking mouse movements
    window.addEventListener('mousemove', handleMouseMove);
    // handleMouseLeave is replaced by handleMouseLeaveWithCleanup above
    
    // Start animation
    render();
      // Store all intervals for cleanup
    const intervals = [];
    
    // Modified handleMouseLeave that stores created intervals
    const handleMouseLeaveWithCleanup = () => {
      const fadeOutInterval = setInterval(() => {
        targetMousePosition.current.x += (window.innerWidth * 2 - targetMousePosition.current.x) * 0.05;
        targetMousePosition.current.y += (window.innerHeight * 2 - targetMousePosition.current.y) * 0.05;
        
        // Stop the interval after a short time
        setTimeout(() => clearInterval(fadeOutInterval), 500);
      }, 30);
      
      intervals.push(fadeOutInterval);
      isNearHeroImage.current = false;
    };
    
    // Use the modified handler
    window.addEventListener('mouseleave', handleMouseLeaveWithCleanup);
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWithCleanup);
      window.removeEventListener('resize', resizeCanvas);
      
      // Clear any animation frame
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
      
      // Clear all intervals
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ 
        mixBlendMode: 'lighten', 
        filter: 'blur(30px)', 
        opacity: 0.9
      }}
    />
  );
};

export default CursorEffect;
