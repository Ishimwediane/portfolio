import React from 'react';

const skills = [
  { name: 'HTML', value: 80 },
  { name: 'CSS', value: 80 },
  { name: 'JavaScript', value: 60 },
  { name: 'Java', value: 70 },
  { name: 'PHP', value: 40 },
  { name: 'C++', value: 80 },
];

const techSkills = [
  { name: 'Microsoft Office Suite', value: 90 },
  { name: 'Photoshop', value: 40 },
  { name: 'Embedded System', value: 70 },
  { name: 'IOT', value: 90 },
];

const interests = [
  { icon: 'ri-store-line', color: 'text-yellow-400', label: 'Reading' },
  { icon: 'ri-bar-chart-box-line', color: 'text-blue-500', label: 'Debating' },
  { icon: 'ri-calendar-todo-line', color: 'text-pink-500', label: 'scheduling' },
  { icon: 'ri-paint-brush-line', color: 'text-purple-400', label: 'Writing' },
  { icon: 'ri-database-2-line', color: 'text-blue-400', label: 'Equality and social justice' },
  { icon: 'ri-gradienter-line', color: 'text-orange-400', label: 'Story telling' },
  { icon: 'ri-file-list-3-line', color: 'text-cyan-400', label: 'Unity and reconciliation' },
  { icon: 'ri-price-tag-2-line', color: 'text-indigo-500', label: 'Watching movie' },
];

const About = () => (
  <section id="about" className="flex-1 bg-black text-white min-h-screen flex flex-col items-center justify-start px-4 py-12 overflow-auto">
    <div className="w-full max-w-5xl bg-[#111] rounded-lg shadow-lg p-8 mb-12">
      <div className="mb-8">
        <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">About <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">LEARN MORE ABOUT ME</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img src="assets/img/smile.jpg" alt="Diane Ishimwe" className="rounded-lg object-cover w-64 h-80 shadow-md" />
        </div>
        <div className="flex-1">
          <h3 className="text-green-500 text-2xl font-bold mb-2">software engineer</h3>
          <p className="italic text-gray-200 mb-6">
            I'm Diane Ishimwe, a software engineer currently pursuing a Bachelor's degree in Computer and Software Engineering. I'm passionate about developing innovative solutions and continuously expanding my technical skills. I'm eager to connect with experienced professionals in the field to learn and grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center"><span className="text-green-500 mr-2"><i className="bi bi-chevron-right"></i></span><span className="font-bold">Birthday:</span><span className="ml-2">4 Februuary 2024</span></li>
              <li className="flex items-center"><span className="text-green-500 mr-2"><i className="bi bi-chevron-right"></i></span><span className="font-bold">Phone:</span><span className="ml-2">+250790755673</span></li>
              <li className="flex items-center"><span className="text-green-500 mr-2"><i className="bi bi-chevron-right"></i></span><span className="font-bold">City:</span><span className="ml-2">Kigali, Rwanda</span></li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="text-green-500 mr-2"><i className="bi bi-chevron-right"></i></span><span className="font-bold">Age:</span><span className="ml-2">21</span></li>
              <li className="flex items-center"><span className="text-green-500 mr-2"><i className="bi bi-chevron-right"></i></span><span className="font-bold">Email:</span><span className="ml-2">ishimwediane400@gmail.com</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Skills Section */}
    <div className="w-full max-w-5xl bg-[#111] rounded-lg shadow-lg p-8 mb-12">
      <div className="mb-8">
        <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">Skills <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
        <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-6">Programming Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, i) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-bold uppercase">{skill.name}</span>
              <span className="font-bold">{skill.value}%</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded">
              <div className="h-3 rounded bg-green-500" style={{ width: `${skill.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Technical Skills Section */}
    <div className="w-full max-w-5xl bg-[#111] rounded-lg shadow-lg p-8 mb-12">
      <div className="mb-8">
        <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">Technical Skills <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techSkills.map((skill, i) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-bold uppercase">{skill.name}</span>
              <span className="font-bold">{skill.value}%</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded">
              <div className="h-3 rounded bg-green-500" style={{ width: `${skill.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Interests Section */}
    <div className="w-full max-w-5xl bg-[#111] rounded-lg shadow-lg p-8 mb-12">
      <div className="mb-8">
        <span className="uppercase tracking-widest text-gray-300 text-sm font-semibold">Interests <span className="inline-block align-middle ml-2 w-16 h-1 bg-green-500"></span></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest) => (
          <div key={interest.label} className="flex items-center gap-4 bg-[#181818] rounded-lg p-4 shadow text-lg font-semibold">
            <i className={`${interest.icon} ${interest.color} text-3xl`}></i>
            <span>{interest.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About; 