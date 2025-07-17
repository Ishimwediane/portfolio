import React from 'react';

const Home = () => {
  return (
    <aside className="min-h-screen w-full md:w-1/3 bg-[#040b14] text-white flex flex-col justify-center px-8 py-12 md:fixed md:left-0 md:top-0 md:bottom-0 md:w-80 z-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">ISHIMWE Diane</h1>
        <h2 className="text-xl md:text-2xl font-light mb-8">I am a passionate software engineer</h2>
        <nav className="mb-8">
          <ul className="flex md:flex-col gap-8 text-lg font-medium">
            <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
            <li><a href="#resume" className="hover:text-green-400 transition">Resume</a></li>
            <li><a href="#portfolio" className="hover:text-green-400 transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </nav>
        <div className="flex gap-6 text-2xl">
          <a href="https://twitter.com/ishimwediane400" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/ishimwe.crdiane?sfnsn=wa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/ishimwediane24?igsh=MW1tdGdhaHRxd3N0ZQ==" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-skype"></i></a>
          <a href="https://www.linkedin.com/in/ishimwe-diane-187701261?trk=contact-info" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </aside>
  );
};

export default Home; 