import React, { useRef, useEffect, useState } from 'react';
import profileImg from '../assets/smile.jpg';
import { motion } from 'framer-motion';

const summary = {
  name: 'DIANE ISHIMWE',
  description: `I am a passionate and versatile software engineer with experience in web, mobile, and embedded systems development. I enjoy building impactful solutions and collaborating with teams to deliver high-quality products.`,
  contacts: [
    'Kigali, Rwanda',
    '+250790755673',
    'ishimwediane400@gmail.com',
  ],
};

// Grouped skills (original)
const skills = [
  { group: 'Programming Languages', items: [
    { name: 'Python', value: 70 }, // Advanced
    { name: 'Java', value: 70 }, // Advanced
    { name: 'JavaScript', value: 70 }, // Advanced
    { name: 'TypeScript', value: 70 },
    { name: 'Dart (Flutter)', value: 65 },
  ]},
  { group: 'Frontend', items: [
    { name: 'React', value: 85 },
    { name: 'React Native', value: 70 }, // Advanced
    { name: 'Flutter', value: 65 },
    { name: 'Next.js', value: 70 }, // Advanced
  ]},
  { group: 'Backend', items: [
    { name: 'Node.js', value: 80 },
    { name: 'Express.js', value: 80 },
    { name: 'Laravel', value: 60 },
  ]},
  { group: 'Databases', items: [
    { name: 'MongoDB', value: 85 }, // Expert
    { name: 'PostgreSQL', value: 70 },
  ]},
  { group: 'Embedded Systems & Industrial Automation', items: [
    { name: 'Embedded Systems', value: 80 },
    { name: 'Industrial Automation', value: 70 },
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

const education = [
  {
    school: 'Carnegie Mellon University Africa',
    degree: 'Bridge Program',
    date: '2024',
    description: 'Completed the Bridge Program focused on advanced computer science topics.'
  },
  {
    school: 'University of Rwanda',
    degree: 'BSc in Electronics and Telecommunication',
    date: '2019 - 2023',
    description: 'Graduated with honors, specialized in embedded systems and IoT.'
  },
];

const awards = [
  { name: 'Fullstack Course Certificate – kLab (2024–2025)', link: null },
  { name: 'Embedded Systems Course Certificate – ICT Chamber (2024–2025)', link: 'https://drive.google.com/file/d/1DXennapqJATfpIq-AKhjsAL-uwmkQ3ic/view?usp=sharing' },
  { name: 'Women Professional Development Program – U.S. Embassy (2025)', link: null },
  { name: 'Hackathon Finalist(Digital ID Hackthon) – Digital Student eCard (2024)', link: 'https://drive.google.com/file/d/15vDu7Tey_ANDTLGPjAKo9xFyskhT6qW9/view?usp=sharing' },
  { name: 'Bridge Program-Carnegie Mellon University(2024)', link: null },
];

function getSkillLevelLabel(value) {
  if (value >= 80) return 'Expert';
  if (value >= 60) return 'Advanced';
  if (value >= 40) return 'Intermediate';
  return 'Beginner';
}

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

const AnimatedSkillBar = ({ value }) => (
  <motion.div
    className="h-3 rounded bg-green-500"
    initial={{ width: 0 }}
    whileInView={{ width: value + '%' }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    style={{ minWidth: 0 }}
  />
);

const Timeline = ({ items, type }) => (
  <motion.div className="relative pl-8 border-l-2 border-gray-700" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
    {items.map((item, idx) => (
      <motion.div key={item.title || item.school || item.name} className="mb-12" variants={itemVariants}>
        <div className="flex items-center mb-2">
          <span className="w-4 h-4 bg-green-500 rounded-full absolute -left-2"></span>
          <span className={
            type === 'experience' || type === 'education'
              ? 'text-white text-xl font-bold ml-4'
              : 'text-white text-lg font-bold ml-4'
          }>
            {type === 'experience' ? item.title : type === 'education' ? item.school : item.name}
            {type === 'award' && item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-green-400 underline ml-2">View</a>
            )}
          </span>
        </div>
        {type !== 'award' && (
          <div className="ml-4 mb-2">
            <span className="bg-gray-800 text-white px-4 py-2 rounded font-bold text-lg">
              {item.date}
            </span>
          </div>
        )}
        <div className="ml-4 text-gray-100 whitespace-pre-line">
          {type === 'experience' ? item.description :
            type === 'education' ? (
              <>
                <div className="font-semibold text-white mb-1">{item.degree}</div>
                <div>{item.description}</div>
              </>
            ) : null}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="max-w-5xl mx-auto p-6 bg-[#111] text-white"
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
      {/* Centered profile image only */}
      <motion.div className="flex justify-center mb-12" variants={itemVariants}>
        <img src={profileImg} alt="Diane Ishimwe" className="rounded-full w-28 h-28 object-cover border-4 border-green-500" />
      </motion.div>
      {/* Experience & Education+Awards side by side */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={containerVariants}>
        {/* Experience timeline */}
        <motion.div variants={itemVariants}>
          <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>Experience</motion.h2>
          <Timeline items={experience} type="experience" />
        </motion.div>
        {/* Education timeline and Awards timeline */}
        <motion.div variants={itemVariants}>
          <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>Education</motion.h2>
          <Timeline items={education} type="education" />
          {/* Awards below education, as timeline */}
          <motion.h2 className="text-2xl font-bold mb-4 mt-8" variants={itemVariants}>Awards & Certifications</motion.h2>
          <Timeline items={awards} type="award" />
        </motion.div>
      </motion.div>
      {/* Skills full width, grouped, name above bar */}
      <motion.div className="bg-[#111] p-8 rounded-2xl" variants={itemVariants}>
        <motion.h2 className="text-lg tracking-widest font-medium mb-2 text-gray-400 relative" variants={itemVariants}>
          SKILLS
          <span className="inline-block w-24 h-1 bg-green-400 ml-4 align-middle rounded"></span>
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" variants={containerVariants}>
          {skills.map((group) => (
            <motion.div key={group.group} className="mb-8" variants={itemVariants}>
              <div className="font-bold uppercase mb-2">{group.group}</div>
              {group.items.length > 0 && group.items.map(skill => (
                <motion.div key={skill.name} className="mb-4" variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="ml-1 text-gray-200 font-semibold">{skill.name}</span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded relative">
                    <AnimatedSkillBar value={skill.value} />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white">{getSkillLevelLabel(skill.value)}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Resume; 