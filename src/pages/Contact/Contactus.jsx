import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';
import ContactImg from '../../assets/contactusimg.jpg'; 

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <div className='contact-area'>
                    <div className='contact-us'>
                        <img src={ContactImg} alt="contactimg" />
                    </div>
                
                    <SectionTitle 
                        title="Contact Us"
                        description="We’re here to help with all your respiratory health needs. Feel free to reach out for appointments, inquiries, or more information about our services. Our friendly staff is ready to assist you."
                    />
               </div>
            </section>
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="2000">
                
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default Contactus;