import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.jpeg';

const Team = () => {
    const teams = [
        {
            'img': imgOne,
            'name': 'Dr. Vaibhav D. Pandharkar'
        },
    ]

    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="team-intro">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <SectionTitle
                                subTitle="Meet Our Specialist"
                                title="Get to know our Chest Specialist"
                            />
                        </div>

                        <div className="col-lg-6">
                            <div className="team-intro-text">
                                <p>Get to know our dedicated chest specialist, committed to providing personalized, high-quality respiratory care. With expertise and a compassionate approach, our doctor is here to support your journey to better lung health and well-being.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-profile">
                    {teams.map((team, index) => (
                        <div className="team-card" key={team.id || team.name || index}>
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-5">
                                    <div className="doctor-image">
                                        <img src={team.img} alt={team.name} />
                                        <div className="image-decoration">
                                            <div className="decoration-circle"></div>
                                            <div className="decoration-dots"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-8 col-md-7">
                                    <div className="doctor-info">
                                        <div className="doctor-header">
                                            <h2>{team.name}</h2>
                                            <div className="doctor-badge">
                                                <span>Pulmonologist</span>
                                            </div>
                                        </div>
                                        
                                        <div className="experience-highlight">
                                            <div className="experience-item">
                                                <h4>19+</h4>
                                                <p>Years Experience</p>
                                            </div>
                                            <div className="experience-item">
                                                <h4>15K+</h4>
                                                <p>Patients Treated</p>
                                            </div>
                                            <div className="experience-item">
                                                <h4>10+</h4>
                                                <p>Hospital Affiliations</p>
                                            </div>
                                        </div>
                                        
                                        <div className="doctor-description">
                                            <p>Dr. Vaibhav Pandharkar is a highly experienced Pulmonologist practicing in Kharadi-Chandannagar, Pune. With 19 years of specialized experience in respiratory medicine, he serves as a consultant at multiple prestigious hospitals including Manipal Hospital, Sangamnerkar Hospital, Imax Hospital, and maintains panel consultancy at Ruby Hall Clinic, Inamdar Hospital, and Sahyadri Hospital.</p>
                                            
                                            <div className="qualifications">
                                                <h4>Qualifications & Certifications</h4>
                                                <ul>
                                                    <li>MBBS from Jawahar Medical Foundation's Annasaheb Chudaman Patil Memorial Medical College, Dhule</li>
                                                    <li>DTCD (Chest Diseases) from B J Medical College, Pune</li>
                                                    <li>DNB (Pulmonary Medicine) from Ruby Hall Clinic, Pune</li>
                                                    <li>MD (Chest Medicine) (USAIM)</li>
                                                    <li>Adult Respiratory Medicine European Diploma from Europe</li>
                                                    <li>Member of ATS (American Thoracic Society)</li>
                                                    <li>Member of ERS (European Respiratory Society)</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="specializations">
                                                <h4>Areas of Expertise</h4>
                                                <div className="specialization-tags">
                                                    <span>COPD Treatment</span>
                                                    <span>Asthma Management</span>
                                                    <span>Tuberculosis Care</span>
                                                    <span>Pulmonary Function Tests</span>
                                                    <span>Smoking Cessation</span>
                                                    <span>Chest Diseases</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;