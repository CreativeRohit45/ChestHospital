import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';
import contactImage from '../../assets/contactusimg.jpg';

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
                            <div className="contact-image-section">
                                <div className="contact-image">
                                    <img src={contactImage} alt="Contact Us" />
                                    <div className="contact-image-overlay">
                                        <div className="overlay-content">
                                            <h4>Expert Respiratory Care</h4>
                                            <p>Professional consultation and treatment for all your chest and lung health needs</p>
                                        </div>
                                    </div>
                                </div>
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