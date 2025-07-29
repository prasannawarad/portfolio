import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Scss/Navbar.scss';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <span className="logo-text">Prasanna</span>
                </Link>

                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link 
                        to="/" 
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link 
                        to="/projects" 
                        className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                    <Link 
                        to="/resume" 
                        className={`nav-link ${isActive('/resume') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Resume
                    </Link>
                    <Link 
                        to="/contact" 
                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 