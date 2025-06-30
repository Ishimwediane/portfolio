import React, { useRef, useEffect, useState } from 'react';
import profileImg from '../assets/smile.jpg'; // Replace with your actual image if different

const summary = {
  name: 'DIANE ISHIMWE',
  description: `I am a passionate and versatile software engineer with experience in web, mobile, and embedded systems development. I enjoy building impactful solutions and collaborating with teams to deliver high-quality products.`,
  contacts: [
    'Kigali, Rwanda',
    '+250790755673',
    'ishimwediane400@gmail.com',
  ],
};

// Skill proficiency (0-100)
const skills = [
  { group: 'Programming Languages', items: [
    { name: 'Python', value: 90 },
    { name: 'Java', value: 80 },
    { name: 'JavaScript', value: 85 },
    { name: 'TypeScript', value: 70 },
    { name: 'Dart (Flutter)', value: 65 },
  ]},
  { group: 'Frontend', items: [
    { name: 'React', value: 85 },
    { name: 'React Native', value: 80 },
    { name: 'Flutter', value: 65 },
  ]},
  { group: 'Backend', items: [
    { name: 'Node.js', value: 80 },
    { name: 'Express.js', value: 80 },
    { name: 'Laravel', value: 60 },
  ]},
  { group: 'Databases', items: [
    { name: 'MongoDB', value: 75 },
    { name: 'PostgreSQL', value: 70 },
  ]},
  { group: 'Embedded Systems & Industrial Automation', items: [
    { name: 'Embedded Systems', value: 80 },
    { name: 'Industrial Automation', value: 70 },
  ]},
  { group: 'Mobile App Development', items: [
    { name: 'Mobile App Development', value: 80 },
  ]},
  { group: 'Web Development', items: [
    { name: 'Web Development', value: 85 },
  ]},
  { group: 'Version Control', items: [
    { name: 'Git', value: 85 },
  ]},
  { group: 'Tools & Technologies', items: [
    { name: 'REST APIs', value: 80 },
    { name: 'Agile Development', value: 75 },
  ]},
  { group: 'UI/UX Design Tools', items: [
    { name: 'Figma', value: 70 },
    { name: 'Canva', value: 70 },
  ]},
];

const experience = [
  {
    title: 'Imvunwa business group, Kimironko, Kigali - Web Developer & Marketing Assistant',
    date: 'June 2023 - May 2025',
    description: `Developed and managed Imvunwa's website and digital presence, handled social media, and improved online engagement through content strategies and analytics.`,
  },
  {
    title: 'kLab, Kigali – Software Development Intern',
    date: 'December 2024 – July 2025',
    description: `Participated in the Fullstack Web Development program, building web apps with React, React Native, TypeScript, Node.js, and MongoDB, and gained experience in agile teamwork and deployment.`,
  },
  {
    title: 'EdTech, Kicukiro, Kigali - Embedded System Trainer',
    date: 'February 2025 - April 2025',
    description: `Trained Advanced Level students in embedded systems, delivering hands-on lessons and guiding IoT and automation projects.`,
  },
  {
    title: 'ICT Chamber, Kigali – Embedded Systems Trainee',
    date: 'September 2023 – December 2023',
    description: `Completed intensive training in embedded systems, prototyping IoT solutions and developing embedded applications with Arduino, ESP32, and C/C++.`,
  },
  {
    title: 'IEEE, Muhoza, Musanze - Teacher Assistant',
    date: 'November 2020 - June 2021',
    description: `Taught Physics and Mathematics to high school students, helping them improve performance and understand scientific concepts.`,
  },
];

const awards = [
  { name: 'Fullstack Course Certificate – kLab (2024–2025)', link: null },
  { name: 'Embedded Systems Course Certificate – ICT Chamber (2024–2025)', link: 'https://drive.google.com/file/d/1DXennapqJATfpIq-AKhjsAL-uwmkQ3ic/view?usp=sharing' },
  { name: 'Women Professional Development Program – U.S. Embassy (2025)', link: null },
  { name: 'Hackathon Finalist(Digital ID Hackthon) – Digital Student eCard (2024)', link: 'https://drive.google.com/file/d/15vDu7Tey_ANDTLGPjAKo9xFyskhT6qW9/view?usp=sharing' },
  { name: 'Bridge Program-Carnegie Mellon University(2024)', link: null },
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
        <div className="mb-8 flex flex-col items-center">
          <img src={profileImg} alt="Diane Ishimwe" className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-green-500" />
          <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">Resume <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">CHECK MY RESUME</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Summary & Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Summary</h3>
            <div className="relative pl-8 border-l-2 border-gray-700 mb-8">
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
            </div>
            <h3 className="text-3xl font-bold mb-8">Skills</h3>
            <div className="mb-8">
              {skills.map((group, i) => (
                <div key={group.group} className="mb-8">
                  <div className="font-bold uppercase mb-2">{group.group}</div>
                  {group.items.length > 0 ? (
                    group.items.map(skill => (
                      <div key={skill.name} className="mb-2">
                        <div className="w-full h-3 bg-gray-800 rounded">
                          <div className="h-3 rounded bg-green-500" style={{ width: `${skill.value}%` }}></div>
                        </div>
                        <span className="ml-2 text-gray-200">{skill.name}</span>
                      </div>
                    ))
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {/* Experience & Awards */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Experience</h3>
            <div className="relative pl-8 border-l-2 border-gray-700 mb-12">
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
                  <div className="ml-4 text-gray-100 whitespace-pre-line">{exp.description}</div>
                </div>
              ))}
            </div>
            {/* Awards & Certifications Section */}
            <h3 className="text-3xl font-bold mb-8">Awards & Certifications</h3>
            <ul className="space-y-4">
              {awards.map((award, i) => (
                <li key={award.name} className="flex items-center gap-4">
                  <span className="font-bold text-lg">{award.name}</span>
                  {award.link && (
                    <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-green-400 underline ml-2">View</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 