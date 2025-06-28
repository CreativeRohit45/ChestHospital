import React from 'react';
import './Banner.scss';
import {useNavigate} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.jpg';

import bannerPattern from '../../assets/banner/pattern_02.png';
//import shapeOne from '../../assets/download.svg';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

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
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Your most trusted health partner</h1>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <button onClick={handleBookAppointment}>
                                                <span>
                                                    Book an appointment
                                                </span>
                                            </button>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon' onClick={handlePhoneClick}>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Support Available </p>
                                                <h6 onClick={handlePhoneClick}>+91-9158450788</h6>
                                                <h6 onClick={() => window.open('tel:+918766040262', '_self')}>+91-8766040262</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                    
                                   
                                    

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <div className="shpaess">
                                        </div>
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;