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



const portfolioItems = [
  {
    title: 'Iot 1',
    category: 'IOT',
    img: [alarmImg, telegramImg],
    description: 'Gate Guard visitor notifie',
    details: {
      category: 'Embedded System',
      date: '01 March, 2024',
      info: `System is an IoT solution that uses a combination of OLED displays, Telegram notifications, and remote control functionality to manage visitor access. When a visitor presses a button at the gate, an OLED screen displays their presence. The system sends a Telegram notification to the homeowner's phone, notifying them of the visitor's arrival. If the homeowner is not available, they can reply via Telegram, and the response is displayed on the OLED screen, informing the visitor.`
    }
  },
  {
    title: 'Iot 2',
    category: 'IOT',
    img: [airpollutionImg],
    video: airpollutionVideo,
    description: 'Air Quality Monitor',
    details: {
      category: 'Embedded System',
      date: '15 April, 2024',
      info: 'A project to monitor air quality using sensors and display data on a dashboard.'
    }
  },
  {
    title: 'Imvunwa Website',
    category: 'WEB',
    img: [imvunwaImg, imvunwa1Img],
    description: 'Business Website',
    github: null,
    liveDemo: 'https://www.imvunwa.com',
    details: {
      category: 'Web',
      date: 'May 2024',
      info: 'A responsive business website for Imvunwa, showcasing welding, manufacturing, and electrical services.'
    }
  },
  {
    title: 'SheHope Unplanned Pregnancy Support Platform',
    category: 'WEB',
    img: [shehope1Img, shehope2Img],
    description: 'Support Platform',
    github: 'https://github.com/Ishimwediane/Shehope',
    githubServer: 'https://github.com/Ishimwediane/shehope_server',
    liveDemo: 'https://shehope.vercel.app/',
    details: {
      category: 'Web/Mobile',
      date: '2024',
      info: `Built a React website and a Node.js/Express backend with MongoDB. Implemented user authentication, anonymous chat with community, personalized action plans, and crowdfunding for financial support.`
    }
  },
  {
    title: 'Botiga  eCommerce Platform',
    category: 'WEB',
    img: [botigaImg, botiga1Img],
    description: 'eCommerce Platform',
    github: 'https://github.com/Ishimwediane/Botiga-ecommerce',
    liveDemo: 'https://botiga-ecommerce-dun.vercel.app/',
    details: {
      category: 'Web',
      date: '2024',
      info: `Developed a dashboard for admins and vendors using React.js, Tailwind CSS, and Node.js. Implemented user authentication, product management, and vendor listing features.`
    }
  },
  {
    title: 'pigHealth Rwanda',
    category: 'WEB',
    img: [pighealthImg, pighealth1Img],
    description: 'Pig Health Management System',
    github: 'https://github.com/Ishimwediane/Pig-Health',
    liveDemo: 'https://pig-health.vercel.app/',
    details: {
      category: 'Web',
      date: '2024',
      info: 'A web-based system for managing pig health and veterinary services in Rwanda. The system allows users to manage their pigs, including adding, editing, and deleting pigs, as well as viewing pig health records and veterinary services.This system is built with React.js, Tailwind CSS, postgreSQL, and Laravel.'
    }
  },
  {
    title: 'Budget Management',
    category: 'APP',
    img: [bughetImg, bughet1Img, bughet2Img],
    description: 'Budget Management App',
    github: 'https://github.com/Ishimwediane/Budget_management',
    liveDemo: null,
    details: {
      category: 'App',
      date: '2024',
      info: 'A mobile app for managing personal and business budgets. This app is built with React Native, Expo, and Node.js.'
    }
  },
  {
    title: 'Eshop App',
    category: 'APP',
    img: [eshop1Img, eshop2Img],
    description: 'E-commerce App',
    github: 'https://github.com/Ishimwediane/Eshop_app',
    liveDemo: null,
    details: {
      category: 'App',
      date: '2024',
      info: 'A mobile e-commerce app for online shopping and order management.App is built with React Native, Expo, and Node.js.'
    }
  },
  {
    title: 'Club Management',
    category: 'APP',
    img: [ club1Img, club2Img, club3Img],
    description: 'Club Management App',
    github: 'https://github.com/Ishimwediane/Club',
    liveDemo: null,
    details: {
      category: 'App',
      date: '2024',
      info: 'mobile app for managing Abeho club events, attendance, finance, and announcements.App is built with Flutter, firebase and Node.js.'
    }
  }
];

const filters = ['ALL', 'IOT', 'WEB', 'APP'];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1, scale: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.2, duration: 0.7, ease: 'easeOut' }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [modal, setModal] = useState({ open: false, type: '', item: null, imgIdx: 0 });

  const filteredItems = activeFilter === 'ALL' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  // Helper for multiple images
  const showPrevImg = () => setModal(m => ({ ...m, imgIdx: m.imgIdx > 0 ? m.imgIdx - 1 : m.item.img.length - 1 }));
  const showNextImg = () => setModal(m => ({ ...m, imgIdx: m.imgIdx < m.item.img.length - 1 ? m.imgIdx + 1 : 0 }));

  return (
    <motion.section
      id="portfolio"
      className="flex-1 bg-black text-white min-h-screen flex flex-col items-center justify-start px-4 py-12 overflow-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
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
      <motion.div className="w-full max-w-6xl bg-[#111] rounded-lg shadow-lg p-8 mb-12" variants={itemVariants}>
        <div className="mb-8">
          <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">Portfolio <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">MY WORKS</h2>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          {filters.map(f => (
            <button
              key={f}
              className={`px-6 py-2 rounded font-bold text-lg transition ${activeFilter === f ? 'bg-green-500 text-black' : 'bg-gray-800 text-white hover:bg-green-700'}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
          {filteredItems.map((item, idx) => (
            <motion.div key={idx} className="relative group rounded-lg overflow-hidden shadow-lg bg-black" variants={itemVariants}>
              <img src={item.img[0]} alt={item.title} className="w-full h-64 object-cover" />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center mb-4">
                  <button
                    onClick={() => setModal({ open: true, type: 'details', item, imgIdx: 0 })}
                    className="bg-white text-green-600 hover:bg-green-500 hover:text-white p-4 rounded-full text-3xl shadow-lg transition relative group/btn"
                    title="View Details"
                  >
                    <BiInfoCircle />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
                      View Details
                    </span>
                  </button>
                </div>
                <div className="text-2xl font-bold">{item.title}</div>
                <div className="text-green-400">{item.category}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Modal for details (no animation for modal for now) */}
      {modal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#181818] rounded-lg p-0 max-w-4xl w-full relative flex flex-col md:flex-row overflow-hidden">
            <button className="absolute top-2 right-2 text-2xl text-white hover:text-green-500 z-10" onClick={() => setModal({ open: false, type: '', item: null, imgIdx: 0 })}>&times;</button>
            {/* Left: Image(s) or Video */}
            <div className="md:w-2/3 w-full flex flex-col items-center justify-center bg-black p-6">
              {modal.type === 'details' && (
                <>
                  {modal.item.video ? (
                    <video 
                      src={modal.item.video} 
                      controls 
                      className="w-full h-96 object-contain rounded mb-4"
                      autoPlay
                      muted
                    />
                  ) : (
                    <img src={modal.item.img[modal.imgIdx]} alt={modal.item.title} className="w-full h-96 object-contain rounded mb-4" />
                  )}
                  {modal.item.img.length > 1 && !modal.item.video && (
                    <div className="flex gap-4 mt-2">
                      <button onClick={showPrevImg} className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-green-500">Prev</button>
                      <button onClick={showNextImg} className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-green-500">Next</button>
                    </div>
                  )}
                </>
              )}
            </div>
            {/* Right: Details */}
            {modal.type === 'details' && (
              <div className="md:w-1/3 w-full p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{modal.item.description}</h3>
                <div className="mb-2"><span className="font-bold">Category:</span> {modal.item.details.category}</div>
                <div className="mb-2"><span className="font-bold">Project date:</span> {modal.item.details.date}</div>
                
                {/* GitHub and Live Demo Links */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {modal.item.github && (
                    <a 
                      href={modal.item.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {modal.item.githubServer && (
                    <a 
                      href={modal.item.githubServer} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition"
                    >
                      <FaGithub /> Server
                    </a>
                  )}
                  {modal.item.liveDemo && (
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
                
                <div className="mb-2"><span className="font-bold">Project information:</span></div>
                <div className="text-gray-200 whitespace-pre-line">{modal.item.details.info}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Portfolio; 