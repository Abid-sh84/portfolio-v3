import { motion } from 'framer-motion'
import { Mail, MapPin, Code2 } from 'lucide-react'
import { personalInfo, socialLinks } from '@/lib/constants'
import GithubActivity from './GithubActivity'

export default function About() {
  return (
    <section id="about" className="screen-line">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Section heading */}
        <motion.h2
          className="page-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.h2>

        {/* Rich bullet list */}
        <motion.ul
          className="about-list"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <li>
            <strong>Full Stack Developer</strong> with hands-on experience building production-ready web
            applications; started with the <strong>MERN stack</strong> and expanded into real-time systems,
            AI integration, and cloud deployment.
          </li>

          <li>
            Expertise in{' '}
            <strong>React.js, Node.js, Express, MongoDB</strong>, and{' '}
            <strong>Socket.IO</strong>; building scalable web applications, real-time features,
            and AI-powered products.
          </li>

          <li>
            Currently pursuing{' '}
            <strong>BSc Computer Science</strong> from Mumbai University (CGPA: <strong>8.65</strong>);
            combining academic knowledge with practical, real-world development experience.
          </li>

          <li>
            Creator of <strong>EduPrompt AI</strong>: AI-powered study and viva platform
            <ul>
              <li>
                AI-driven workspace ingesting PDFs, generating contextual questions with{' '}
                <strong>Gemini AI</strong> + <code>Pinecone</code> vector search
              </li>
              <li>
                Live viva exams with eye/lip attention tracking, scoring dashboards,
                automated performance reports
              </li>
              <li>
                Secure auth via <code>Clerk</code>, subscription/payments, deployed on{' '}
                <a href="https://edprompt.vercel.app/" target="_blank" rel="noreferrer" className="link-green">
                  Vercel
                </a>
              </li>
            </ul>
          </li>

          <li>
            <strong>Passionate</strong> about integrating AI capabilities into web applications
            — from conversational tutoring and vector search to real-time monitoring. Currently
            exploring <strong>System Design</strong> and aiming to build impactful, production-grade products.
          </li>

          <li>
            <strong>Mission:</strong> Creating software that delivers exceptional user experiences
            while constantly adapting to stay at the forefront of technology.
          </li>
        </motion.ul>

        {/* GitHub Activity Calendar */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GithubActivity username="Abid-sh84" />
        </motion.div>

      </div>
    </section>
  )
}
