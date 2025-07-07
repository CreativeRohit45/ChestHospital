import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    const safetyFeatures = [
        {
            icon: '🛡️',
            title: 'Strict Hygiene Protocols',
            description: 'We maintain the highest standards of cleanliness and sterilization to ensure a safe environment for all patients.'
        },
        {
            icon: '🔬',
            title: 'Advanced Diagnostic Tools',
            description: 'State-of-the-art equipment and technology for accurate diagnosis and effective treatment planning.'
        },
        {
            icon: '👨‍⚕️',
            title: 'Expert Medical Team',
            description: 'Highly qualified and experienced medical professionals dedicated to your respiratory health and safety.'
        },
        {
            icon: '🏥',
            title: 'Modern Facilities',
            description: 'Contemporary clinic design with patient comfort and safety as our top priorities in every aspect.'
        },
        {
            icon: '📋',
            title: 'Comprehensive Care',
            description: 'Thorough patient evaluation and personalized treatment plans following international safety standards.'
        },
        {
            icon: '⚡',
            title: 'Emergency Preparedness',
            description: 'Fully equipped to handle emergency situations with immediate response protocols and backup systems.'
        }
    ];

    return (
        <section className='safety-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="safety-header">
                    <div className="text-center">
                        <SectionTitle 
                            subTitle="SAFETY FIRST"
                            title="We Put Your Safety First"
                            description="Your safety is our foremost concern. We maintain rigorous hygiene standards, use advanced diagnostic tools, and follow best practices in respiratory care to ensure a safe and comfortable environment for every patient."
                        />
                    </div>
                </div>
                
                <div className="safety-features">
                    <div className="row">
                        {safetyFeatures.map((feature, index) => (
                            <div 
                                key={index} 
                                className="col-lg-4 col-md-6"
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                            >
                                <div className="safety-feature-card">
                                    <div className="feature-icon">
                                        <span>{feature.icon}</span>
                                    </div>
                                    <div className="feature-content">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="safety-video-section">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="safety-commitment">
                                <h3>Our Safety Commitment</h3>
                                <p>At Dr. Pandharkar Chest Clinic, we believe that exceptional healthcare begins with uncompromising safety standards. Every aspect of our practice is designed with your well-being in mind.</p>
                                
                                <div className="commitment-points">
                                    <div className="commitment-point">
                                        <span className="point-icon">✓</span>
                                        <span>Regular equipment maintenance and calibration</span>
                                    </div>
                                    <div className="commitment-point">
                                        <span className="point-icon">✓</span>
                                        <span>Continuous staff training on safety protocols</span>
                                    </div>
                                    <div className="commitment-point">
                                        <span className="point-icon">✓</span>
                                        <span>Patient safety monitoring and feedback systems</span>
                                    </div>
                                    <div className="commitment-point">
                                        <span className="point-icon">✓</span>
                                        <span>Compliance with international healthcare standards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="safety-video">
                                <div className="instagram-embed-container">
                                    <iframe
                                        src="https://www.instagram.com/p/CROX-DThzRd/embed"
                                        title="Instagram video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Safety;