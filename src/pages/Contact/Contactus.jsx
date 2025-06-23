import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contactus = () => {
    return (
        <>
            <Navbar />
            <section className='contact-hero-section'>
                <div className="container">
                    <div className="contact-hero-content">
                        <SectionTitle 
                            subTitle="GET IN TOUCH"
                            title="Contact Our Expert Team"
                            description="We're here to help with all your respiratory health needs. Reach out for appointments, inquiries, or more information about our specialized services."
                        />
                    </div>
                </div>
            </section>

            <section className='contact-info-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <FaPhone />
                                </div>
                                <div className="contact-details">
                                    <h4>Phone Numbers</h4>
                                    <p>+91-9158450788</p>
                                    <p>+91-8766040262</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="contact-details">
                                    <h4>Email Address</h4>
                                    <p>info@chestclinic.com</p>
                                    <p>appointments@chestclinic.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="contact-details">
                                    <h4>Clinic Address</h4>
                                    <p>Office No. 017, First Floor</p>
                                    <p>Downtown City Vista, Kharadi, Pune</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <FaClock />
                                </div>
                                <div className="contact-details">
                                    <h4>Working Hours</h4>
                                    <p>Mon-Sat: 10:00 AM - 9:30 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-form-section'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-form-content">
                                <h3>Book Your Appointment</h3>
                                <p>Schedule your consultation with our expert pulmonologist. We're committed to providing personalized care for all your respiratory health needs.</p>
                                <ContactForm />
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="contact-map">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2846038672787!2d73.94232950990396!3d18.561203467860643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e05b42a915%3A0x9bd1c98d9c23c892!2sDr.%20Vaibhav%20Pandharkar!5e0!3m2!1sen!2sin!4v1747890165580!5m2!1sen!2sin"
                                    title="Clinic Location"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
};

export default Contactus;