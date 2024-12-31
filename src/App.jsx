import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from './components/Contact';
import Skill from './components/Skill';

const App = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentContactRef = contactRef.current;
    if (currentContactRef) {
      observer.observe(currentContactRef);
    }

    return () => {
      if (currentContactRef) {
        observer.unobserve(currentContactRef);
      }
    };
  }, []);

  return (
    <motion.div
      style={{ backgroundPositionY: backgroundY }}
      className="relative min-h-screen bg-bgColor bg-[radial-gradient(circle_500px_at_80%_500px,#8BAFD085,transparent)]"
    >
      <Nav />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <div ref={contactRef}>
        <Contact />
      </div>
      {!isContactVisible && (
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
          className="fixed bottom-10 right-10 bg-customBlue text-white px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-customBlue-dark"
        >
          Contact Us
        </Link>
      )}
    </motion.div>
  );
}

export default App;