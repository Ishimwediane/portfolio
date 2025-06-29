import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaShareAlt } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://twitter.com/ishimwediane400', icon: <FaTwitter /> },
  { href: 'https://www.facebook.com/ishimwe.crdiane?sfnsn=wa&mibextid=RUbZ1f', icon: <FaFacebook /> },
  { href: 'https://www.instagram.com/ishimwediane24?igsh=MW1tdGdhaHRxd3N0ZQ==', icon: <FaInstagram /> },
  { href: 'https://github.com/', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/ishimwe-diane-187701261?trk=contact-info', icon: <FaLinkedin /> },
];

// Backend URL configuration
const BACKEND_URL = 'https://portfolio-server-yhrm.onrender.com';

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
    <section id="contact" className="flex-1 bg-black text-white min-h-screen flex flex-col items-center justify-start px-4 py-12 overflow-auto">
      <div className="w-full max-w-6xl bg-[#111] rounded-lg shadow-lg p-8 mb-12">
        <div className="mb-8">
          <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">Contact <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">CONTACT ME</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col gap-8">
            <div className="flex items-center bg-[#181818] rounded-lg p-8 shadow">
              <div className="bg-[#222] rounded-full p-5 mr-6 flex items-center justify-center">
                <FaMapMarkerAlt className="text-green-500 text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-200">My Address</div>
                <div className="text-lg">Kigali,Rwanda</div>
              </div>
            </div>
            <div className="flex items-center bg-[#181818] rounded-lg p-8 shadow">
              <div className="bg-[#222] rounded-full p-5 mr-6 flex items-center justify-center">
                <FaEnvelope className="text-green-500 text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-200">Email Me</div>
                <div className="text-lg">ishimwediane400@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center bg-[#181818] rounded-lg p-8 shadow">
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
            </div>
            <div className="flex items-center bg-[#181818] rounded-lg p-8 shadow">
              <div className="bg-[#222] rounded-full p-5 mr-6 flex items-center justify-center">
                <FaPhoneAlt className="text-green-500 text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-200">Call Me</div>
                <div className="text-lg">+250790755673</div>
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-[#181818] rounded-lg p-8 shadow max-w-2xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
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
          </div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject}
            onChange={handleInputChange}
            className="p-3 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
            required 
            disabled={status === 'sending'}
          />
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Message" 
            value={formData.message}
            onChange={handleInputChange}
            className="p-3 rounded bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
            required 
            disabled={status === 'sending'}
          />
          
          {/* Status Message */}
          {statusMessage && (
            <div className={`p-3 rounded text-center ${getStatusColor()} bg-[#222]`}>
              {statusMessage}
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className={`font-bold py-3 px-8 rounded transition ${
              status === 'sending' 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 