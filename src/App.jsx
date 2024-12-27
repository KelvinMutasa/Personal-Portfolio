import { motion, useScroll, useTransform } from 'framer-motion';
import Nav from "./componets/Nav";
import Hero from "./componets/Hero";
import About from "./componets/About";

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
    </motion.div>
  );
}

export default App;