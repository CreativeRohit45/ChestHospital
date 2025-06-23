import React, { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
import TreatmentSection from '../sections/TreatmentSection/TreatmentSection';

const Home = () => {
    const treatmentRef = useRef(null);

    const handleServiceClick = (serviceName) => {
        if (treatmentRef.current) {
            treatmentRef.current.scrollToTreatment(serviceName);
        }
    };

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services onServiceClick={handleServiceClick} />
            <Features />
            <Expert/>
            <Testimonial/>
            <TreatmentSection ref={treatmentRef} />
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;