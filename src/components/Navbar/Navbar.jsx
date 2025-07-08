import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from './../../assets/image1.png';
import {Link, useNavigate, useLocation} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navbarItems = [
        { id: 1, name: 'HOME', path: '/' },
        { id: 2, name: 'ABOUT US', path: '/about' },
        { id: 3, name: 'SERVICES', path: '/singleservice' },
        { id: 4, name: 'TREATMENTS', path: '/treatments' },
        { id: 5, name: 'CONTACT US', path: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBookAppointment = () => {
        setIsMobileMenuOpen(false);
        navigate('/contact');
        // Small delay to ensure page loads before scrolling
        setTimeout(() => {
            const contactForm = document.querySelector('.contact-form-wrapper');
            if (contactForm) {
                contactForm.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 100);
    };

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (    
        <div className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/" onClick={handleNavClick}>
                            <img src={logo} alt="Dr. Pandharkar Chest Clinic" />
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`} 
                            type="button" 
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation"
                        >
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            {/* Navbar Links */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               {navbarItems.map(navSingle =>
                                    <li className="nav-item" key={navSingle.id}>
                                        <Link 
                                            className={`nav-link ${location.pathname === navSingle.path ? 'active' : ''}`}
                                            to={navSingle.path}
                                            onClick={handleNavClick}
                                        >
                                            {navSingle.name}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <button onClick={handleBookAppointment} className="appointment-btn">
                                    <span className="btn-text">Book Appointment</span>
                                    <span className="btn-icon">📅</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;