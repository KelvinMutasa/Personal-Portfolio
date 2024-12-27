import { useState } from 'react';
import aboutImage from '../assets/about-image.jpg';
import { FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion,AnimatePresence } from 'framer-motion';

const About = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <> 
            <h2 className="text-4xl font-bold text-customBlue text-center ">About Me</h2>
            <section id="about" className="flex items-center justify-between px-56 py-20 ">
                <div className="w-full md:w-1/2 flex flex-col space-y-4 ">
                    <div className="flex space-x-4 ">
                        <button
                            className={`px-4 py-2 rounded-full ${activeTab === 'tab1' ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setActiveTab('tab1')}
                        >
                            <FaUser className="inline mr-2"/>
                            Summary
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full ${activeTab === 'tab2' ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setActiveTab('tab2')}
                        >
                            <FaGraduationCap className="inline mr-2"/>
                            Education
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full ${activeTab === 'tab3' ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setActiveTab('tab3')}
                        >
                            <FaBriefcase className="inline mr-2"/>
                            Experience
                        </button>
                    </div>
                    <div className="mt-10">
                        <AnimatePresence mode='wait'>
                            {activeTab === 'tab1' && (
                                        <motion.div
                                            key="tab1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-transparent p-6 rounded-lg shadow-md"
                                        >
                                                <p>
                                                    I am a full stack MERN developer with a strong foundation in web development and a passion for continuous learning. 
                                                    Seeking opportunities to contribute to dynamic teams and enhance my skills through hands-on projects and collaboration. 
                                                    I have experience in web development languages and technologies. 
                                                    I also firmly believe in software engineering best practices particularly Argile development using SCRUM framework in a world of continuous and abrupt changes. 
                                                    My strong passion is user experience which drove me into frontend development with HTML, CSS and javascript in the early days of my career. 
                                                    Along the way I have taken up React  and also have an appreciation of Node and MongoDB which I acquired through freelance development jobs.
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
                                            className="bg-transparent p-6 rounded-lg shadow-md"
                                        >
                                            <h3 className="text-2xl font-bold text-customBlue">Bachelor of Technology</h3>
                                            <p className="text-lg text-gray-700">Harare Institute of Technology</p>
                                            <p className="text-lg text-gray-700">2015 - 2020</p>
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
                                                    <h4 className="text-xl font-semibold text-customBlue">Front-End Developer</h4>
                                                    <p className="text-lg text-gray-700">Company A</p>
                                                    <p className="text-lg text-gray-700">2021 - Present</p>
                                                    <p className="text-gray-700">Developed and maintained the front-end of the company main product using React and Tailwind CSS.</p>
                                                </div>
                                            </div>
                                            <div className="relative flex items-start">
                                                <div className="absolute left-[-1.25rem] top-0 w-2.5 h-2.5 bg-customBlue rounded-full"></div>
                                                <div>
                                                    <h4 className="text-xl font-semibold text-customBlue">Full-Stack Developer</h4>
                                                    <p className="text-lg text-gray-700">Company B</p>
                                                    <p className="text-lg text-gray-700">2019 - 2021</p>
                                                    <p className="text-gray-700">Worked on full-stack development projects using the MERN stack, including building RESTful APIs and integrating with front-end applications.</p>
                                                </div>
                                            </div>
                                            <div className="relative flex items-start">
                                                <div className="absolute left-[-1.25rem] top-0 w-2.5 h-2.5 bg-customBlue rounded-full"></div>
                                                <div>
                                                    <h4 className="text-xl font-semibold text-customBlue">Intern</h4>
                                                    <p className="text-lg text-gray-700">Company C</p>
                                                    <p className="text-lg text-gray-700">2018 - 2019</p>
                                                    <p className="text-gray-700">Assisted in developing and testing web applications, gaining hands-on experience with various web technologies.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </motion.div>
                                    )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="">
                    <div className=" bg-gradient-to-br from-splash to-transparent rounded-2xl">
                        <img src={aboutImage} alt="About" className=" rotate-12 w-80 h-auto object-cover rounded-2xl shadow-lg hover:rotate-0 transition hover:duration-500 "/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;