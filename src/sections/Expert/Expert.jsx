import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/about/3rd.jpg';

const Expert = () => {
    const expertiseAreas = [
        {
            title: 'Pulmonary Medicine Specialist',
            description: '12+ years of specialized experience in respiratory care and treatment'
        },
        {
            title: 'Advanced Diagnostic Services',
            description: 'State-of-the-art equipment for accurate diagnosis and monitoring'
        },
        {
            title: 'Comprehensive Treatment Plans',
            description: 'Personalized care approaches for all respiratory conditions'
        },
        {
            title: 'Multi-Hospital Consultant',
            description: 'Affiliated with leading hospitals across Pune for comprehensive care'
        }
    ];

    const achievements = [
        { number: '1000+', label: 'Patients Treated' },
        { number: '12+', label: 'Years Experience' },
        { number: '6+', label: 'Hospital Affiliations' },
        { number: '95%', label: 'Success Rate' }
    ];

    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="expert-header">
                    <SectionTitle 
                        subTitle="EXPERT IN CHEST"
                        title="Leading Pulmonologist Providing World-Class Respiratory Care"
                        description="Meet Dr. Vaibhav Pandharkar, a highly qualified pulmonologist with extensive experience in treating complex respiratory conditions using the latest medical advances."
                    />
                </div>

                <div className="expert-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="expert-info">
                                <div className="expertise-list">
                                    {expertiseAreas.map((area, index) => (
                                        <div 
                                            key={index} 
                                            className="expertise-item"
                                            data-aos="fade-right" 
                                            data-aos-delay={index * 100}
                                        >
                                            <div className="expertise-icon">
                                                <BsFillCheckCircleFill />
                                            </div>
                                            <div className="expertise-content">
                                                <h4>{area.title}</h4>
                                                <p>{area.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="achievements-grid">
                                    {achievements.map((achievement, index) => (
                                        <div key={index} className="achievement-item">
                                            <h3>{achievement.number}</h3>
                                            <p>{achievement.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6">
                            <div className="expert-image-section">
                                <div className="expert-image">
                                    <img src={expertImg} alt="Dr. Vaibhav Pandharkar - Expert Pulmonologist" />
                                    <div className="image-decoration">
                                        <div className="decoration-circle"></div>
                                        <div className="decoration-pattern"></div>
                                    </div>
                                </div>
                                
                                <div className="expert-badge">
                                    <div className="badge-content">
                                        <div className="badge-icon">
                                            <span>🏆</span>
                                        </div>
                                        <div className="badge-text">
                                            <h5>Board Certified</h5>
                                            <p>Pulmonologist</p>
                                        </div>
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

export default Expert;