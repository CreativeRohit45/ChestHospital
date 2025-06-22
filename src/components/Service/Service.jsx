import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import './Service.scss';

const Service = ({ serviceList }) => {
    const { title, description, icon } = serviceList;
    const navigate = useNavigate();

    const handleServiceClick = () => {
        // Convert title to URL-friendly format
        const serviceSlug = title.toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-')
            .trim();
        
        console.log('Navigating to:', `/treatment/${serviceSlug}`); // Debug log
        
        navigate(`/treatment/${serviceSlug}`);
    };

    return (
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="service-box" onClick={handleServiceClick}>
                <div className="service-icon">
                    <div className='icon-area'>
                        <ThemeIcon icon={icon} />
                    </div>
                </div>
                <div className="service-text">
                    <h3>{title}</h3> 
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;