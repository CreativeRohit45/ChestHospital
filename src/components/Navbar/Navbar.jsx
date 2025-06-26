import React from 'react';
import './Navbar.scss';
import logo from './../../assets/image1.png';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const navbarItems = [
        { id: 1, name: 'HOME', path: '/' },
        { id: 2, name: 'ABOUT US', path: '/about' },
        { id: 3, name: 'SERVICES', path: '/singleservice' },
        { id: 4, name: 'TREATMENTS', path: '/treatments' },
        { id: 5, name: 'CONTACT US', path: '/contact' }
    ];

    const handleBookAppointment = () => {
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

    return (    
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               {
                                navbarItems.map(navSingle =>
                                    <li className="nav-item" key={navSingle.id}>
                                    <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                )
                                }

                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <button onClick={handleBookAppointment} style={{background: 'none', border: 'none', padding: 0}}>
                                    <span style={{
                                        background: 'linear-gradient(135deg, #1C66FF 0%, #608400 100%)',
                                        color: '#ffffff',
                                        padding: '16px 32px',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        display: 'inline-block',
                                        boxShadow: '0 8px 25px rgba(28, 102, 255, 0.3)',
                                        cursor: 'pointer'
                                    }}>
                                        Book appointment
                                    </span>
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