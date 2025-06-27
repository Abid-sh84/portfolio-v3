/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'portfolio-dark': '#0F0F0F',     // Very dark, almost black with a slight blue tint
        'portfolio-primary': '#121212',   // Slightly lighter dark
        'portfolio-secondary': '#1a1a1a', // Dark gray for sections
        'portfolio-accent': '#3B82F6',    // Bright blue accent (similar to the website)
        'portfolio-success': '#3B82F6',   // Same blue for consistency
        'dark': {
          '100': '#0F0F0F',              // Main background
          '200': '#121212',              // Card backgrounds
          '300': '#1a1a1a',              // Section backgrounds
          '400': '#262626',              // Hover states
          '500': '#333333',              // Borders
          'text': '#e0e0e0',             // Main text
          'accent': '#3B82F6'            // Accent blue for buttons/links
        }
      }
    },
  },
  plugins: [],
}
