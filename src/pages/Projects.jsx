import './Scss/Projects.scss';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
            image: "🛒",
            liveUrl: "https://ecommerce-demo.com",
            githubUrl: "https://github.com/prasanna/ecommerce-platform",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Material-UI"],
            image: "📋",
            liveUrl: "https://task-app-demo.com",
            githubUrl: "https://github.com/prasanna/task-management",
            featured: true
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
            technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
            image: "🌤️",
            liveUrl: "https://weather-dashboard-demo.com",
            githubUrl: "https://github.com/prasanna/weather-app",
            featured: false
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "A responsive portfolio website built with React and SCSS, featuring modern design and smooth animations.",
            technologies: ["React", "SCSS", "Vite", "GitHub Pages"],
            image: "💼",
            liveUrl: "https://prasannawarad.com",
            githubUrl: "https://github.com/prasanna/portfolio",
            featured: false
        },
        {
            id: 5,
            title: "Blog Platform",
            description: "A content management system for blogs with rich text editor, user authentication, and SEO optimization.",
            technologies: ["React", "Node.js", "MongoDB", "Quill.js", "JWT"],
            image: "📝",
            liveUrl: "https://blog-platform-demo.com",
            githubUrl: "https://github.com/prasanna/blog-platform",
            featured: false
        },
        {
            id: 6,
            title: "Chat Application",
            description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
            technologies: ["React", "Socket.io", "Express", "MongoDB", "Multer"],
            image: "💬",
            liveUrl: "https://chat-app-demo.com",
            githubUrl: "https://github.com/prasanna/chat-app",
            featured: false
        }
    ];

    return (
        <div className="projects-page">
            <div className="container">
                <h1 className="page-title">My Projects</h1>
                <p className="page-description">
                    Here are some of the projects I&apos;ve worked on. Each project represents 
                    different challenges and learning opportunities in my development journey.
                </p>
                
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                            <div className="project-image">
                                <span className="project-icon">{project.image}</span>
                            </div>
                            
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                
                                <div className="project-links">
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link live-link"
                                    >
                                        🌐 Live Demo
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link github-link"
                                    >
                                        📂 View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="more-projects">
                    <h2>More Projects</h2>
                    <p>
                        I&apos;m constantly working on new projects and learning new technologies. 
                        Check out my GitHub profile for more of my work and contributions to open-source projects.
                    </p>
                    <a 
                        href="https://github.com/prasannawarad" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-profile-link"
                    >
                        🐙 View My GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects; 