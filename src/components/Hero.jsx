import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';
import { FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id='home' className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-20 md:py-32 lg:py-48 min-h-screen">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-10 md:mb-0"
      >
        <img src={heroImage} alt="Hero" className="w-full md:w-96 h-auto object-cover rounded-2xl bg-gradient-to-t from-splash via-40%" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col space-y-4 text-center md:text-left"
      >
        <h2 className='text-2xl font-semibold'>Welcome, I am</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-customBlue">Kelvin Mutasa</h1>
        <p className="text-lg md:text-xl text-gray-700">Passionate MERN developer creating amazing web experiences.</p>
        <button className="px-8 py-3 bg-customBlue text-white rounded-full flex items-center justify-center mx-auto md:mx-0">
          <FaFileDownload className="inline mr-4" />
          Download CV
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;