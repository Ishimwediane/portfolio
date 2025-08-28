import React, { useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';



import { motion } from 'framer-motion';
// Import images
import alarmImg from '../assets/alarm.jpg';
import telegramImg from '../assets/telegram.webp';
import airpollutionImg from '../assets/airpollution.jpg';
import airpollutionVideo from '../assets/airpollution.mp4';
import imvunwaImg from '../assets/imvunwa.png';
import imvunwa1Img from '../assets/imvunwa1.png';
import shehope1Img from '../assets/shehope1.png';
import shehope2Img from '../assets/shehope2.png';
import {  AnimatePresence } from 'framer-motion';

import botigaImg from '../assets/botiga1.png';
import botiga1Img from '../assets/botiga2.png';
import pighealthImg from '../assets/pig1.png';
import pighealth1Img from '../assets/pig2.jpg';

import club1Img from '../assets/club1.png';
import club2Img from '../assets/club2.png';
import club3Img from '../assets/club3.png';  
import bughetImg from '../assets/budget1.jpg';
import bughet1Img from '../assets/budget2.jpg';
import bughet2Img from '../assets/budget3.jpg';
import eshop2Img from '../assets/eshop1.jpg';
import eshop1Img from '../assets/eshop2.jpg';

import veteritechImg from '../assets/veteritech.png';
import veteritech1Img from '../assets/veteritech1.png';
import veteritech2Img from '../assets/veteritech2.png';
// // Mock images - replace with your actual imports
// const alarmImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Gate+Guard+System";
// const telegramImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Telegram+Notification";
// const airpollutionImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Air+Quality+Monitor";
// const airpollutionVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
// const imvunwaImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Imvunwa+Website";
// const imvunwa1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Imvunwa+Page2";
// const shehope1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=SheHope+Platform";
// const shehope2Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=SheHope+Chat";
// const botigaImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Botiga+eCommerce";
// const botiga1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Botiga+Dashboard";
// const pighealthImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Pig+Health+System";
// const pighealth1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Pig+Health+Management";
// const club1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Club+Management+App";
// const club2Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Club+Events";
// const club3Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Club+Finance";
// const bughetImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Budget+Management";
// const bughet1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Budget+Tracking";
// const bughet2Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=Expense+Reports";
// const eshop2Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=E-shop+App";
// const eshop1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=E-shop+Products";
// const veteritechImg = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=VeteriTech+Platform";
// const veteritech1Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=VeteriTech+Chat";
// const veteritech2Img = "https://via.placeholder.com/400x300/1a1a1a/22c55e?text=VeteriTech+eCommerce";

const portfolioItems = [
  {
    title: 'Gate Guard IoT System',
    category: 'IOT',
    img: [alarmImg, telegramImg],
    description: 'Gate Guard visitor notification system',
    details: {
      category: 'Embedded System',
      date: '01 March, 2024',
      info: `System is an IoT solution that uses a combination of OLED displays, Telegram notifications, and remote control functionality to manage visitor access. When a visitor presses a button at the gate, an OLED screen displays their presence. The system sends a Telegram notification to the homeowner's phone, notifying them of the visitor's arrival. If the homeowner is not available, they can reply via Telegram, and the response is displayed on the OLED screen, informing the visitor.`
    }
  },
  {
    title: 'Air Quality Monitor',
    category: 'IOT',
    img: [airpollutionImg],
    video: airpollutionVideo,
    description: 'Real-time air quality monitoring system',
    details: {
      category: 'Embedded System',
      date: '15 April, 2024',
      info: 'A comprehensive IoT project to monitor air quality using multiple sensors including PM2.5, CO2, and temperature sensors. The system displays real-time data on a dashboard and sends alerts when air quality drops below safe levels. Built with ESP32, various environmental sensors, and a web-based monitoring dashboard.'
    }
  },
  {
    title: 'Imvunwa Business Website',
    category: 'WEB',
    img: [imvunwaImg, imvunwa1Img],
    description: 'Professional business website',
    github: null,
    liveDemo: 'https://www.imvunwa.com',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    details: {
      category: 'Web Development',
      date: 'May 2024',
      info: 'A responsive business website for Imvunwa, showcasing welding, manufacturing, and electrical services. Features include service galleries, contact forms, and company portfolio. Built with modern web technologies ensuring fast loading times and mobile responsiveness.'
    }
  },
  {
    title: 'SheHope Support Platform',
    category: 'WEB',
    img: [shehope1Img, shehope2Img],
    description: 'Unplanned pregnancy support platform',
    github: 'https://github.com/Ishimwediane/Shehope',
    githubServer: 'https://github.com/Ishimwediane/shehope_server',
    liveDemo: 'https://shehope.vercel.app/',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    details: {
      category: 'Full-Stack Web Application',
      date: '2024',
      info: `Built a comprehensive support platform with React frontend and Node.js/Express backend using MongoDB. Key features include user authentication, anonymous chat with community support, personalized action plans, and crowdfunding capabilities for financial support. Real-time communication implemented with Socket.io.`
    }
  },
  {
    title: 'Botiga eCommerce Platform',
    category: 'WEB',
    img: [botigaImg, botiga1Img],
    description: 'Multi-vendor eCommerce solution',
    github: 'https://github.com/Ishimwediane/Botiga-ecommerce',
    liveDemo: 'https://botiga-ecommerce-dun.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'],
    details: {
      category: 'E-Commerce Web Application',
      date: '2024',
      info: `Developed a comprehensive e-commerce platform with separate dashboards for admins and vendors. Features include user authentication, product management, vendor registration and listing, order processing, and payment integration. Built with React.js frontend and Node.js backend.`
    }
  },
  {
    title: 'VeteriTech Platform',
    category: 'WEB',
    img: [veteritechImg, veteritech1Img, veteritech2Img],
    description: 'Veterinary & farmer connection platform',
    github: 'https://github.com/Ishimwediane/veteritech',
    liveDemo: 'https://veteritech-8drl.vercel.app/',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    details: {
      category: 'Healthcare Web Platform',
      date: '2024',
      info: `VeteriTech connects farmers with veterinarians for consultations and ongoing animal health support. Features include real-time chat between vets and farmers, an e-commerce module for purchasing animal products, appointment scheduling, and an admin dashboard for managing users, products, and platform activities.`
    }
  },
  {
    title: 'PigHealth Rwanda',
    category: 'WEB',
    img: [pighealthImg, pighealth1Img],
    description: 'Pig health management system',
    github: 'https://github.com/Ishimwediane/Pig-Health',
    liveDemo: 'https://pig-health.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    details: {
      category: 'Agricultural Web System',
      date: '2024',
      info: 'A specialized web-based system for managing pig health and veterinary services in Rwanda. Features include pig inventory management, health record tracking, vaccination schedules, veterinary appointment booking, and reporting systems. Built with React.js frontend and Laravel backend with PostgreSQL database.'
    }
  },
  {
    title: 'Budget Management App',
    category: 'APP',
    img: [bughetImg, bughet1Img, bughet2Img],
    description: 'Personal & business budget tracker',
    github: 'https://github.com/Ishimwediane/Budget_management',
    liveDemo: null,
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    details: {
      category: 'Mobile Application',
      date: '2024',
      info: 'A comprehensive mobile app for managing personal and business budgets. Features include expense tracking, income management, budget categories, financial goal setting, spending analytics, and report generation. Built with React Native and Expo for cross-platform compatibility.'
    }
  },
  {
    title: 'E-Shop Mobile App',
    category: 'APP',
    img: [eshop1Img, eshop2Img],
    description: 'Mobile e-commerce application',
    github: 'https://github.com/Ishimwediane/Eshop_app',
    liveDemo: null,
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    details: {
      category: 'Mobile E-Commerce App',
      date: '2024',
      info: 'A feature-rich mobile e-commerce application for online shopping. Includes product browsing, cart management, order processing, payment integration, user authentication, order tracking, and push notifications. Built with React Native and Expo for seamless mobile experience.'
    }
  },
  {
    title: 'Club Management App',
    category: 'APP',
    img: [club1Img, club2Img, club3Img],
    description: 'Comprehensive club management solution',
    github: 'https://github.com/Ishimwediane/Club',
    liveDemo: null,
    tech: ['Flutter', 'Firebase', 'Node.js'],
    details: {
      category: 'Mobile Management App',
      date: '2024',
      info: 'A comprehensive mobile app for managing Abeho club activities. Features include event management, member attendance tracking, financial management, announcement system, member directory, and meeting schedules. Built with Flutter for native performance and Firebase for real-time data synchronization.'
    }
  }
];

const filters = ['ALL', 'WEB', 'IOT', 'APP'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [modal, setModal] = useState({ open: false, type: '', item: null, imgIdx: 0 });

  const filteredItems = activeFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const showPrevImg = () => setModal(m => ({ 
    ...m, 
    imgIdx: m.imgIdx > 0 ? m.imgIdx - 1 : m.item.img.length - 1 
  }));
  
  const showNextImg = () => setModal(m => ({ 
    ...m, 
    imgIdx: m.imgIdx < m.item.img.length - 1 ? m.imgIdx + 1 : 0 
  }));

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <motion.section
      id="portfolio"
      className="flex-1 bg-black text-white min-h-screen flex flex-col items-center justify-start px-4 py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Animated SVG Wave Divider */}
      <motion.svg
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full h-16 md:h-24 -mt-8 mb-4"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </motion.svg>

      <motion.div 
        className="w-full max-w-6xl bg-[#111] rounded-lg shadow-lg p-8 mb-12" 
        variants={itemVariants}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <motion.span 
            className="uppercase tracking-widest text-gray-300 text-sm font-semibold"
            variants={itemVariants}
          >
            Portfolio 
            <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span>
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mt-2 mb-6"
            variants={itemVariants}
          >
            MY WORKS
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-8 flex-wrap"
          variants={itemVariants}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter 
                  ? 'bg-green-500 text-black shadow-lg' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => handleFilterChange(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
              {activeFilter === filter && (
                <motion.span 
                  className="ml-2 bg-black text-green-500 px-2 py-1 rounded-full text-xs"
                  layoutId="activeCount"
                >
                  {filteredItems.length}
                </motion.span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {filteredItems.map((item, index) => (
              <motion.div 
                key={`${activeFilter}-${item.title}`}
                className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300"
                variants={itemVariants}
                layout
                whileHover={{ y: -5 }}
              >
                <div className="overflow-hidden">
                  <motion.img 
                    src={item.img[0]} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    onClick={() => setModal({ open: true, type: 'details', item, imgIdx: 0 })}
                    className="bg-white text-green-600 hover:bg-green-500 hover:text-white p-4 rounded-full text-2xl shadow-lg transition-colors duration-300 mb-4"
                    title="View Details"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BiInfoCircle />
                  </motion.button>
                  
                  <motion.h3 
                    className="text-xl font-bold text-center mb-2 px-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-green-400 text-sm text-center px-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {item.description}
                  </motion.p>
                  
                  <motion.div 
                    className="text-xs text-gray-300 mt-2 px-2 py-1 bg-gray-800 rounded"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {item.category}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center py-12"
            variants={itemVariants}
            initial="hidden"
            animate="show"
          >
            <p className="text-gray-400 text-lg">No projects found for the selected category.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modal.open && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal({ open: false, type: '', item: null, imgIdx: 0 })}
          >
            <motion.div 
              className="bg-[#181818] rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden relative flex flex-col lg:flex-row"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-2xl text-white hover:text-green-500 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center" 
                onClick={() => setModal({ open: false, type: '', item: null, imgIdx: 0 })}
              >
                &times;
              </button>

              {/* Left: Media */}
              <div className="lg:w-2/3 w-full flex flex-col items-center justify-center bg-black p-6">
                {modal.item?.video ? (
                  <video 
                    src={modal.item.video} 
                    controls 
                    className="w-full max-h-96 object-contain rounded"
                    autoPlay
                    muted
                  />
                ) : (
                  <img 
                    src={modal.item?.img[modal.imgIdx]} 
                    alt={modal.item?.title} 
                    className="w-full max-h-96 object-contain rounded" 
                  />
                )}
                
                {/* Image Navigation */}
                {modal.item?.img.length > 1 && !modal.item?.video && (
                  <div className="flex gap-4 mt-4">
                    <button 
                      onClick={showPrevImg} 
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-green-500 transition"
                    >
                      Previous
                    </button>
                    <span className="text-white px-4 py-2">
                      {modal.imgIdx + 1} of {modal.item.img.length}
                    </span>
                    <button 
                      onClick={showNextImg} 
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-green-500 transition"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>

              {/* Right: Details */}
              <div className="lg:w-1/3 w-full p-6 flex flex-col justify-start overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4 text-green-400">{modal.item?.title}</h3>
                
                <div className="mb-3">
                  <span className="font-bold text-gray-300">Category:</span> 
                  <span className="ml-2">{modal.item?.details.category}</span>
                </div>
                
                <div className="mb-3">
                  <span className="font-bold text-gray-300">Date:</span> 
                  <span className="ml-2">{modal.item?.details.date}</span>
                </div>

                {/* Links */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {modal.item?.github && (
                    <a 
                      href={modal.item.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {modal.item?.githubServer && (
                    <a 
                      href={modal.item.githubServer} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition"
                    >
                      <FaGithub /> Server
                    </a>
                  )}
                  {modal.item?.liveDemo && (
                    <a 
                      href={modal.item.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-300 mb-2">Project Information:</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">{modal.item?.details.info}</p>
                </div>

                {/* Tech Stack */}
                {modal.item?.tech && modal.item.tech.length > 0 && (
                  <div>
                    <h4 className="font-bold text-gray-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {modal.item.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Portfolio;