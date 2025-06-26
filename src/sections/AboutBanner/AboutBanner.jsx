import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/2nd.jpg'

const AboutBanner = () => {
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
                                    <Link to='/contact'>Schedule Consultation</Link>
                                </div>
                                <div className="about-stats">
                                    <div className="stat-item">
                                        <h3>19+</h3>
                                        <p>Years Experience</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>1000+</h3>
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