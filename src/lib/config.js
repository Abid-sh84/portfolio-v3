// Configuration for the application
// Vite automatically injects import.meta.env with variables from .env file

// Log the environment variable (not the full token for security)
console.log('Environment variables loaded:', {
  hasToken: !!import.meta.env.VITE_ACCESS_TOKEN,
  tokenStart: import.meta.env.VITE_ACCESS_TOKEN?.substring(0, 5) + '...'
});

// Export configuration variables
export const config = {
  github: {
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
    username: 'Abid-sh84', // Your GitHub username
  }
};
