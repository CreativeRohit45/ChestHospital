import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';


const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2846038672787!2d73.94232950990396!3d18.561203467860643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e05b42a915%3A0x9bd1c98d9c23c892!2sDr.%20Vaibhav%20Pandharkar!5e0!3m2!1sen!2sin!4v1747890165580!5m2!1sen!2sin';

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-10 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p> Office Number. 017, First floor, "A" Building Kolte Patil Downtown City Vista, Pune</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Our Chest Clinic is a Breath of Fresh Air"
                            description="Take the first step toward better respiratory health by scheduling an appointment with our expert pulmonologist today. Whether you're experiencing symptoms or simply need a check-up, we’re here to provide compassionate and personalized care tailored to your needs.
Book your appointment now and breathe easier with our specialized care."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;