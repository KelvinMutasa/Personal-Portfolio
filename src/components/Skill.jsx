import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

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
            className="m-4 w-1/2 md:w-1/4 lg:w-1/6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                        textColor: '#000',
                        pathColor: '#8bafd0',
                        trailColor: '#d6d6d6',
                    })}
                />
                <p className="text-lg font-semibold mt-2">{skill.name}</p>
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id='skills' className="skills-container py-20 min-h-screen" ref={sectionRef}>
            <div className="mb-10">
                <h2 className="text-4xl font-bold text-customBlue text-center mb-10">Frontend Skills</h2>
                <div className="flex flex-wrap justify-center">
                    {skills.frontend.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} isVisible={isVisible} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-customBlue text-center mb-10">Backend Skills</h2>
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