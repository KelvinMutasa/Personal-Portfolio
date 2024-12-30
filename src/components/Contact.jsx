import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsappSquare } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" className="bg-customBlue text-white py-10 px-6 md:px-56">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="contact-details text-center md:text-left space-y-4 md:space-y-0 md:space-x-10">
                    <p className="text-lg">Email: mutasakelvin@gmail.com</p>
                    <p className="text-lg">Phone: +420 733 69 2266</p>
                    <p className="text-lg">Location: Brno, Czechia</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://github.com/KelvinMutasa" target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/kelvin-mutasa-095b05b0" target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:mutasakelvin@gmail.com" target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                        <FaEnvelope />
                    </a>
                    <a href="https://wa.me/420733692266" target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                        <FaWhatsappSquare />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Contact;