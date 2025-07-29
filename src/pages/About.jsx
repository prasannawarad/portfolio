import './Scss/About.scss';

function About() {
    return (
        <div className="about-page">
            <div className="container">
                <h1 className="page-title">About Me</h1>
                
                <div className="about-content">
                    <div className="about-section">
                        <h2>Who I Am</h2>
                        <p>
                            I&apos;m a passionate full-stack developer with a love for creating 
                            beautiful, functional, and user-friendly web applications. With over 
                            3 years of experience in the tech industry, I&apos;ve worked on a 
                            variety of projects ranging from small business websites to complex 
                            enterprise applications.
                        </p>
                        <p>
                            My journey in technology started with curiosity and has evolved into 
                            a deep passion for solving real-world problems through code. I believe 
                            in writing clean, maintainable code and creating experiences that users 
                            love to interact with.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>My Approach</h2>
                        <p>
                            I approach every project with a user-first mindset, ensuring that 
                            the solutions I build are not only technically sound but also 
                            intuitive and accessible. I&apos;m a firm believer in the power 
                            of collaboration and continuous learning.
                        </p>
                        <p>
                            Whether it&apos;s frontend development with React, backend services 
                            with Node.js, or database design, I strive to deliver high-quality 
                            solutions that exceed expectations.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>What Drives Me</h2>
                        <div className="values-grid">
                            <div className="value-item">
                                <h3>Innovation</h3>
                                <p>Constantly exploring new technologies and methodologies to stay ahead of the curve.</p>
                            </div>
                            <div className="value-item">
                                <h3>Quality</h3>
                                <p>Committed to writing clean, efficient, and well-documented code.</p>
                            </div>
                            <div className="value-item">
                                <h3>Collaboration</h3>
                                <p>Believing that the best solutions come from working together and sharing knowledge.</p>
                            </div>
                            <div className="value-item">
                                <h3>Growth</h3>
                                <p>Always learning and improving, both personally and professionally.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-section">
                        <h2>When I&apos;m Not Coding</h2>
                        <p>
                            Outside of coding, you can find me contributing to open-source projects, 
                            participating in tech meetups, or sharing knowledge with the developer 
                            community. I also enjoy reading tech blogs, experimenting with new 
                            frameworks, and mentoring junior developers.
                        </p>
                        <p>
                            I believe in giving back to the community that has given me so much, 
                            and I&apos;m always excited to connect with fellow developers and 
                            tech enthusiasts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 