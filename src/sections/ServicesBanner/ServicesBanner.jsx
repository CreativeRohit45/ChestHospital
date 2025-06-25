import React from 'react';
import './ServicesBanner.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ServicesBanner = () => {
    const services = [
        {
            title: "Consultancy",
            image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Expert medical consultancy services providing personalized advice and treatment plans for all respiratory and chest-related conditions. Our experienced pulmonologists offer comprehensive consultations to help you understand your condition and develop the most effective treatment approach."
        },
        {
            title: "Vaccination",
            image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Comprehensive vaccination services including flu shots, pneumonia vaccines, and other respiratory disease prevention immunizations. We provide age-appropriate vaccines to protect against common respiratory infections and maintain your lung health throughout the year."
        },
        {
            title: "PFT (Pulmonary Function Tests)",
            image: "https://images.pexels.com/photos/4167664/pexels-photo-4167664.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Advanced Pulmonary Function Testing using state-of-the-art equipment to assess lung capacity, airflow, and overall respiratory health. These non-invasive tests help diagnose various lung conditions and monitor treatment progress with precise measurements."
        },
        {
            title: "Laboratory",
            image: "https://images.pexels.com/photos/4167735/pexels-photo-4167735.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "On-site laboratory services providing rapid and accurate testing for respiratory infections, blood work, and diagnostic analysis. Our modern lab facilities ensure quick turnaround times for test results, enabling faster diagnosis and treatment decisions."
        },
        {
            title: "Radiology",
            image: "https://images.pexels.com/photos/4167844/pexels-photo-4167844.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Advanced imaging services including chest X-rays, CT scans, and other radiological procedures for accurate diagnosis and monitoring. Our imaging technology provides detailed views of lung structures to detect abnormalities and track treatment progress."
        },
        {
            title: "Pharmacy",
            image: "https://images.pexels.com/photos/4167871/pexels-photo-4167871.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "In-house pharmacy providing prescribed medications, respiratory inhalers, and specialized treatments for convenient patient care. Our pharmacy stocks a comprehensive range of respiratory medications and provides expert guidance on proper medication usage."
        }
    ];

    return (
        <section className='services-banner-section pt-100 pb-70'>
            <div className="container">
                <SectionTitle 
                    subTitle="OUR SERVICES"
                    title="Comprehensive Healthcare Services"
                    description="We offer a complete range of healthcare services designed to meet all your respiratory and chest health needs under one roof."
                />

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={service.title} 
                            className="service-item"
                            data-aos="fade-up" 
                            data-aos-duration="1000"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesBanner;