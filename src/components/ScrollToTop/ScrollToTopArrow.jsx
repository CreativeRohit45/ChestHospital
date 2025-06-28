import React, { useState, useEffect } from 'react';
import './ScrollToTopArrow.scss';

const ScrollToTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            <button 
                onClick={scrollToTop}
                className="scroll-to-top-btn"
                aria-label="Scroll to top"
            >
                <span className="arrow-icon">↑</span>
            </button>
        </div>
    );
};

export default ScrollToTopArrow;