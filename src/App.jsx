import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black">
      <Home />
      <main className="flex-1 md:ml-80">
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
