/**
 * Portfolio Data — Abid Shaikh
 */

export const personalInfo = {
  name: "Abid Shaikh",
  title: "Full Stack Developer",
  description:
    "Full Stack Developer with strong expertise in the MERN stack and hands-on experience building and deploying production-ready web applications. Passionate about integrating AI into web solutions and creating scalable, user-friendly products. Skilled in REST APIs, real-time communication, and modern deployment platforms.",
  email: "muhammadabid9326@gmail.com",
  location: "Thane, India",
  profileImage: "/abid_img_1750579704980.jpg",
};

export const socialLinks = {
  github: "https://github.com/Abid-sh84",
  linkedin: "https://www.linkedin.com/in/shkabid40/",
  twitter: "https://x.com/AbidShaikh550",
  email: `mailto:muhammadabid9326@gmail.com`,
};

export const skills = {
  Languages: [
    { name: "JavaScript" },
    { name: "Python" },
  ],
  "Frameworks & Technologies": [
    { name: "React.js" },
    { name: "Node.js" },
    { name: "Express.js" },
  ],
  Databases: [
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
  ],
  "APIs & Communication": [
    { name: "REST APIs" },
    { name: "WebSockets" },
    { name: "FCM" },
  ],
  "AI & Tools": [
    { name: "Claude (Anthropic)" },
    { name: "Prompt Engineering" },
    { name: "VS Code" },
    { name: "Postman" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Vercel" },
    { name: "Render" },
    { name: "Railway" },
  ],
};

export const projects = [
  {
    id: "quickbite",
    title: "QuickBite",
    subtitle: "Food Ordering + Seller Dashboard",
    status: "In Development",
    stack: "MERN + Socket.IO + Razorpay",
    description:
      "A full-stack food ordering platform with multi-step seller onboarding, real-time order notifications, and a comprehensive admin dashboard. Built to handle complex business workflows with scalable architecture.",
    highlights: [
      "Multi-step seller onboarding (registration, email OTP, restaurant/owner/docs) with admin approval flow, backed by Seller/SellerSettings models",
      "Online ordering with full order state machine, menu CRUD with image upload, Razorpay one-time payments",
      "Real-time order notifications via Socket.IO + FCM",
      "React dashboard with revenue/order charts, recent orders, and menu/order management",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Razorpay", "FCM"],
    liveUrl: "https://quickbite.abids.tech/",
    githubUrl: "#",
  },
  {
    id: "eduprompt-ai",
    title: "EduPrompt AI",
    subtitle: "AI Learning & Assessment Platform",
    status: "Deployed",
    stack: "MERN + Clerk + Vite",
    description:
      "An AI-powered study platform that ingests PDFs, generates contextual questions, and conducts live viva exams with eye/lip attention tracking. Integrates Gemini AI and Pinecone vector search for intelligent tutoring.",
    highlights: [
      "AI-driven study workspace ingesting PDFs, generating contextual questions with Gemini + Pinecone vector search",
      "Live viva exams with eye/lip attention tracking, scoring dashboards, automated performance reports",
      "Secure auth via Clerk, subscription/payments, responsive React UI",
      "Deployed backend/frontend on Vercel with production-ready configs",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Gemini AI", "Pinecone", "Vite"],
    liveUrl: "https://edprompt.vercel.app/",
    githubUrl: "#",
  },
];

export const experience = [
  {
    id: "zidio-intern",
    title: "Backend Developer Intern",
    company: "Zidio Development",
    duration: "Mar 2025 – Apr 2025",
    type: "Internship",
    description:
      "Contributed to backend development of a production web application. Built and tested RESTful APIs, implemented user authentication flows, and collaborated with the frontend team to integrate APIs seamlessly.",
    highlights: [
      "Developed RESTful APIs using Node.js and Express",
      "Implemented authentication and core backend features",
      "Worked with MongoDB for database operations",
      "Collaborated with frontend team using Git & GitHub",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
];

export const education = [
  {
    id: "mumbai-university",
    degree: "Bachelor of Science in Computer Science",
    institution: "Mumbai University",
    duration: "Jun 2023 – Apr 2026",
    cgpa: "8.65 / 10",
    status: "Pursuing",
    description:
      "Pursuing a BSc in Computer Science with a focus on software development, data structures, and algorithms. Consistently maintaining strong academic performance while working on real-world development projects.",
    coursework: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Databases",
      "Discrete Mathematics",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];
