import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <Home />
        <main className="flex-1 md:ml-80">
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
