# Abid Shaikh - Portfolio Website

![Portfolio Preview](/public/assets/abid_portfolio.jpeg)

<div align="center">
  
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

## 🌟 Overview

This is my personal portfolio website built with React, Vite, and Tailwind CSS. It showcases my projects, skills, and professional experiences as a Full Stack Developer specializing in the MERN stack.

## 🚀 Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark Mode**: Modern dark-themed UI for comfortable viewing
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Project Showcase**: Detailed project cards with links to live demos and repositories
- **Skills Visualization**: Visual representation of technical skills with proficiency levels
- **Blog Section**: Technical articles on web development topics
- **GitHub Integration**: Display of recent GitHub activity
- **Contact Form**: Direct way to connect with me

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome
- **Deployment**: Vercel

## 📋 Project Structure

```
version3/
├── public/               # Static assets
│   ├── assets/           # Images and other media
│   └── resume.pdf        # Downloadable resume
├── src/
│   ├── components/       # React components
│   ├── pages/            # Page components
│   │   └── blogs/        # Blog post pages
│   ├── lib/              # Utilities and config
│   └── assets/           # Local assets
├── index.html            # Entry HTML file
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abid-sh84/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🔧 Configuration

This project uses a central configuration file for personal information, skills, projects, and blog posts. To customize the content:

1. Edit the `src/lib/constants.js` file to update:
   - Personal information
   - Social links
   - Skills and proficiency levels
   - Project details
   - Work experience
   - Blog content

2. Replace images in the `public/assets/` directory with your own.

## 📱 Deployment

This website is deployed using Vercel. To deploy your own version:

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy the project:
   ```bash
   vercel
   ```

## 🎨 Customization

### Themes

The color scheme can be adjusted by modifying the `themeColors` object in `src/lib/constants.js`.

### Adding New Blog Posts

Add new blog posts by updating the `blogPosts` array in `src/lib/constants.js`. Each blog post should include:
- Unique ID
- Title
- Excerpt
- Featured image URL
- Publication date
- Content sections (paragraphs, headings, code blocks, lists)

### Adding New Projects

Add new projects by updating the `projects` array in `src/lib/constants.js`. Include:
- Project title
- Description
- Technologies used
- Live URL
- GitHub repository
- Featured image

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:muhammadabid9326@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shkabid40/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Abid-sh84)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/AbidShaikh550)

---

Designed & Developed with ❤️ by Abid Shaikh
