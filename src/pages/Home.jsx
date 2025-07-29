import './Scss/Home.scss';

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="container hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I&apos;m <span className="highlight">Prasanna</span>
                    </h1>
                    <p className="hero-subtitle">
                        Full Stack Developer & Creative Problem Solver
                    </p>
                    <p className="hero-description">
                        I build modern web applications with passion and precision
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">View My Work</button>
                        <button className="btn btn-secondary">Get In Touch</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-placeholder">
                        <span>👨‍💻</span>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I&apos;m a passionate developer who loves creating beautiful and functional web applications. 
                                With expertise in modern technologies, I bring ideas to life through clean code and 
                                intuitive user experiences.
                            </p>
                            <p>
                                When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                                open-source projects, or sharing knowledge with the developer community.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat">
                                <h3>3+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat">
                                <h3>50+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat">
                                <h3>100%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills">
                <div className="container">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Frontend</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">TypeScript</span>
                                <span className="skill-tag">HTML/CSS</span>
                                <span className="skill-tag">Sass</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Backend</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Express</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">PostgreSQL</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Tools</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">AWS</span>
                                <span className="skill-tag">Figma</span>
                                <span className="skill-tag">VSCode</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;