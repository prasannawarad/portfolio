import './Scss/Contact.scss';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    };

    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="page-title">Get In Touch</h1>
                
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Let&apos;s Connect</h2>
                        <p>
                            I&apos;m always interested in new opportunities and exciting projects. 
                            Whether you have a question, want to discuss a potential collaboration, 
                            or just want to say hello, feel free to reach out!
                        </p>
                        
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="icon">📧</div>
                                <div className="details">
                                    <h3>Email</h3>
                                    <p>prasanna@example.com</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="icon">📱</div>
                                <div className="details">
                                    <h3>Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="icon">📍</div>
                                <div className="details">
                                    <h3>Location</h3>
                                    <p>San Francisco, CA</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="icon">💼</div>
                                <div className="details">
                                    <h3>LinkedIn</h3>
                                    <p>linkedin.com/in/prasannawarad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form">
                        <h2>Send a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    required 
                                    placeholder="What's this about?"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    required 
                                    placeholder="Tell me about your project or inquiry..."
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact; 