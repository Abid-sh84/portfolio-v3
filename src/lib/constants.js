/**
 * Personal information, projects, skills, experience and blog data for your portfolio
 */

export const personalInfo = {
  name: "Abid Shaikh",
  title: "Full Stack Developer",
  subtitle: "MERN Stack Enthusiast",
  email: "muhammadabid9326@gmail.com",
  phone: "+91 8451928440",
  location: "Thane, India 400612",
  description: "Passionate about crafting user-friendly, intuitive web experiences using modern web technologies. Skilled in building responsive interfaces and dynamic applications with the MERN stack, focused on delivering seamless and efficient user interactions.",
  profileImage: "/abid_img_1750579704980.jpg" // Adjust path as needed
};

export const socialLinks = {
  github: "https://github.com/Abid-sh84",
  linkedin: "https://www.linkedin.com/in/shkabid40/",
  twitter: "https://x.com/shkabid40",
  discord: "https://discord.com/users/1288153530892423199",
  email: `mailto:${personalInfo.email}`,
  phone: `tel:${personalInfo.phone}`
};

export const skills = [
  // Frontend
  { name: "HTML", level: 85, category: "frontend", icon: "fab fa-html5" },
  { name: "CSS", level: 85, category: "frontend", icon: "fab fa-css3-alt" },
  { name: "JavaScript", level: 80, category: "frontend", icon: "fab fa-js" },
  { name: "React.js", level: 75, category: "frontend", icon: "fab fa-react" },
  { name: "Vue.js", level: 60, category: "frontend", icon: "fab fa-vuejs" },
  { name: "Bootstrap", level: 80, category: "frontend", icon: "fab fa-bootstrap" },
  { name: "Tailwind CSS", level: 75, category: "frontend", icon: "fas fa-wind" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "fab fa-node-js" },
  { name: "Express.js", level: 80, category: "backend", icon: "fas fa-server" },
  { name: "RESTful APIs", level: 75, category: "backend", icon: "fas fa-exchange-alt" },
  
  // Database
  { name: "MongoDB", level: 80, category: "database", icon: "fas fa-database" },
  { name: "MySQL", level: 75, category: "database", icon: "fas fa-database" },
  { name: "PostgreSQL", level: 75, category: "database", icon: "fas fa-database" },
  
  // Tools & DevOps
  { name: "Git", level: 85, category: "tools", icon: "fab fa-git-alt" },
  { name: "Firebase", level: 70, category: "tools", icon: "fas fa-fire" },
  { name: "Postman", level: 75, category: "tools", icon: "fas fa-paper-plane" },
  { name: "GitHub", level: 80, category: "tools", icon: "fab fa-github" },
  { name: "Webpack", level: 65, category: "tools", icon: "fas fa-cube" },
   { name: "Netlify", level: 75, category: "tools", icon: "devicon-netlify-plain" },
  { name: "Vercel", level: 80, category: "tools", icon: "devicon-vercel-plain" },
  { name: "Railway", level: 75, category: "tools", icon: "devicon-railway-plain" },
  { name: "Render", level: 75, category: "tools", icon: "devicon-render-plain" },

];

export const projects = [  {
    id: "ecommerce-fashion",
    title: "E-commerce Fashion Store",
    description: "Built a responsive full-stack E-commerce Fashion Store using the MERN stack with user authentication, shopping cart, and admin features. Integrated PayPal for secure payments and deployed on Vercel.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PayPal API"],
    liveUrl: "https://e-commerce-fashion-store-ykdu.vercel.app/",
    githubUrl: "https://github.com/Abid-sh84/FashionStore",
    imageUrl: "/assets/fashion_store.jpeg",
    duration: "April 16 - May 6, 2025"
  },  {
    id: "banking-system",
    title: "Basic Banking System",
    description: "Developed a web application that simulates basic banking operations such as viewing customer information, transferring money, and viewing transaction history. Project completed as part of The Sparks Foundation internship.",
    technologies: ["Vue+vite", "Node.js", "Express", "Postgresql","Openrouter API","Deepseek"],
    liveUrl: "https://banking-system-iota-khaki.vercel.app/",
    githubUrl: "https://github.com/Abid-sh84/Banking-system",
    imageUrl: "/assets/banking_system.jpeg",
    duration: "May 15 - June 15, 2025"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive portfolio website to showcase my projects, skills, and experience. Implemented smooth animations and modern UI components for an engaging user experience.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/assets/abid_portfolio.jpeg",
    duration: "February 10 - February 20, 2025"
  }
];

export const experiences = [
  {
    id: "internship-2025-zidio",
    title: "Backend Developer Intern",
    company: "Zidio Development",
    duration: "March 25 - April 25, 2025",
    description: "Completed a 1-month backend-focused web development internship. Built RESTful APIs, handled user authentication, and implemented core features like product and order management. Collaborated with the frontend team and used Git for version control.",
    technologies: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Git"]
  }
];

export const blogPosts = [
  {
    id: "react-hooks",
    title: "Understanding React Hooks",
    excerpt: "A comprehensive guide to React hooks and how they can be used to create cleaner, more maintainable code.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    date: "June 10, 2025",
    url: "/blogs/react-hooks",
    content: [
      {
        type: "paragraph",
        text: "React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They've completely revolutionized how we write React components, making functional components just as powerful as class components."
      },
      {
        type: "heading",
        text: "Why Hooks Matter"
      },
      {
        type: "paragraph",
        text: "Before hooks, you had to convert your functional component to a class component as soon as you needed state or lifecycle methods. This often led to complex components that were difficult to understand and test. Hooks solve this problem by allowing you to use React features directly in functional components."
      },
      {
        type: "code",
        language: "jsx",
        text: `// Before hooks (Class component)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`
      },
      {
        type: "code",
        language: "jsx",
        text: `// With hooks (Functional component)
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
      },
      {
        type: "heading",
        text: "Common React Hooks"
      },
      {
        type: "paragraph",
        text: "React provides several built-in hooks that cover most use cases. Here are the most commonly used ones:"
      },
      {
        type: "list",
        items: [
          "useState: For managing state in a functional component",
          "useEffect: For handling side effects like data fetching, subscriptions, or DOM manipulations",
          "useContext: For consuming React context within a functional component",
          "useReducer: An alternative to useState for complex state logic",
          "useCallback: For memoizing functions to prevent unnecessary re-renders",
          "useMemo: For memoizing computed values to optimize performance",
          "useRef: For creating a mutable reference that persists across renders"
        ]
      },
      {
        type: "heading",
        text: "Building Custom Hooks"
      },
      {
        type: "paragraph",
        text: "One of the most powerful features of hooks is the ability to create custom hooks. This allows you to extract component logic into reusable functions. Custom hooks let you hide complex logic behind a simple interface, making your components cleaner and more focused."
      },
      {
        type: "code",
        language: "jsx",
        text: `// A custom hook for handling form input
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return {
    value,
    onChange: handleChange
  };
}`
      },
      {
        type: "paragraph",
        text: "With this custom hook, handling form inputs becomes much simpler:"
      },
      {
        type: "code",
        language: "jsx",
        text: `function SignupForm() {
  const name = useInput('');
  const email = useInput('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name.value);
    console.log('Email:', email.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" {...name} />
      <input type="email" placeholder="Email" {...email} />
      <button type="submit">Sign Up</button>
    </form>
  );
}`
      },
      {
        type: "heading",
        text: "Rules of Hooks"
      },
      {
        type: "paragraph",
        text: "To ensure hooks work correctly, you need to follow two important rules:"
      },
      {
        type: "list",
        items: [
          "Only call hooks at the top level of your component or custom hook. Don't call hooks inside loops, conditions, or nested functions.",
          "Only call hooks from React function components or custom hooks, not regular JavaScript functions."
        ]
      },
      {
        type: "paragraph",
        text: "Following these rules ensures that state is preserved correctly between function calls and that all hooks are called in the same order each time a component renders."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "React Hooks have transformed how we write React applications, making functional components the preferred way to build UI. They allow us to write more concise, testable, and reusable code while maintaining the full power of React. Whether you're building a small component or a large application, hooks provide the tools you need to create great user experiences."
      }
    ],
    author: "Abid Shaikh"
  },
  {
    id: "mern-stack",
    title: "Getting Started with MERN Stack",
    excerpt: "Learn how to build full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    date: "May 25, 2025",
    url: "/blogs/mern-stack",
    content: [
      {
        type: "paragraph",
        text: "The MERN stack is a popular JavaScript stack that makes building full-stack web applications more efficient. It combines MongoDB, Express.js, React.js, and Node.js to create a complete development environment for building modern web applications."
      },
      {
        type: "heading",
        text: "What is MERN Stack?"
      },
      {
        type: "paragraph",
        text: "MERN is an acronym that stands for MongoDB, Express.js, React.js, and Node.js. Each technology serves a specific purpose in the application stack:"
      },
      {
        type: "list",
        items: [
          "MongoDB: A NoSQL database that stores data in flexible, JSON-like documents",
          "Express.js: A web application framework for Node.js that simplifies building APIs",
          "React.js: A JavaScript library for building user interfaces",
          "Node.js: A JavaScript runtime environment for executing server-side code"
        ]
      },
      {
        type: "paragraph",
        text: "Using these technologies together allows you to build applications with JavaScript from front to back, making development more consistent and efficient."
      },
      {
        type: "heading",
        text: "Setting Up Your Development Environment"
      },
      {
        type: "paragraph",
        text: "Before diving into MERN stack development, you need to set up your development environment. Here's what you need to install:"
      },
      {
        type: "list",
        items: [
          "Node.js and npm: Download and install from nodejs.org",
          "MongoDB: Install MongoDB Community Edition from mongodb.com",
          "Code Editor: Visual Studio Code is recommended for its excellent JavaScript support"
        ]
      },
      {
        type: "heading",
        text: "Creating Your First MERN Application"
      },
      {
        type: "paragraph",
        text: "Let's walk through setting up a simple MERN application. We'll create a basic structure with a backend API and a React frontend."
      },
      {
        type: "heading",
        text: "1. Setting Up the Backend"
      },
      {
        type: "code",
        language: "bash",
        text: `# Create project directory
mkdir mern-app
cd mern-app

# Initialize backend
mkdir backend
cd backend
npm init -y

# Install dependencies
npm install express mongoose cors dotenv

# Create a basic server.js file
touch server.js`
      },
      {
        type: "paragraph",
        text: "Now, let's create a basic Express server with MongoDB connection:"
      },
      {
        type: "code",
        language: "javascript",
        text: `// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Express setup
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('MERN Stack API is running!');
});

// Start server
app.listen(port, () => {
  console.log(\`Server is running on port: \${port}\`);
});`
      },
      {
        type: "heading",
        text: "2. Setting Up the Frontend"
      },
      {
        type: "paragraph",
        text: "Now let's create a React frontend using Create React App:"
      },
      {
        type: "code",
        language: "bash",
        text: `# Navigate back to the root directory
cd ..

# Create React app
npx create-react-app frontend

# Navigate to frontend directory
cd frontend

# Install additional dependencies
npm install axios react-router-dom`
      },
      {
        type: "paragraph",
        text: "Let's create a simple component to fetch data from our API:"
      },
      {
        type: "code",
        language: "jsx",
        text: `// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>MERN Stack Application</h1>
      <p>{message}</p>
    </div>
  );
}

export default Home;`
      },
      {
        type: "heading",
        text: "3. Connecting Frontend and Backend"
      },
      {
        type: "paragraph",
        text: "To connect your frontend and backend, you'll use axios to make HTTP requests from React to your Express API. Make sure your backend is running on a different port than your React app to avoid conflicts."
      },
      {
        type: "paragraph",
        text: "For development, you can run both servers separately. For production, you might want to serve your React app from your Express server."
      },
      {
        type: "heading",
        text: "4. Adding MongoDB Models"
      },
      {
        type: "paragraph",
        text: "Let's create a simple MongoDB model for your application:"
      },
      {
        type: "code",
        language: "javascript",
        text: `// backend/models/item.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;`
      },
      {
        type: "heading",
        text: "5. Creating API Routes"
      },
      {
        type: "paragraph",
        text: "Now let's create routes to perform CRUD operations with our model:"
      },
      {
        type: "code",
        language: "javascript",
        text: `// backend/routes/items.js
const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newItem = new Item({
    name,
    description
  });

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;`
      },
      {
        type: "heading",
        text: "Best Practices for MERN Stack Development"
      },
      {
        type: "list",
        items: [
          "Organize your code with a clear folder structure",
          "Use environment variables for configuration",
          "Implement proper error handling on both frontend and backend",
          "Add authentication and authorization for secure applications",
          "Write tests for your components and API endpoints",
          "Optimize your application for performance"
        ]
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "The MERN stack provides a powerful set of technologies for building modern web applications. With MongoDB, Express.js, React.js, and Node.js, you have everything you need to create full-featured applications with JavaScript. As you continue learning, explore more advanced topics like authentication, deployment, and state management to take your MERN stack applications to the next level."
      }
    ],
    author: "Abid Shaikh"
  },
  {
    id: "tailwind-css",
    title: "Why I Love Tailwind CSS",
    excerpt: "Exploring the benefits of utility-first CSS frameworks and how Tailwind CSS can improve your workflow.",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    date: "April 18, 2025",
    url: "/blogs/tailwind-css",
    content: [
      {
        type: "paragraph",
        text: "When I first encountered Tailwind CSS, I was skeptical. The utility-first approach seemed verbose and counterintuitive after years of working with semantic CSS and BEM methodology. However, after using it on several projects, I've become a devoted fan. Here's why Tailwind CSS has become my go-to CSS framework."
      },
      {
        type: "heading",
        text: "What is Tailwind CSS?"
      },
      {
        type: "paragraph",
        text: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Unlike component-based frameworks like Bootstrap or Material UI, Tailwind doesn't provide pre-designed components. Instead, it gives you low-level utility classes that you can combine to build unique designs."
      },
      {
        type: "code",
        language: "html",
        text: `<!-- A simple card using Tailwind CSS -->
<div class="bg-white rounded-lg shadow-md p-6 m-4 max-w-sm">
  <h2 class="text-xl font-bold mb-2 text-gray-800">Card Title</h2>
  <p class="text-gray-600">This is a simple card built with Tailwind CSS utility classes.</p>
  <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
    Learn More
  </button>
</div>`
      },
      {
        type: "heading",
        text: "The Benefits of Utility-First CSS"
      },
      {
        type: "heading",
        text: "1. Speed and Productivity"
      },
      {
        type: "paragraph",
        text: "One of the biggest advantages of Tailwind is the speed of development. You can build complex layouts without writing a single line of CSS. Everything happens right in your HTML with utility classes, which means you don't have to switch between files or think about class naming conventions."
      },
      {
        type: "heading",
        text: "2. Consistent Design System"
      },
      {
        type: "paragraph",
        text: "Tailwind provides a well-thought-out design system with consistent spacing, colors, typography, and more. This ensures visual consistency throughout your project and makes it easier to maintain a coherent design language."
      },
      {
        type: "code",
        language: "html",
        text: `<!-- Consistent spacing and colors -->
<div class="space-y-4">
  <div class="bg-blue-100 p-4 rounded">Item 1</div>
  <div class="bg-blue-100 p-4 rounded">Item 2</div>
  <div class="bg-blue-100 p-4 rounded">Item 3</div>
</div>`
      },
      {
        type: "heading",
        text: "3. Responsive Design Made Easy"
      },
      {
        type: "paragraph",
        text: "Tailwind's responsive modifiers make it incredibly simple to build responsive layouts. You can apply different styles at different breakpoints directly in your HTML without writing complex media queries."
      },
      {
        type: "code",
        language: "html",
        text: `<!-- Responsive layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-200 p-4 rounded">Item 1</div>
  <div class="bg-gray-200 p-4 rounded">Item 2</div>
  <div class="bg-gray-200 p-4 rounded">Item 3</div>
</div>`
      },
      {
        type: "heading",
        text: "4. Customization and Flexibility"
      },
      {
        type: "paragraph",
        text: "Despite being a framework, Tailwind is incredibly flexible. You can customize every aspect of it through the tailwind.config.js file, from colors and spacing to breakpoints and variants."
      },
      {
        type: "code",
        language: "javascript",
        text: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
        'brand-gray': '#e5e7eb',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      borderRadius: {
        'xl': '1rem',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
}`
      },
      {
        type: "heading",
        text: "5. Optimized Production Builds"
      },
      {
        type: "paragraph",
        text: "Tailwind uses PurgeCSS to remove unused styles in production, resulting in very small final CSS files. This means you can use all of Tailwind's utility classes during development without worrying about file size in production."
      },
      {
        type: "heading",
        text: "Common Criticisms and How to Address Them"
      },
      {
        type: "heading",
        text: "1. 'HTML Looks Messy'"
      },
      {
        type: "paragraph",
        text: "One common criticism is that Tailwind makes HTML look cluttered with many classes. While this is true, modern component frameworks like React, Vue, or Angular make this less of an issue since your components are already split into smaller, more manageable pieces."
      },
      {
        type: "heading",
        text: "2. 'It's Not Semantic'"
      },
      {
        type: "paragraph",
        text: "Some argue that utility classes aren't semantic. However, HTML elements already provide semantics (like <nav>, <article>, <button>). CSS classes are primarily for styling, and utility classes excel at this purpose."
      },
      {
        type: "heading",
        text: "3. 'It's Hard to Make Changes'"
      },
      {
        type: "paragraph",
        text: "For large-scale changes, Tailwind's @apply directive allows you to extract repeated utility patterns into custom CSS classes. You can also use components in frameworks like React to encapsulate and reuse UI patterns."
      },
      {
        type: "code",
        language: "css",
        text: `/* Using @apply to create a button component */
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded;
}`
      },
      {
        type: "heading",
        text: "Tips for Getting Started with Tailwind"
      },
      {
        type: "list",
        items: [
          "Start with the official documentation, which is excellent and comprehensive",
          "Use the Tailwind CSS IntelliSense extension for VS Code for autocomplete and suggestions",
          "Explore the Tailwind UI component library for inspiration and examples",
          "Use the Tailwind Play CDN for quick experiments",
          "Learn keyboard shortcuts in your editor to speed up duplicate/edit operations"
        ]
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Tailwind CSS has revolutionized how I approach CSS. It provides a perfect balance of structure and flexibility, allowing for rapid development without sacrificing design quality or customization. If you haven't tried it yet, I highly recommend giving it a chance on your next project. The learning curve is short, and the productivity gains are substantial."
      }
    ],
    author: "Abid Shaikh"
  }
];

// Dark Theme Colors
export const themeColors = {
  dark: {
    background: {
      primary: '#0F0F0F',       // Very dark, almost black background
      secondary: '#121212',     // Slightly lighter dark
      tertiary: '#1a1a1a',      // Section backgrounds
      card: '#262626',          // Card backgrounds
      hover: '#333333'          // Hover states
    },
    text: {
      primary: '#e0e0e0',       // Main text
      secondary: '#a0a0a0',     // Secondary text
      accent: '#3B82F6'         // Blue accent color for interactive elements
    },
    border: {
      primary: '#333333',
      accent: '#3B82F6'
    },
    button: {
      background: '#1a1a1a',
      text: '#e0e0e0',
      hover: '#262626'
    }
  }
};
