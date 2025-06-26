import React, { useRef, useEffect, useState } from 'react';

const summary = {
  name: 'DIANE ISHIMWE',
  description: `I am a dedicated and enthusiastic developer with a strong foundation in web development and embedded systems. With a passion for creating innovative solutions, I have successfully completed several academic projects utilizing HTML, CSS, PHP, JavaScript, and IoT. I am highly motivated, eager to expand my knowledge, and always ready to tackle new challenges in the tech industry. My ability to collaborate effectively with others and my commitment to continuous learning make me a valuable team player. In my free time, I enjoy staying updated with the latest technology trends and honing my coding skills through various personal projects.`,
  contacts: [
    'Kigali,Rwanda',
    '+250790755673',
    'ishimwediane400@gmail.com',
  ],
};

const experience = [
  {
    title: 'IMVUNWA WEBSITE',
    date: 'May 2024 -Present',
    description: `I Developed a responsive advertising website using HTML, CSS, and JavaScript to showcase a business's welding, manufacturing, and electrical services, enhancing its online presence and client engagement.`,
  },
  {
    title: 'EdTech, Kicukiro,Kigali - Embedded system Trainer',
    date: 'February 2025-April 2025',
    description: `Conducted training sessions on embedded systems for Advanced Level students as part of an educational internship program.\n\nDelivered hands-on lessons on microcontrollers, sensors, and hardware programming.\n\nGuided students in building basic IoT and automation projects, bridging theory with real-world applications.\n\nPromoted technical creativity and innovation through project-based learning and mentorship.`,
  },
  {
    title: 'PHYSICS AND MATHEMATICS TUTOR',
    date: 'November 2020 - June 2021',
    location: 'Musanze,Rwanda',
    description: `i taught physics and mathematica at groupe Scolaire Muhoza 2, Musanze, Rwanda in senior two and senior five.`,
  },
];

const education = [
  {
    school: 'UNIVERSITY OF RWANDA',
    date: '2022 - now',
    description: 'Bachelor in computer and software engineering',
  },
  {
    school: 'ECOLE SECONDAIRE SAINT VINCENT MUHOZAN',
    date: '2018 - 2021',
    description: 'Advanced REB Certificate in Mathematics, Physics and computer science',
  },
];

const Resume = () => {
  const [highlighted, setHighlighted] = useState(null);
  const expRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      expRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setHighlighted(idx);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="resume" className="flex-1 bg-black text-white min-h-screen flex flex-col items-center justify-start px-4 py-12 overflow-auto">
      <div className="w-full max-w-6xl bg-[#111] rounded-lg shadow-lg p-8 mb-12">
        <div className="mb-8">
          <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">Resume <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">CHECK MY RESUME</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Summary & Education */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Summary</h3>
            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full absolute -left-2"></span>
                  <span className="text-green-500 text-xl font-bold ml-4">{summary.name}</span>
                </div>
                <p className="italic text-gray-100 mb-4 ml-4">{summary.description}</p>
                <ul className="list-disc ml-8 text-lg space-y-1">
                  {summary.contacts.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <h3 className="text-3xl font-bold mb-8">Education</h3>
              {education.map((edu) => (
                <div key={edu.school} className="mb-8">
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full absolute -left-2"></span>
                    <span className="text-green-500 text-xl font-bold ml-4">{edu.school}</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="bg-gray-800 text-white px-4 py-2 rounded font-bold text-lg">{edu.date.replace('now', 'now').toUpperCase()}</span>
                  </div>
                  <div className="ml-4 italic text-gray-200">{edu.description}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Experience</h3>
            <div className="relative pl-8 border-l-2 border-gray-700">
              {experience.map((exp, idx) => (
                <div
                  key={exp.title}
                  className={`mb-12 transition-all duration-300 ${highlighted === idx ? 'bg-[#1a1a1a] shadow-lg' : ''}`}
                  ref={el => expRefs.current[idx] = el}
                >
                  <div className="flex items-center mb-2">
                    <span className={`w-4 h-4 rounded-full absolute -left-2 transition-all duration-300 ${highlighted === idx ? 'bg-green-400 scale-125 shadow-lg' : 'bg-green-500'}`}></span>
                    <span className={`text-xl font-bold ml-4 transition-all duration-300 ${highlighted === idx ? 'text-green-400' : 'text-green-500'}`}>{exp.title}</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="bg-gray-800 text-white px-4 py-2 rounded font-bold text-lg">{exp.date}</span>
                  </div>
                  {exp.location && <div className="ml-4 italic text-gray-200 mb-2">{exp.location}</div>}
                  <div className="ml-4 text-gray-100 whitespace-pre-line">{exp.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 