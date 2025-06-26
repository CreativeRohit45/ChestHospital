import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import Appointment from '../../sections/Appointment/Appointment';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';
import contactImage from '../../assets/contactusimg.jpg';

const Contactus = () => {
    const clinicHours = [
        { day: 'Monday', time: '6:00 PM - 9:30 PM' },
        { day: 'Tuesday', time: '10:00 AM - 12:00 PM & 7:00 PM - 9:30 PM' },
        { day: 'Wednesday', time: '6:00 PM - 9:30 PM' },
        { day: 'Thursday', time: '6:00 PM - 9:30 PM' },
        { day: 'Friday', time: '10:00 AM - 12:00 PM & 7:00 PM - 9:30 PM' },
        { day: 'Saturday', time: '10:00 AM - 12:00 PM & 6:00 PM - 9:30 PM' },
        { day: 'Sunday', time: 'Closed', closed: true }
    ];

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

            {/* Clinic Timing Section */}
            <section className='clinic-timing-section'>
                <div className="container">
                    <div className="timing-wrapper">
                        <div className="timing-header">
                            <h2>Clinic Hours</h2>
                            <p>Visit us during our convenient operating hours</p>
                        </div>
                        
                        <div className="timing-grid">
                            {clinicHours.map((schedule, index) => (
                                <div 
                                    key={index} 
                                    className={`timing-card ${schedule.closed ? 'closed' : ''}`}
                                >
                                    <div className="day-name">
                                        <h4>{schedule.day}</h4>
                                    </div>
                                    <div className="time-slot">
                                        <p>{schedule.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="timing-note">
                            <div className="note-content">
                                <div className="note-icon">
                                    <span>📞</span>
                                </div>
                                <div className="note-text">
                                    <h5>Need Emergency Care?</h5>
                                    <p>For urgent respiratory issues, please call us at <strong>+91-9158450788</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-main-section'>
                <div className="container">
                    {/* Contact Form Section */}
                    <div className="contact-form-wrapper">
                        <div className="contact-form-header">
                            <h2>Book Your Appointment</h2>
                            <p>Schedule your consultation with our expert pulmonologist. We're committed to providing personalized care for all your respiratory health needs.</p>
                        </div>
                        <ContactForm />
                    </div>

                    {/* Contact Image Section */}
                    <div className="contact-image-wrapper">
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
            </section>
            <Appointment/>
            
            <Footer />
        </>
    );
};

export default Contactus;