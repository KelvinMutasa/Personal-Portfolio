import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='text-2xl font-semibold bg-bgColor z-10 fixed top-0 left-0 right-0 text-customBlue'>
            <div className='flex justify-between items-center px-6 md:px-40 my-3'>
                <div className='flex-1 flex justify-center md:justify-start'>
                    <div className='hidden md:flex bg-customBlue text-white px-4 py-2 rounded-full'>
                        <div className='flex space-x-4'>
                            <Link 
                                to="home" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass="active-link"
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                Home
                            </Link>
                            <Link 
                                to="about" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass="active-link"
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                About
                            </Link>
                            <Link 
                                to="skills" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass="active-link"
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                Skills
                            </Link>
                            <Link 
                                to="projects" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass="active-link"
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                Projects
                            </Link>
                            <Link 
                                to="contact" 
                                smooth={true} 
                                duration={500}
                                spy={true}
                                activeClass="active-link"
                                className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-customBlue focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-customBlue text-white px-4 py-2 min-h-screen">
                    <div className='flex flex-col space-y-4'>
                        <Link 
                            to="home" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                            className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                            className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link 
                            to="skills" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                            className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                            className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                            className="cursor-pointer text-white px-3 rounded-full hover:bg-slate-400 hover:text-customBlue"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;