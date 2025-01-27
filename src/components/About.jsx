import { useState, useRef, useEffect } from 'react';
import aboutImage from '../assets/about-image.jpg';
import { FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };

    }, []);

    return (
        <>
            
            <section id="about" className="px-6 md:px-20 lg:px-40 py-20 lg:py-32 2xl:px-40 2xl:py-0 min-h-screen" ref={sectionRef}>
                <h2 className="text-4xl md:text-5xl font-bold text-customBlue text-center">About Me</h2>
                 <div className='flex flex-col lg:flex-row items-center justify-between py-20 2xl:py-40'>     
                        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
                            <div className="flex space-x-4 justify-center md:text-xl lg:justify-start">
                                <button
                                    className={`px-4 py-2 rounded-full ${activeTab === 'tab1' ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setActiveTab('tab1')}
                                >
                                    <FaUser className="inline mr-2" />
                                    Education
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-full ${activeTab === 'tab2' ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setActiveTab('tab2')}
                                >
                                    <FaGraduationCap className="inline mr-2" />
                                    Summary
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-full ${activeTab === 'tab3' ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setActiveTab('tab3')}
                                >
                                    <FaBriefcase className="inline mr-2" />
                                    Experience
                                </button>
                            </div>
                            <div className="mt-10">
                                <AnimatePresence mode="wait">
                                    {activeTab === 'tab1' && (
                                        <motion.div
                                            key="tab1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-transparent p-6 rounded-lg shadow-md md:text-xl"
                                        >
                                            <p>
                                                I am a full stack MERN developer with a strong foundation in web development and a passion for continuous learning.
                                                Seeking opportunities to contribute to dynamic teams and enhance my skills through hands-on projects and collaboration.
                                                I have experience in web development languages and technologies.
                                                I also firmly believe in software engineering best practices particularly Argile development using SCRUM framework in a world of continuous and abrupt changes.
                                                My strong passion is user experience which drove me into frontend development with HTML, CSS and javascript in the early days of my career.
                                                Along the way I have taken up React and also have an appreciation of Node and MongoDB which I acquired through freelance development jobs.
                                            </p>
                                        </motion.div>
                                    )}
                                    {activeTab === 'tab2' && (
                                        <motion.div
                                            key="tab2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-transparent p-6 rounded-lg shadow-md md:text-xl"
                                        >
                                            <h3 className="text-2xl md:text-3xl font-bold text-customBlue">Bachelor of Technology</h3>
                                            <p className="text-lg md:text-xl text-gray-700">Harare Institute of Technology</p>
                                            <p className="text-lg md:text-xl text-gray-700">2015 - 2020</p>            
                                        </motion.div>
                                    )}
                                    {activeTab === 'tab3' && (
                                        <motion.div
                                            key="tab3"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-transparent p-6 rounded-lg shadow-md"
                                        >
                                            <div className="relative">
                                                <div className="absolute left-4 top-0 h-full border-l-2 border-customBlue"></div>
                                                <div className="space-y-8 pl-8">
                                                    <div className="relative flex items-start">
                                                        <div className="absolute left-[-1.25rem] top-0 w-2.5 h-2.5 bg-customBlue rounded-full"></div>
                                                        <div>
                                                            <h4 className="text-xl md:text-2xl font-semibold text-customBlue">Technical Support</h4>
                                                            <p className="text-lg md:text-xl text-gray-700">AT&T Inc</p>
                                                            <p className="text-lg md:text-xl text-gray-700">2024 - Present</p>
                                                            <p className="text-gray-700 md:text-xl">Providing technical support for the internet costomer </p>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex items-start">
                                                        <div className="absolute left-[-1.25rem] top-0 w-2.5 h-2.5 bg-customBlue rounded-full"></div>
                                                        <div>
                                                            <h4 className="text-xl md:text-2xl font-semibold text-customBlue">Junior Developer</h4>
                                                            <p className="text-lg md:text-xl text-gray-700">Strategic Informtion Systems</p>
                                                            <p className="text-lg md:text-xl text-gray-700">2021 - 2023</p>
                                                            <p className="text-gray-700 md:text-xl">Worked on full-stack development projects using HCL notes and HCL Volt, including building RESTful APIs and integrating with front-end applications.</p>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex items-start">
                                                        <div className="absolute left-[-1.25rem] top-0 w-2.5 h-2.5 bg-customBlue rounded-full"></div>
                                                        <div>
                                                            <h4 className="text-xl md:text-2xl font-semibold text-customBlue">Frontend Developer/Customer Success Manager</h4>
                                                            <p className="text-lg md:text-xl text-gray-700">NextUser</p>
                                                            <p className="text-lg md:text-xl text-gray-700">2022</p>
                                                            <p className="text-gray-700 md:text-xl">Worked on data analysis and presentation on AI powered e-commerce workflows and developed company website using wordpress</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                                    
                        <div className=" bg-gradient-to-br from-splash to-transparent rounded-2xl  flex justify-center lg:justify-end mt-20 lg:mt-5 ">
                            <motion.img 
                            src={aboutImage} 
                            alt="About" 
                            className="h-auto object-cover rounded-2xl shadow-lg w-full max-w-72 md:max-w-96" 
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isVisible ? 12 : 0 }}
                            transition={{ duration: 1 }}
                            whileHover={{ rotate: 0 }}
                            />
                        </div>
                     </div>              
            </section>
        </>
    );
};

export default About;