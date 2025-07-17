import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://twitter.com/ishimwediane400', icon: <FaTwitter /> },
  { href: 'https://www.facebook.com/ishimwe.crdiane?sfnsn=wa&mibextid=RUbZ1f', icon: <FaFacebook /> },
  { href: 'https://www.instagram.com/ishimwediane24?igsh=MW1tdGdhaHRxd3N0ZQ==', icon: <FaInstagram /> },
  { href: 'https://github.com/', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/ishimwe-diane-187701261?trk=contact-info', icon: <FaLinkedin /> },
];

// Backend URL configuration
const BACKEND_URL = 'https://portfolio-server-yhrm.onrender.com';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 0.7, ease: 'easeOut' }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.section
      id="contact"
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
          <motion.span className="uppercase tracking-widest text-gray-300 text-sm font-semibold" variants={itemVariants}>
            Contact <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span>
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6" variants={itemVariants}>
            CONTACT ME
          </motion.h2>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" variants={containerVariants}>
          <motion.div className="flex flex-col gap-8" variants={itemVariants}>
            <motion.div className="flex items-center bg-[#181818] rounded-lg p-8 shadow" variants={itemVariants}>
              <div className="bg-[#222] rounded-full p-5 mr-6 flex items-center justify-center">
                <FaMapMarkerAlt className="text-green-500 text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-200">My Address</div>
                <div className="text-lg">Kigali,Rwanda</div>
              </div>
            </motion.div>
            <motion.div className="flex items-center bg-[#181818] rounded-lg p-8 shadow" variants={itemVariants}>
              <div className="bg-[#222] rounded-full p-5 mr-6 flex items-center justify-center">
                <FaEnvelope className="text-green-500 text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-200">Email Me</div>
                <div className="text-lg">ishimwediane400@gmail.com</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col gap-8" variants={itemVariants}>
            <motion.div className="flex items-center bg-[#181818] rounded-lg p-8 shadow" variants={itemVariants}>
              <div className="bg-[#222] rounded-full p-5 mr-6 flex items-center justify-center">
                <FaShareAlt className="text-green-500 text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-200">Social Profiles</div>
                <div className="flex gap-4 mt-2 text-2xl">
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div className="flex items-center bg-[#181818] rounded-lg p-8 shadow" variants={itemVariants}>
              <div className="bg-[#222] rounded-full p-5 mr-6 flex items-center justify-center">
                <FaPhoneAlt className="text-green-500 text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-200">Call Me</div>
                <div className="text-lg">+250790755673</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#181818] rounded-lg p-8 shadow max-w-2xl mx-auto flex flex-col gap-6"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col md:flex-row gap-6" variants={itemVariants}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 p-3 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
              required 
              disabled={status === 'sending'}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleInputChange}
              className="flex-1 p-3 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
              required 
              disabled={status === 'sending'}
            />
          </motion.div>
          <motion.input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject}
            onChange={handleInputChange}
            className="p-3 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
            required 
            disabled={status === 'sending'}
            variants={itemVariants}
          />
          <motion.textarea 
            name="message" 
            rows="5" 
            placeholder="Message" 
            value={formData.message}
            onChange={handleInputChange}
            className="p-3 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
            required 
            disabled={status === 'sending'}
            variants={itemVariants}
          />
          {/* Status Message */}
          {statusMessage && (
            <motion.div className={`p-3 rounded text-center ${getStatusColor()} bg-[#222]`} variants={itemVariants}>
              {statusMessage}
            </motion.div>
          )}
          <motion.button 
            type="submit" 
            disabled={status === 'sending'}
            className={`font-bold py-3 px-8 rounded transition ${
              status === 'sending' 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
            variants={itemVariants}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact; 