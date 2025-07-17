import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { dark, setDark } = useTheme();
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black dark:bg-[#111] dark:text-white transition-colors duration-300">
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow"
        onClick={() => setDark((d) => !d)}
      >
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
