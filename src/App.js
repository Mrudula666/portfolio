import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/Education/Education';
import Interest from './components/skills/Interest';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Hero />
          <About />
          <Experience />
          <Interest />
          <Education />
          <Contact />
        </main>
      </div>
    </Router>
  );
};

export default App;
