import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact,FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss,SiExpress,SiMongodb,SiMongoose} from 'react-icons/si';


const skills = {
    frontend: [
        { name: 'HTML', value: 90 },
        { name: 'CSS', value: 85 },
        { name: 'JavaScript', value: 80 },
        { name: 'React', value: 75 },
    ],
    backend: [
        { name: 'Node.js', value: 70 },
        { name: 'Express', value: 65 },
        { name: 'MongoDB', value: 60 },
    ],
};

const SkillCard = ({ skill, isVisible }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const timeout = setTimeout(() => setProgress(skill.value), 500);
            return () => clearTimeout(timeout);
        } else {
            setProgress(0);
        }
    }, [isVisible, skill.value]);

    return (
        <motion.div
            className="m-4 w-full sm:w-1/2 md:w-5/12 lg:w-1/4 xl:w-1/6  "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center shadow-lg rounded-lg p-4">
                <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                        textColor: '#000',
                        pathColor: '#1e2238', 
                        trailColor: '#d6d6d6',
                    })}
                />
                <p className="text-lg font-semibold mt-2 md:text-2xl">{skill.name}</p>
            </div>
        </motion.div>
    );
};

SkillCard.propTypes = { skill: PropTypes.object.isRequired, isVisible: PropTypes.bool.isRequired };

const Skill = () => {
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
        <section id='skills' className="skills-container py-20 px-6 md:px-20 lg:px-40 min-h-screen" ref={sectionRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-customBlue text-center mb-10">Skills</h2>
            <div className="mb-10">
                <h3 className="text-4xl md:text-5xl font-semibold text-customBlue mb-10 text-center">Frontend</h3>
                <div className="flex flex-wrap justify-center mb-10">
                    <div className="flex space-x-8 text-4xl md:text-5xl">
                        <FaHtml5 className=" text-orange-600" />
                        <FaCss3Alt className=" text-blue-600" />
                        <FaJsSquare className=" text-yellow-500" />
                        <FaReact className=" text-blue-400" />
                        <SiTailwindcss className=" text-teal-400" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {skills.frontend.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} isVisible={isVisible} />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-4xl md:text-5xl font-semibold text-customBlue mb-10 text-center">Backend</h3>
                <div className="flex flex-wrap justify-center text-4xl md:text-5xl mb-10">
                    <div className="flex space-x-8">
                        <FaNodeJs className=" text-green-500" />
                        <SiExpress className=" text-gray-500" />
                        <SiMongodb className=" text-green-600" />
                        <SiMongoose className=" text-green-400" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {skills.backend.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;