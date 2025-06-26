import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/experts.jpg'; 
import './Priority.scss';

const Priority = () => {
    const navigate = useNavigate();

    const handleBookAppointment = () => {
        navigate('/contact');
        // Small delay to ensure page loads before scrolling
        setTimeout(() => {
            const contactForm = document.querySelector('.contact-form-wrapper');
            if (contactForm) {
                contactForm.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 100);
    };

    const priorityFeatures = [
        {
            icon: '🎯',
            title: 'Patient-Centered Care',
            description: 'Every treatment plan is tailored to your specific needs and health goals'
        },
        {
            icon: '⚡',
            title: 'Quick Response',
            description: 'Fast diagnosis and immediate treatment for urgent respiratory issues'
        },
        {
            icon: '🔬',
            title: 'Advanced Technology',
            description: 'State-of-the-art equipment for accurate diagnosis and effective treatment'
        },
        {
            icon: '💝',
            title: 'Compassionate Approach',
            description: 'We treat every patient with empathy, respect, and understanding'
        }
    ];

    return (
        <section className='priority-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="priority-header">
                    <SectionTitle 
                        subTitle="OUR PRIORITY" 
                        title="Your Health & Comfort Come First"
                        description="We are committed to providing exceptional respiratory care with a focus on your individual needs, comfort, and well-being."
                    />
                </div>

                <div className="priority-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="priority-image">
                                <img src={priorityImg} alt="Our Priority - Patient Care" />
                                <div className="image-badge">
                                    <div className="badge-content">
                                        <h4>19+</h4>
                                        <p>Years of Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="priority-features">
                                <div className="features-grid">
                                    {priorityFeatures.map((feature, index) => (
                                        <div 
                                            key={index} 
                                            className="feature-card"
                                            data-aos="fade-up" 
                                            data-aos-delay={index * 100}
                                        >
                                            <div className="feature-icon">
                                                <span>{feature.icon}</span>
                                            </div>
                                            <div className="feature-content">
                                                <h4>{feature.title}</h4>
                                                <p>{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="priority-cta">
                                    <div className="theme-btn">
                                        <button onClick={handleBookAppointment} style={{background: 'none', border: 'none', padding: 0}}>
                                            <span style={{
                                                background: 'linear-gradient(135deg, #1C66FF 0%, #608400 100%)',
                                                color: '#ffffff',
                                                padding: '16px 32px',
                                                textDecoration: 'none',
                                                borderRadius: '12px',
                                                transition: 'all 0.3s ease',
                                                border: '2px solid transparent',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                display: 'inline-block',
                                                boxShadow: '0 8px 25px rgba(28, 102, 255, 0.3)',
                                                cursor: 'pointer'
                                            }}>
                                                Experience Our Care
                                            </span>
                                        </button>
                                    </div>
                                    <div className="priority-note">
                                        <p>Join thousands of satisfied patients who trust us with their respiratory health</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;