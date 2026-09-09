import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CVSection } from './components/CVSection';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onEnter={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CVSection />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
