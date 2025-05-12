import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      {/* <About /> */}
    </>
  );
}

export default App;
