import React from 'react';
import './Banner.scss';
import {useNavigate} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerBg from '../../assets/banner/2.jpg';

const Banner = () => {
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

    const handlePhoneClick = () => {
        window.open('tel:+919158450788', '_self');
    };

    return (
        <section className='banner-section'>
            <div className="banner-image-container">
                <img src={bannerBg} alt="Dr. Pandharkar Chest Clinic" className="banner-background-image" />
                {/* <div className="banner-image-overlay"></div> */}
            </div>
            
            <div className="banner-content-below">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12">
                            <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                <div className="banner-intro">
                                    <h1>Your most trusted health partner</h1>
                                    <p className="banner-tagline">
                                        Expert respiratory care and comprehensive chest health solutions for your well-being
                                    </p>
                                </div>

                                <div className="banner-cta">
                                    <button 
                                        className="primary-btn"
                                        onClick={handleBookAppointment}
                                    >
                                        <span>Book an appointment</span>
                                        <div className="btn-arrow">→</div>
                                    </button>

                                    <div className="emergency-contact">
                                        <div className="contact-icon" onClick={handlePhoneClick}>
                                            <img src={icon} alt="Call" />
                                        </div>
                                        <div className="contact-info">
                                            <span className="contact-label">Support Available</span>
                                            <div className="contact-numbers">
                                                <a href="tel:+919158450788">+91-9158450788</a>
                                                <a href="tel:+918766040262">+91-8766040262</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="banner-highlights">
                                    <div className="highlight-item">
                                        <span className="highlight-icon">🏥</span>
                                        <span>Expert Care</span>
                                    </div>
                                    <div className="highlight-item">
                                        <span className="highlight-icon">⚡</span>
                                        <span>Quick Diagnosis</span>
                                    </div>
                                    <div className="highlight-item">
                                        <span className="highlight-icon">💝</span>
                                        <span>Compassionate Treatment</span>
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

export default Banner;