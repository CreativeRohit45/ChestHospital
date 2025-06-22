import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Safety"
                    title="We put the safety first"
                    description="Your safety is our foremost concern. We maintain rigorous hygiene standards, use advanced diagnostic tools, and follow best practices in respiratory care to ensure a safe and comfortable environment for every patient. Trust us to prioritize your well-being at every step."
                />
                
                <div className="safety-video instagram-embed-container">
                    {/* Use Instagram's official embed code here */}
                    <iframe
                        src="https://www.instagram.com/p/CROX-DThzRd/embed"
                        title="Instagram video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;
