import React from 'react';
import logo from '../../assets/icon.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name': 'Home',
            'link': '/'
        },
        {
            'name': 'About Us',
            'link': '/about'
        },
        {
            'name': 'Services',
            'link': '/singleservice'
        },
        {
            'name': 'Treatments',
            'link': '/treatments'
        },
        
        {
            'name': 'Contact Us',
            'link': '/contact'
        },
    ];

    const footerContacts = [
        {
            title: 'Phone Number',
            info: ['+91-9158450788', ' +91-8766040262'],
            icon: call,
            isPhone: true
        },
        {
            'title': 'Clinic Address',
            'info': 'Office Number. 017, First floor, "A" Building Kolte Patil Downtown City Vista, Pune',
            'icon': location,
            isLocation: true
        }
    ];

    const handlePhoneClick = (phoneNumber) => {
        window.open(`tel:${phoneNumber}`, '_self');
    };

    const handleLocationClick = () => {
        const address = "Office Number. 017, First floor, A Building Kolte Patil Downtown City Vista, Pune";
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    };

    return (
        <footer className='pt-100'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Chest Care Seattle is a top-rated local practice for cosmetic, preventative, and restorative dentistry on First Hill</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/"><FaFacebookF /></a></li>
                                <li><a href="/"><FaTwitter /></a></li>
                                <li><a href="/"><FaInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu =>
                                        <li key={singleMenu.name}>
                                            <Link to={singleMenu.link}>{singleMenu.name}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map((footerContact, index) => {
                                    return (
                                    <div className="contact-list" key={footerContact.title || index}>
                                        <div 
                                            className="contact-icon"
                                            onClick={() => {
                                                if (footerContact.isPhone && Array.isArray(footerContact.info)) {
                                                    handlePhoneClick(footerContact.info[0]);
                                                } else if (footerContact.isLocation) {
                                                    handleLocationClick();
                                                }
                                            }}
                                            style={{
                                                cursor: footerContact.isPhone || footerContact.isLocation ? 'pointer' : 'default'
                                            }}
                                        >
                                            <img src={footerContact.icon} alt="icon" />
                                        </div>
                                        <div className="contact-text">
                                            <p>{footerContact.title}</p>

                                            {Array.isArray(footerContact.info) ? (
                                                footerContact.info.map((line, i) => (
                                                    <h5 
                                                        key={i}
                                                        onClick={() => footerContact.isPhone && handlePhoneClick(line)}
                                                        style={{
                                                            cursor: footerContact.isPhone ? 'pointer' : 'default'
                                                        }}
                                                    >
                                                        {line}
                                                    </h5>
                                                ))
                                            ) : (
                                                <h5 
                                                    onClick={() => footerContact.isLocation && handleLocationClick()}
                                                    style={{
                                                        cursor: footerContact.isLocation ? 'pointer' : 'default'
                                                    }}
                                                >
                                                    {footerContact.info}
                                                </h5>
                                            )}
                                        </div>
                                    </div>
                                    );
                                })
                            }

                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="copyright-area">
                        <div className='copy-text'>
                            <p>&copy; ChestSpecialist. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;