import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [visibleCount, setVisibleCount] = useState(8);
    const navigate = useNavigate();

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8);
    };

    const handleServiceClick = (serviceName) => {
        // Navigate to treatments page with the service name as a hash
        const serviceSlug = serviceName.toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-')
            .trim();
        
        navigate(`/treatments#${serviceSlug}`);
    };

    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <SectionTitle 
                            title="Feel amazing about your respiratory health" 
                            subTitle="Treatments" 
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className='service-title-text'>
                            Empower yourself to breathe easier and live healthier by prioritizing your respiratory wellness.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {ServicesData.slice(0, visibleCount).map((singleService, index) => (
                        <Service 
                            key={index} 
                            serviceList={singleService} 
                            onServiceClick={handleServiceClick}
                        />
                    ))}
                </div>

                {visibleCount < ServicesData.length && (
                    <div className="text-center mt-5">
                        <button className="btn btn-primary load-more-btn" onClick={handleLoadMore}>
                            Load More Services
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;