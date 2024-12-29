import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
    return (
        <nav className='text-2xl font-semibold bg-bgColor z-10 fixed top-0 left-0 right-0 text-customBlue'>
          <div className='flex justify-between items-center px-40 my-3'>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="" className='h-16 border-2 border-solid border-customBlue rounded-full'/>
            </a>
            <div className='bg-customBlue text-white px-4 py-2 rounded-full'>
              <div className='flex space-x-4 '>
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
                  Skill
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
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <FaLinkedin />
              </a>
              <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </nav>
    );
};

export default Nav;