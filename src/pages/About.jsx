import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import Faq from '../sections/Faq/Faq';
import Priority from '../sections/Priority/Priority';
import Safety from '../sections/Safety/Safety';
import Gallery from '../sections/Gallery/Gallery';
import Team from '../sections/Team/Team';
import Presentations from '../sections/Presentations/Presentations';
import Footer from '../sections/Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <Team />
            <Presentations />
            <AboutBanner />
            <Priority />
            <Gallery />
            <Safety />
            <Faq />
            <Footer />
        </>
    );
};

export default About;