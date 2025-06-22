import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/2nd.jpg'
import pattern from '../../assets/banner/pattern.png'

const AboutBanner = () => {
    return (
        <section className='about-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>About Us</h2>
                                    <div className='mobile-banner-img'>
                                        <img src={bannerOne} alt="about banner"/>
                                    </div>
                                    <p>We are dedicated to helping you breathe easy and feel great every day. Your respiratory health is our priority, not just when symptoms arise, but every time you take a deep breath, laugh with loved ones, or enjoy the beauty of daily life. Our goal is to support your well-being with compassionate, expert care tailored to your needs.</p>

                                    <div className="theme-btn">
                                        <Link to='/contact'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
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