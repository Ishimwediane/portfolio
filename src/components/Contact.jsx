import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaShareAlt } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://twitter.com/ishimwediane400', icon: <FaTwitter /> },
  { href: 'https://www.facebook.com/ishimwe.crdiane?sfnsn=wa&mibextid=RUbZ1f', icon: <FaFacebook /> },
  { href: 'https://www.instagram.com/ishimwediane24?igsh=MW1tdGdhaHRxd3N0ZQ==', icon: <FaInstagram /> },
  { href: 'https://github.com/', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/ishimwe-diane-187701261?trk=contact-info', icon: <FaLinkedin /> },
];

const Contact = () => (
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
      <form className="bg-[#181818] rounded-lg p-8 shadow max-w-2xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <input type="text" name="name" placeholder="Your Name" className="flex-1 p-3 rounded bg-[#222] text-white focus:outline-none" required />
          <input type="email" name="email" placeholder="Your Email" className="flex-1 p-3 rounded bg-[#222] text-white focus:outline-none" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" className="p-3 rounded bg-[#222] text-white focus:outline-none" required />
        <textarea name="message" rows="5" placeholder="Message" className="p-3 rounded bg-[#222] text-white focus:outline-none" required></textarea>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact; 