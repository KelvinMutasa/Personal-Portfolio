import PropTypes from 'prop-types';

const ProjectCard = ({ title, description }) => {
    return (
        <div className="project-card bg-white shadow-lg rounded-lg p-8 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 md:text-center">
            <h3 className="text-3xl font-bold mb-4 md:text-4xl">{title}</h3>
            <p className="text-gray-700 mb-6 md:text-xl">{description}</p>
            <div className="buttons flex space-x-4 md:flex-col md:space-y-4 md:space-x-0 md:items-center md:text-xl">
                <button className="px-6 py-3 bg-customBlue text-white rounded-full">View</button>
                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full">Source</button>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const Projects = () => {
    const projectData = [
        { title: 'Project 1', description: 'Description for project 1' },
        { title: 'Project 2', description: 'Description for project 2' },
        { title: 'Project 3', description: 'Description for project 3' },
        { title: 'Project 4', description: 'Description for project 4' },
    ];

    return (
        <section id="projects" className="projects-container py-20 px-6 md:px-20 lg:px-40 bg-bgColor min-h-screen">
            <h2 className="text-4xl font-bold text-customBlue text-center mb-10 md:text-5xl">Projects</h2>
            <div className="flex flex-wrap justify-center">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} />
                ))}
            </div>
        </section>
    );
};

export default Projects;