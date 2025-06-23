import React from 'react';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import './Service.scss';

const Service = ({ serviceList, onServiceClick }) => {
    const { title, description, icon } = serviceList;

    const handleClick = () => {
        if (onServiceClick) {
            onServiceClick(title);
        }
    };

    return (
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="service-box" onClick={handleClick}>
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