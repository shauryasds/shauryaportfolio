import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  EnvelopeIcon, 
  CodeBracketIcon, 
  UserIcon, 
  BriefcaseIcon,
  SunIcon,
  MoonIcon,
  
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon, 
   HashtagIcon ,
  LinkIcon,
  CircleStackIcon,
  BeakerIcon,
  SwatchIcon,
  CodeBracketSquareIcon,
  ArrowsRightLeftIcon,
  PaintBrushIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
   // Importing the missing icon
} from '@heroicons/react/24/outline';
import { GlobeAltIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/solid';
import logo from "./image/bg.jpg"
import flipkart from "./image/flipkart.PNG"
import weather from "./image/weather.PNG"
import foodapp from "./image/foodapp.PNG"
// Dark Mode Context
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  return [isDark, setIsDark];
};

export default function App() {
  const [isDark, setIsDark] = useDarkMode();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const IconComponent = ({ project }) => {
    const getIcon = (tag) => {
      switch (tag) {
        case 'React':
          return <SwatchIcon className="w-16 h-16 text-blue-500" />;
        case 'Node.js':
          return <CodeBracketIcon className="w-16 h-16 text-green-500" />;
        case 'CSS':
          return <GlobeAltIcon className="w-16 h-16 text-purple-500" />;
        default:
          return <CodeBracketIcon className="w-16 h-16 text-gray-500" />;
      }
    };

    return <>{project.tags.map(tag => getIcon(tag))}</>; // Return the icons based on tags
  };

  const projects = [
    {
      id: 1,
      imageUrl:flipkart,
      title: 'Flipkart clone : Full stack E-commerce Platform',
      tech: 'React/Node.js',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
      tags: ['React', 'Express.js' ,'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://flipkart-clone-rose.vercel.app/',
      codeUrl: 'https://github.com/shauryasds/Flipkart-Clone---Full-Stack-E-Commerce-Platform-MERN-Stack-Redux-Stripe-Integration'
    },
    {
      id: 2,
      imageUrl:foodapp,
      title: 'Full-Stack MERN Restaurant App',
      tech: 'Next.js/Firebase',
      description: 'This is a full-stack MERN (MongoDB, Express, React, Node.js) application built using Tailwind CSS for styling and Material UI for component library. The app is deployed on Vercel.',
      tags: ['React', 'Express.js' ,'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://frontend-resturant.vercel.app/',
      codeUrl: 'https://github.com/shauryasds/Mern_Resturant_Application'
    },
    {
      id: 3,
      imageUrl:weather,
      title: 'Weather Details Website',
      tech: 'HTML/CSS',
      description: 'A Weather Details Website for live weather data.',
      tags: ['HTML', 'CSS', 'Javascript'],
      liveUrl: 'https://shauryasds.github.io/weatherAPP/',
      codeUrl: 'https://github.com/shauryasds/weatherAPP'
    },
  ];

  const skills = [
    {
      name: 'MongoDB',
      icon: CircleStackIcon,
      color: 'text-green-500',
      description: 'NoSQL database expert with experience in schema design Atlas cloud management'
    },
    {
      name: 'Express.js',
      icon: CommandLineIcon,
      color: 'text-gray-400',
      description: 'Proficient in building RESTful APIs with middleware integration and authentication systems'
    },
    {
      name: 'React',
      icon: GlobeAltIcon,
      color: 'text-blue-400',
      description: 'Advanced component-based architecture with hooks, context API, and performance optimization'
    },
    {
      name: 'Node.js',
      icon: CpuChipIcon,
      color: 'text-green-600',
      description: 'Event-driven backend development with Express'
    },
    {
      name: 'MySQL',
      icon: CircleStackIcon,
      color: 'text-orange-500',
      description: 'Relational database design expert'
    },
    {
      name: 'Postman',
      icon: BeakerIcon,
      color: 'text-orange-400',
      description: 'API testing and documentation with automated testing workflows and monitoring'
    },
    {
      name: 'Figma',
      icon: SwatchIcon,
      color: 'text-pink-500',
      description: 'Dev with Awareness of UI/UX prototyping with design systems, component libraries, and developer handoff'
    },
    {
      name: 'Git',
      icon: CodeBracketSquareIcon,
      color: 'text-orange-600',
      description: 'Version control workflow with branching strategies and conflict resolution'
    },
    {
      name: 'GitHub',
      icon: CodeBracketIcon,
      color: 'text-purple-400',
      description: 'Implement collaborative development'
    },
    {
      name: 'Redux',
      icon: ArrowsRightLeftIcon,
      color: 'text-purple-500',
      description: 'State management with Redux Toolkit, middleware, and persistent state'
    },
    {
      name: 'Tailwind CSS',
      icon: PaintBrushIcon,
      color: 'text-cyan-400',
      description: 'Utility-first styling with responsive design and dark mode implementation'
    },
    {
      name: 'REST APIs',
      icon: CloudArrowUpIcon,
      color: 'text-blue-400',
      description: 'Resource-oriented API design with JWT authentication and rate limiting'
    },
    {
      name: 'JWT',
      icon: ShieldCheckIcon,
      color: 'text-yellow-500',
      description: 'Token-based authentication with refresh token rotation and security best practices'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className={`fixed -top-1 left-0 right-0  h-2 origin-left z-50 blur-sm  ${isDark ? `bg-white` : `bg-blue-900 `}`} 
        style={{ scaleX }}
      />
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 
        'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100' : 
        'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-900'}`}>

        {/* Navigation */}
        <nav className={`fixed w-full ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md z-40`}>
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                Shaurya's Portfolio
              </motion.span>
              <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-8">
                  <a href="#home" className={`hover:text-blue-400 transition-colors ${!isDark && 'text-gray-700'}`}>Home</a>
                  <a href="#projects" className={`hover:text-blue-400 transition-colors ${!isDark && 'text-gray-700'}`}>Projects</a>
                  <a href="#contact" className={`hover:text-blue-400 transition-colors ${!isDark && 'text-gray-700'}`}>Contact</a>
                </div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}
                >
                  {isDark ? (
                    <SunIcon className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <MoonIcon className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="md:w-1/2 space-y-6"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-blue-400 font-medium flex items-center gap-2"
              >
                <span className="h-px w-8 bg-blue-400"></span>
                Full-Stack Developer
              </motion.p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Crafting Digital{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Transforming ideas into immersive web experiences through clean code and modern design.
              </p>
              <div className="flex gap-4">
               <a href="https://github.com/shauryasds/">
               <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Projects
                </motion.button>
               </a>
                <a href="https://docs.google.com/document/d/1OAafpvI7taD2ksdnCf9h1KjjltEVbw7De67IgqOsPVc/edit?tab=t.0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500/10 transition-colors"
                >
                  View/Download CV
                </motion.button>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="md:w-1/2 relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity`} />
              <div className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 backdrop-blur-xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-2xl`}>
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left Side - Name and Title */}
    <div className="md:w-1/2 space-y-4 order-2 md:order-1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          SHAURYA DEEP SHUKLA
        </h3>
        <p className="text-blue-400 text-xl mt-2">Full-Stack Developer</p>
      </motion.div>
      
      
    </div>

    {/* Right Side - Image */}
    <motion.div 
      className="md:w-1/2 order-1 md:order-2"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={logo}
          alt="Developer" 
          className="w-48 h-48 object-cover rounded-full border-4 border-blue-400 hover:scale-105 transition-transform mx-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-full" />
      </div>
    </motion.div>
  </div>
</div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Technologies I've mastered and tools I use daily
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-400 transition-colors group`}
                >
                  <skill.icon className={`w-12 h-12 mb-4 ${skill.color}`} />
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900/40' : 'bg-gray-50'}`}>
  <div className="max-w-6xl mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Featured <span className="text-blue-500">Projects</span>
      </h2>
      <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
        Explore my professional implementations of real-world applications.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project) => {
   

    return (
      <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1 * project.id }}
      className="group relative h-full"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`} />
      <div className={`relative h-full rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden transition-all duration-300 hover:border-blue-400`}>
        <div className="relative overflow-hidden">
          <div className="w-full h-48 bg-gray-100 dark:bg-gray-900">
            {/* Project Image */}
            <img 
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              {project.title}
            </h3>
            <div className="flex space-x-2">
              <a 
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                aria-label="View source code"
              >
                <CodeBracketIcon className="w-5 h-5" />
              </a>
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                aria-label="View live demo"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
    
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            {project.description}
          </p>
    
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  isDark 
                    ? 'bg-blue-900/30 text-blue-400'
                    : 'bg-blue-100 text-blue-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    );
  })}
</div>
  </div>
</section>

        

        {/* Footer Section */}
        <footer id="contact" className={`py-12 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'} mb-4`}>
          Get in Touch
        </h3>
        <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <li className="flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5 text-blue-400" />
            <a href="mailto:shauryadeep589@gmail.com" className="hover:text-blue-400 transition-colors">
              shauryadeep589@gmail.com
            </a>
          </li>
         
          <li className="flex items-center space-x-2">
            <MapPinIcon className="w-5 h-5 text-red-400" />
            <span>Uttar prdesh, India</span>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'} mb-4`}>
          Connect With Me
        </h3>
        <div className="flex space-x-6 justify-center md:justify-start">
          <a 
            href="https://github.com/shauryasds" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            aria-label="GitHub Profile"
          >
            <CodeBracketIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://leetcode.com/u/shauryasds/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            aria-label="LinkedIn Profile"
          >
            <UserGroupIcon  className="w-6 h-6 text-[#0A66C2]" />
          </a>
          <a 
            href="https://www.linkedin.com/in/shauryadeepshukla/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            aria-label="Twitter Profile"
          >
            <HashtagIcon  className="w-6 h-6 text-[#1DA1F2]" />
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="space-y-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'} mb-4`}>
          Newsletter
        </h3>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className={`flex-1 rounded-lg p-2 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        © {new Date().getFullYear()} Shaurya Shukla. All rights reserved.
      </p>
    </div>
  </div>
</footer>
      </div>
    </>
  );
}