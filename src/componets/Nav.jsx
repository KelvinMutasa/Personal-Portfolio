import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
    const [activeClass, setActiveClass] = useState('home');

    return (
        <nav className='text-2xl font-semibold bg-bgColor z-10 fixed top-0 left-0 right-0 text-customBlue'>
          <div className='flex justify-between items-center px-40 my-3'>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="" className='h-16 border-2 border-solid border-customBlue rounded-full'/>
            </a>
            <div className='bg-customBlue text-white px-4 py-2 rounded-full'>
              <div className='flex space-x-4'>
                <Link 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  className={`cursor-pointer ${activeClass === 'home' ? 'bg-white text-customBlue rounded-full px-3' : 'text-white'}`}
                  onClick={() => setActiveClass('home')}
                >
                  Home
                </Link>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  className={`cursor-pointer ${activeClass === 'about' ? 'bg-white text-customBlue rounded-full px-3' : 'text-white'}`}
                  onClick={() => setActiveClass('about')}
                >
                  About
                </Link>
                <Link 
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  className={`cursor-pointer ${activeClass === 'projects' ? 'bg-white text-customBlue rounded-full px-3' : 'text-white'}`}
                  onClick={() => setActiveClass('projects')}
                >
                  Projects
                </Link>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className={`cursor-pointer ${activeClass === 'contact' ? 'bg-white text-customBlue rounded-full px-3' : 'text-white'}`}
                  onClick={() => setActiveClass('contact')}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </nav>
    );
};

export default Nav;