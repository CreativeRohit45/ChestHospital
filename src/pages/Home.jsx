import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Services />
            <Features />
            <Expert/>
            <Testimonial/>
            <Footer/>
        </>
    );
};

export default Home;