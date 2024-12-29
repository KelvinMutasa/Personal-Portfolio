import { motion, useScroll, useTransform } from 'framer-motion';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from './components/Contact';
import Skill from './components/Skill';

const App = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);

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
      <Contact />
    </motion.div>
  );
}

export default App;