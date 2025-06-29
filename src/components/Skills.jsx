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
    Webpack: "devicon-webpack-plain",
    Netlify: "devicon-netlify-plain",
    Vercel: "devicon-vercel-plain",
    Railway: "devicon-railway-plain",
    Render: "devicon-render-plain"
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
    Webpack: "text-blue-400",
    Netlify: "text-teal-400",
    Vercel: "text-gray-200",
    Railway: "text-purple-400",
    Render: "text-blue-300"
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
    
    // Special handling for deployment platforms
    const renderDeploymentPlatformIcon = () => {
      switch(skill.name) {
        case "Netlify":
          return <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22.579 11.36c.151.057.303.105.454.162a.253.253 0 0 1 .136.329l-1.313 2.316-.161.286c-.057.103-.2.142-.313.103a4.813 4.813 0 0 1-.756-.329.198.198 0 0 1-.094-.275l1.805-2.505c.057-.085.151-.124.242-.088zm-3.026-2.316a.243.243 0 0 1 .048-.205l1.142-1.412a.2.2 0 0 1 .303-.021c.596.624 1.037 1.385 1.313 2.222a.198.198 0 0 1-.094.246l-2.158.915c-.104.039-.227 0-.284-.094a4.779 4.779 0 0 1-.36-.663.199.199 0 0 0-.027-.035c.022-.319.057-.638.117-.953zm-4.77 8.161v-.02a.77.77 0 0 1 .767-.767c.432.001.782.35.784.782a.776.776 0 0 1-.784.767.77.77 0 0 1-.767-.762zm-.813-1.468c0-.104.066-.198.17-.225h.009c.188-.052.358-.152.492-.286.054-.072.141-.11.227-.103.132.016.227.136.227.268v2.523c0 .15-.123.272-.273.272h-.001a.273.273 0 0 1-.273-.272v-2.177zm-.559-1.184a.273.273 0 0 1 .273-.273.273.273 0 0 1 .273.273v.313a.273.273 0 0 1-.273.273.273.273 0 0 1-.273-.273v-.313zm0-1.184a.273.273 0 0 1 .273-.273.273.273 0 0 1 .273.273v.313a.273.273 0 0 1-.546 0v-.313zm-.025-1.082c.008-.103.095-.18.198-.17.103.009.18.095.17.198l-.028.313c-.008.104-.094.18-.198.17-.103-.009-.18-.095-.17-.198l.028-.313zm-.215-.983c.026-.1.129-.16.229-.135.1.026.16.129.134.229l-.076.3c-.026.1-.129.161-.229.135-.1-.026-.16-.129-.134-.229l.076-.3zm-.379-.898c.045-.092.156-.131.249-.088.092.044.131.156.088.248l-.123.274c-.044.092-.156.131-.248.088-.092-.044-.131-.156-.088-.248l.122-.274zm-.53-.755c.061-.082.177-.099.259-.037.082.061.099.177.037.259l-.17.227c-.061.083-.177.099-.259.037-.083-.061-.099-.176-.037-.259l.17-.227zm-2.167-2.191c.298-.102.603-.183.907-.244.057-.009.114.012.151.057a.198.198 0 0 1 0 .169l-.795 1.79c-.038.094-.151.14-.246.103a5.075 5.075 0 0 0-.859-.179c-.104-.009-.18-.104-.17-.207l.784-1.375c.031-.058.087-.094.15-.094a.16.16 0 0 1 .078.019v-.039zm-1.184.564h.02c.32.002.637.039.946.113.094.023.161.113.142.215l-.34 1.516c-.02.094-.104.16-.199.16-.021 0-.043-.3-.064-.01a4.094 4.094 0 0 0-.767-.075h-.013a.194.194 0 0 1-.198-.199l.17-1.515c.01-.113.105-.205.217-.205h.086zm-.784.313a.2.2 0 0 1 .048-.17c.096-.114.2-.221.31-.32a.198.198 0 0 1 .283.029l1.019 1.27c.057.076.043.182-.029.239-.028.02-.059.03-.095.028a3.505 3.505 0 0 0-.861.255.2.2 0 0 1-.256-.103l-.42-1.227v-.001zm3.04-1.668a.27.27 0 0 1 .4.076 4.758 4.758 0 0 1 .84 2.744.271.271 0 1 1-.54.037v-.029a.272.272 0 0 0 0-.009 4.219 4.219 0 0 0-.746-2.438.272.272 0 0 1 .046-.381zM9.213 14.68c.066-.076.18-.085.257-.019.057.047.104.103.16.16a.202.202 0 0 1-.01.265l-.926.946c-.37.038-.88.057-.142.057a.198.198 0 0 1-.15-.075c-.049-.055-.087-.12-.113-.189a.198.198 0 0 1 .046-.227l.878-.918zm-.141-1.524a.212.212 0 0 1 .33-.089c.12.082.224.187.31.306a.208.208 0 0 1-.068.268l-1.762 1.214a.201.201 0 0 1-.274-.038 2.077 2.077 0 0 0-.216-.247.197.197 0 0 1 .02-.285l1.66-1.129zm14.043-3.013a.432.432 0 0 0-.085-.152.407.407 0 0 0-.468-.085l-.01.004c-.372.179-.734.381-1.084.608a.404.404 0 0 0-.162.445 7.762 7.762 0 0 1 .172 1.657v.057a6.972 6.972 0 0 0-1.072-1.538 4.995 4.995 0 0 0-.054-.056.41.41 0 0 0-.484-.04 14.656 14.656 0 0 0-1.996 1.823.41.41 0 0 0-.48.492c.003.007.007.017.01.024a8.558 8.558 0 0 1 .81 2.417c.064.372.086.751.068 1.129a.827.827 0 0 1-.67.188c-.04 0-.069-.01-.097-.02a7.845 7.845 0 0 1-1.282-.274l-.25-.083a7.48 7.48 0 0 1-3.096-2.015 7.573 7.573 0 0 1-.84-1.116 9.676 9.676 0 0 1-.155-.257l-.019-.032a9.29 9.29 0 0 1-.058-.104l-.017-.03a7.53 7.53 0 0 1-.37-.803c-.102-.268-.196-.546-.274-.822a7.432 7.432 0 0 1-.34-2.06c.005-.688.12-1.372.342-2.026a.411.411 0 0 0-.238-.493 11.777 11.777 0 0 0-.931-.34.411.411 0 0 0-.494.163 10.995 10.995 0 0 0-1.25 3.057 10.947 10.947 0 0 0-.249 2.32c0 .284.011.574.034.864.071.914.25 1.816.532 2.682.283.871.66 1.704 1.123 2.479a10.97 10.97 0 0 0 1.608 2.13c.078.08.155.161.236.238l.154.15c.082.08.165.155.25.231l.005.004a11 11 0 0 0 3.521 2.143c.882.34 1.802.555 2.736.644.284.027.568.04.852.04h.087a10.915 10.915 0 0 0 2.221-.243 10.94 10.94 0 0 0 3.979-1.784.407.407 0 0 0 .091-.52 23.876 23.876 0 0 0-1.439-2.1c-.013-.016-.025-.034-.04-.048a.41.41 0 0 0-.588-.019c-.1.01-.22.021-.033.033a7.558 7.558 0 0 1-3.589 1.943c-.471.114-.954.172-1.437.172h-.02c-.061-.001-.123-.005-.184-.01a2.579 2.579 0 0 1-.353-.048 3.19 3.19 0 0 1-.157-.033 1.032 1.032 0 0 1-.132-.034 7.853 7.853 0 0 1-2.339-.982l-.056-.034a.409.409 0 0 0-.445.005.407.407 0 0 0-.149.137c-.01.014-.02.029-.028.04l-.161.218c-.232.308-.446.62-.653.936-.08.118-.04.281.086.345.535.292 1.1.53 1.687.713a11.062 11.062 0 0 0 3.037.607c.136 0 .268.011.404.011.685-.005 1.37-.089 2.036-.253a10.88 10.88 0 0 0 2.838-1.114c.138-.078.274-.16.407-.25a.407.407 0 0 0 .149-.491c-.142-.332-.299-.657-.471-.97a.408.408 0 0 0-.493-.162c-.047.02-.094.04-.142.058a7.534 7.534 0 0 1-2.911.584h-.167a9.228 9.228 0 0 1-.863-.068 8.078 8.078 0 0 1-1.607-.36l.068-.028a.914.914 0 0 1 .168-.059 1.016 1.016 0 0 1 .133-.033c.56-.143 1.102-.337 1.619-.584.133-.063.265-.13.4-.203.583-.334 1.12-.738 1.598-1.204.138-.132.269-.272.397-.413a7.527 7.527 0 0 0 1.667-3.01.41.41 0 0 0-.25-.493 6.944 6.944 0 0 0-.914-.265.407.407 0 0 0-.435.236 5.732 5.732 0 0 1-.236.517 5.935 5.935 0 0 1-1.307 1.713 5.62 5.62 0 0 1-.673.512 5.857 5.857 0 0 1-2.585.917c-.188.02-.374.028-.56.025h-.098a7.635 7.635 0 0 1-.331-.028l-.24-.028a5.81 5.81 0 0 1-1.546-.445c-.483-.219-.933-.499-1.337-.833a7.873 7.873 0 0 1-.392-.35.412.412 0 0 0-.033-.032.41.41 0 0 0-.537.018.407.407 0 0 0-.75.509l.151.228c.212.31.442.608.69.892.51.581 1.114 1.072 1.787 1.45a7.518 7.518 0 0 0 2.144.804c.284.057.57.1.858.126.14.011.28.02.42.023a7.592 7.592 0 0 0 4.122-1.06l.066-.042a.407.407 0 0 0 .133-.531c-.156-.315-.333-.625-.532-.917a.41.41 0 0 0-.505-.136 6.154 6.154 0 0 1-.63.228 6.703 6.703 0 0 1-2.387.407c.212-.051.419-.117.624-.195a6.534 6.534 0 0 0 1.04-.467c.016-.01.033-.016.049-.025a.408.408 0 0 0 .151-.548c-.068-.132-.14-.264-.22-.396a.41.41 0 0 0-.51-.162 5.578 5.578 0 0 1-.923.256 6.344 6.344 0 0 1-1.733.113l-.16-.011c.103-.014.206-.032.309-.053.115-.024.229-.052.342-.085.088-.026.177-.056.265-.087.177-.063.35-.137.516-.222.172-.088.325-.189.47-.301.005-.003.01-.005.013-.01a.406.406 0 0 0 .12-.506c-.161-.334-.34-.657-.532-.97a.41.41 0 0 0-.532-.162c-.066.033-.127.078-.188.12-.075.048-.15.094-.228.134a3.2 3.2 0 0 1-.381.169c-.284.099-.574.175-.868.224a5.837 5.837 0 0 1-.782.068c-.082 0-.165 0-.246-.006a4.976 4.976 0 0 1-1.625-.35 5.57 5.57 0 0 1-.656-.3c-.08-.042-.161-.086-.24-.131a5.338 5.338 0 0 1-.976-.697 5.725 5.725 0 0 1-1.126-1.304 5.165 5.165 0 0 1-.272-.493c-.064-.135-.119-.273-.168-.413a4.952 4.952 0 0 1-.15-.436 5.56 5.56 0 0 1-.074-.266 5.835 5.835 0 0 1-.142-1.102c-.002-.033-.002-.066-.002-.099a5.91 5.91 0 0 1 .782-2.942 5.916 5.916 0 0 1 .404-.654.902.902 0 0 1 .028-.04c.058-.082.154-.12.246-.094.217.063.436.136.654.219a.301.301 0 0 1 .175.326 5.914 5.914 0 0 0-.432 2.25v.1c0 .144.005.285.016.427a5.628 5.628 0 0 0 .947 2.635c.122.173.255.34.4.497a6.05 6.05 0 0 0 1.764 1.344c.07.033.141.063.213.094.103.042.207.083.312.117.047.019.095.035.143.05.085.028.17.053.257.077.038.01.075.02.113.028.066.017.132.031.2.043.133.024.27.043.406.058a5.812 5.812 0 0 0 .602.026h.083c.145-.2.291-.12.436-.03a5.283 5.283 0 0 0 .301-.045c.066-.01.133-.024.2-.04l.199-.048c.066-.017.13-.037.196-.059.062-.02.126-.043.188-.066a5.893 5.893 0 0 0 1.824-1.15 5.628 5.628 0 0 0 .8-.863c.141-.187.274-.379.399-.579a8.119 8.119 0 0 0 .426-.79c.02-.04.033-.085.054-.127l.13-.312a.41.41 0 0 0-.065-.394z" fill="#45c0bc"/></svg>;
        case "Vercel":
          return <svg className="w-9 h-9" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M63.5 28.625L102.25 91.375H24.75L63.5 28.625Z" fill="#ffffff"/></svg>;
        case "Railway":
          return <svg className="w-9 h-9" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M25 20.75a4.257 4.257 0 0 1-4.266 4.25 4.23 4.23 0 0 1-4.234-4.22v-.03h-1.016v.03A5.242 5.242 0 0 0 20.734 26 5.267 5.267 0 0 0 26 20.75v-.5h-1v.5zm-14 3.5c.908 0 1.667-.672 1.79-1.547l-.99-.203c-.062.45-.374.75-.8.75-.454 0-.8-.36-.8-.813v-3.374h1.6v-1H10.2V16h-1v2.063H8v.999h1.2v3.375c0 1.012.813 1.813 1.8 1.813zm10-7.875a2.376 2.376 0 0 0-2.375 2.375 2.376 2.376 0 0 0 2.375 2.375 2.376 2.376 0 0 0 2.375-2.375 2.376 2.376 0 0 0-2.375-2.375zm0 3.75a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751zM10.5 9.359C8.578 9.359 7 7.797 7 5.906V5h1v.906c0 1.375 1.11 2.454 2.5 2.454 1.407 0 2.5-1.095 2.5-2.454V5h1v.906c0 1.892-1.563 3.454-3.5 3.454zm12 7.016a2.376 2.376 0 0 0-2.375 2.375 2.376 2.376 0 0 0 2.375 2.375 2.376 2.376 0 0 0 2.375-2.375 2.376 2.376 0 0 0-2.375-2.375zm0 3.75a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751zM10.2 11h1v5h-1v-5zm2 0h1v5h-1v-5zm-6.2 8c-1.105 0-2 .9-2 2.013v2.973C4 25.1 4.895 26 6 26s2-.9 2-2.013v-2.973c0-1.114-.895-2.013-2-2.013zm0 .999c.551 0 1 .451 1 1.014v2.973c0 .563-.449 1.014-1 1.014s-1-.451-1-1.014v-2.973c0-.563.449-1.014 1-1.014z" fill="#a48bd9"/></svg>;
        case "Render":
          return <svg className="w-9 h-9" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.734 16c0 2.694 1.065 5.267 2.962 7.164a10.097 10.097 0 0 0 7.164 2.962c2.694 0 5.267-1.065 7.164-2.962a10.097 10.097 0 0 0 2.962-7.164c0-2.694-1.065-5.267-2.962-7.164a10.097 10.097 0 0 0-7.164-2.962c-2.694 0-5.267 1.065-7.164 2.962A10.097 10.097 0 0 0 15.734 16zm-5.856 15.993c.232.003.435-.156.486-.387.051-.23-.076-.461-.296-.534-9.214-3.306-8.132-15.314.149-20.419a12.056 12.056 0 0 1 16.988 1.685c4.5 5.434 3.645 13.566-1.766 18.03H16.03a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h9.828a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5h-.617c5.413-4.463 6.267-12.596 1.767-18.03-4.5-5.434-12.62-6.286-18.056-1.782S3.166 21.073 7.67 26.506a12.06 12.06 0 0 0 2.208 1.9z" fill="#46e3b7"/></svg>;
        default:
          return isDevicon ? (
            <i className={`${iconClass} text-3xl md:text-4xl`}></i>
          ) : (
            <i className={`${iconClass} text-3xl md:text-4xl`}></i>
          );
      }
    };
    
    return (
      <div className="skill-icon mx-6 my-4 flex flex-col items-center justify-center">
        <div 
          className={`skill-icon-inner w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${skillColors[skill.name] || "text-[#3B82F6]"} bg-black/40 border border-gray-800/30 mb-2 hover:border-[#3B82F6] hover:scale-110 transition-all duration-300`}
        >
          {renderDeploymentPlatformIcon()}
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