import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/2nd.jpg'

const AboutBanner = () => {
    const navigate = useNavigate();

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
        <section className='about-hero-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="about-badge">
                                <span>About Our Clinic</span>
                            </div>
                            <h1>Dedicated to Your Respiratory Health & Well-being</h1>
                            <p className="lead-text">We are committed to helping you breathe easy and feel great every day. Your respiratory health is our priority, not just when symptoms arise, but every time you take a deep breath.</p>
                            
                            <div className="about-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <span>🫁</span>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Expert Care</h4>
                                        <p>Specialized respiratory treatment with years of experience</p>
                                    </div>
                                </div>
                                
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <span>🏥</span>
                                    </div>
                                    <div className="feature-text">
                                        <h4>Modern Facility</h4>
                                        <p>State-of-the-art equipment and comfortable environment</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-cta">
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
                                            Schedule Consultation
                                        </span>
                                    </button>
                                </div>
                                <div className="about-stats">
                                    <div className="stat-item">
                                        <h3>19+</h3>
                                        <p>Years Experience</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>10K+</h3>
                                        <p>Happy Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="about-image-section">
                            <div className="main-image">
                                <img src={bannerOne} alt="Dr. Pandharkar Chest Clinic" />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <h4>Professional Care</h4>
                                        <p>Compassionate treatment for all respiratory conditions</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="floating-card">
                                <div className="card-content">
                                    <div className="card-icon">
                                        <span>⭐</span>
                                    </div>
                                    <div className="card-text">
                                        <h5>Excellent Reviews</h5>
                                        <p>Trusted by patients across Pune</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;