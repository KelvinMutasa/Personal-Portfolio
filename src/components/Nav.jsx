import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`text-2xl font-semibold z-10 fixed top-0 left-0 right-0 text-customBlue ${isOpen ? 'bg-customBlue' : ''}`}>
            <div className='flex justify-between items-center px-6 lg:px-40 my-3'>
                <div className='flex-1 flex justify-center'>
                    <div className='hidden lg:flex bg-customBlue text-white px-4 py-2 rounded-full'>
                        <div className='flex space-x-4'>
                            <Link 
                                to="home" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass='active-link'
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                Home
                            </Link>
                            <Link 
                                to="about" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass='active-link'
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                About
                            </Link>
                            <Link 
                                to="skills" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass='active-link'
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                Skills
                            </Link>
                            <Link 
                                to="projects" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass='active-link'
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                Projects
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={toggleMenu} className="text-customBlue focus:outline-none lg:hidden">
                        {isOpen ? <FaTimes className="text-white text-2xl md:text-3xl relative z-30" /> : <FaBars className='si text-2xl md:text-3xl' />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden bg-customBlue text-white px-4 py-2 min-h-screen fixed top-0 left-0 right-0 z-20"
                >
                        <div className="lg:hidden md:text-3xl bg-customBlue text-white px-4 py-2 min-h-screen fixed top-0 left-0 right-0 z-20">
                            <div className='flex flex-col space-y-4 mt-20'>
                                <Link 
                                    to="home" 
                                    smooth={true} 
                                    duration={500}
                                    className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </Link>
                                <Link 
                                    to="about" 
                                    smooth={true} 
                                    duration={500}
                                    className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                                    onClick={toggleMenu}
                                >
                                    About
                                </Link>
                                <Link 
                                    to="skills" 
                                    smooth={true} 
                                    duration={500}
                                    className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                                    onClick={toggleMenu}
                                >
                                    Skills
                                </Link>
                                <Link 
                                    to="projects" 
                                    smooth={true} 
                                    duration={500}
                                    className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                                    onClick={toggleMenu}
                                >
                                    Projects
                                </Link>
                            </div>
                        </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Nav;