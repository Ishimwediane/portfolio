import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const navVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } },
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full md:w-1/3 bg-[#040b14] text-white flex flex-col justify-center px-8 py-12 md:fixed md:left-0 md:top-0 md:bottom-0 md:w-80 z-20"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold tracking-wider mb-2"
        >
          ISHIMWE Diane
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl md:text-2xl font-light mb-8 min-h-[2.5rem]"
        >
          <Typewriter
            words={["I am a passionate software engineer"]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h2>
        <motion.nav className="mb-8">
          <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="show"
            className="flex md:flex-col gap-8 text-lg font-medium"
          >
            {sections.map((section) => (
              <motion.li key={section.id} variants={linkVariants}>
                <a
                  href={`#${section.id}`}
                  className={`transition hover:text-green-400 ${activeSection === section.id ? 'text-green-400 font-bold' : ''}`}
                >
                  {section.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex gap-6 text-2xl"
        >
          <a href="https://twitter.com/ishimwediane400" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/ishimwe.crdiane?sfnsn=wa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/ishimwediane24?igsh=MW1tdGdhaHRxd3N0ZQ==" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-skype"></i></a>
          <a href="https://www.linkedin.com/in/ishimwe-diane-187701261?trk=contact-info" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-linkedin"></i></a>
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default Home; 