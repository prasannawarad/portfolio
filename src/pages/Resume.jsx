import './Scss/Resume.scss';
import resumePDF from '../../Resume/resume.pdf';

function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Prasanna_Warad_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-page">
            <div className="container">
                <div className="resume-header">
                    <h1 className="page-title">Resume</h1>
                    <button onClick={handleDownload} className="download-btn">
                        📄 Download Resume
                    </button>
                </div>
                
                <div className="resume-content">
                    <div className="resume-section">
                        <h2>Experience</h2>
                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Senior Full Stack Developer</h3>
                                <span className="company">TechCorp Inc.</span>
                                <span className="duration">2022 - Present</span>
                            </div>
                            <ul>
                                <li>Led development of enterprise web applications using React, Node.js, and MongoDB</li>
                                <li>Managed a team of 5 developers and delivered 3 major projects on time</li>
                                <li>Implemented CI/CD pipelines and improved deployment efficiency by 40%</li>
                                <li>Mentored junior developers and conducted code reviews</li>
                            </ul>
                        </div>
                        
                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Full Stack Developer</h3>
                                <span className="company">StartupXYZ</span>
                                <span className="duration">2020 - 2022</span>
                            </div>
                            <ul>
                                <li>Built and maintained multiple client websites and web applications</li>
                                <li>Developed RESTful APIs and integrated third-party services</li>
                                <li>Optimized application performance and improved loading times by 60%</li>
                                <li>Collaborated with design team to implement responsive UI/UX</li>
                            </ul>
                        </div>
                        
                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Frontend Developer</h3>
                                <span className="company">Digital Agency ABC</span>
                                <span className="duration">2019 - 2020</span>
                            </div>
                            <ul>
                                <li>Created responsive websites using HTML, CSS, JavaScript, and React</li>
                                <li>Worked with clients to understand requirements and deliver solutions</li>
                                <li>Implemented modern design patterns and best practices</li>
                                <li>Participated in agile development processes</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="resume-section">
                        <h2>Education</h2>
                        <div className="education-item">
                            <h3>Bachelor of Science in Computer Science</h3>
                            <span className="institution">University of Technology</span>
                            <span className="year">2015 - 2019</span>
                            <p>Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
                        </div>
                    </div>
                    
                    <div className="resume-section">
                        <h2>Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h3>Frontend</h3>
                                <ul>
                                    <li>React.js</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>TypeScript</li>
                                    <li>HTML5 & CSS3</li>
                                    <li>Sass/SCSS</li>
                                    <li>Redux</li>
                                </ul>
                            </div>
                            
                            <div className="skill-category">
                                <h3>Backend</h3>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Python</li>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                    <li>RESTful APIs</li>
                                </ul>
                            </div>
                            
                            <div className="skill-category">
                                <h3>Tools & Others</h3>
                                <ul>
                                    <li>Git & GitHub</li>
                                    <li>Docker</li>
                                    <li>AWS</li>
                                    <li>CI/CD</li>
                                    <li>Agile/Scrum</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="resume-section">
                        <h2>Certifications</h2>
                        <div className="certifications">
                            <div className="certification-item">
                                <h3>AWS Certified Developer</h3>
                                <span className="issuer">Amazon Web Services</span>
                                <span className="year">2023</span>
                            </div>
                            <div className="certification-item">
                                <h3>MongoDB Certified Developer</h3>
                                <span className="issuer">MongoDB University</span>
                                <span className="year">2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume; 