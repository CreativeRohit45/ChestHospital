import React, { useState } from 'react';
import './Presentations.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

// Import all presentation images
import img1 from '../../assets/about/1.jpg';
import img2 from '../../assets/about/2.jpg';
import img3 from '../../assets/about/3.jpg';
import img4 from '../../assets/about/4.jpg';
import img5 from '../../assets/about/5.jpg';
import img6 from '../../assets/about/6.jpg';
import img7 from '../../assets/about/7.jpg';
import img8 from '../../assets/about/8.jpg';
import img9 from '../../assets/about/9.jpg';
import img10 from '../../assets/about/10.jpg';
import img11 from '../../assets/about/11.jpg';
import img12 from '../../assets/about/12.jpg';

const Presentations = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const presentations = [
        { id: 1, image: img1, title: 'Research Publication 1' },
        { id: 2, image: img2, title: 'Conference Presentation 1' },
        { id: 3, image: img3, title: 'Medical Journal Article 1' },
        { id: 4, image: img4, title: 'Research Publication 2' },
        { id: 5, image: img5, title: 'Conference Presentation 2' },
        { id: 6, image: img6, title: 'Medical Journal Article 2' },
        { id: 7, image: img7, title: 'Research Publication 3' },
        { id: 8, image: img8, title: 'Conference Presentation 3' },
        { id: 9, image: img9, title: 'Medical Journal Article 3' },
        { id: 10, image: img10, title: 'Research Publication 4' },
        { id: 11, image: img11, title: 'Conference Presentation 4' },
        { id: 12, image: img12, title: 'Medical Journal Article 4' }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = '';
    };

    return (
        <section className='presentations-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="presentations-header">
                    <SectionTitle 
                        subTitle="ACADEMIC CONTRIBUTIONS"
                        title="Presentations & Publications"
                        description="Explore Dr. Pandharkar's extensive research contributions, conference presentations, and published works in the field of pulmonary medicine and respiratory care."
                    />
                </div>

                <div className="presentations-grid">
                    <div className="row">
                        {presentations.map((presentation, index) => (
                            <div 
                                key={presentation.id} 
                                className="col-lg-3 col-md-4 col-sm-6"
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                            >
                                <div className="presentation-card">
                                    <div className="presentation-image">
                                        <img 
                                            src={presentation.image} 
                                            alt={presentation.title}
                                            onClick={() => openModal(presentation)}
                                        />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <span className="view-icon">🔍</span>
                                                <p>Click to view</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="presentation-info">
                                        <h4>{presentation.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="presentations-stats">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-card">
                                <h3>12+</h3>
                                <p>Publications</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-card">
                                <h3>25+</h3>
                                <p>Conferences</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-card">
                                <h3>8+</h3>
                                <p>Research Papers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-card">
                                <h3>5+</h3>
                                <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for enlarged image view */}
            {selectedImage && (
                <div className="presentation-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>×</button>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="modal-info">
                            <h3>{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Presentations;