// src/App.tsx
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Landing from './components/Landing';

export default function App() {
  return (
    <div className="min-h-screen px-5 overflow-hidden">
      <Navbar />
      <Landing />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}