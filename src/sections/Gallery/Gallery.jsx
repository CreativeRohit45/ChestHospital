import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgTwo from '../../assets/servicePage/gallery/2.png';
import imgThree from '../../assets/servicePage/gallery/3.png';
import imgFour from '../../assets/servicePage/gallery/4.png';
import imgFive from '../../assets/servicePage/gallery/5.png';
import imgSix from '../../assets/servicePage/gallery/6.png';

const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="gallery-header">
                    <SectionTitle 
                        subTitle="Gallery"
                        title="Take a Virtual Tour of Our Modern Clinic"
                        description="Explore our state-of-the-art facilities designed with your comfort and health in mind. Our clinic provides a welcoming, hygienic, and technologically advanced environment for comprehensive respiratory care."
                    />
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgTwo} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgThree} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFour} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFive} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgSix} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgTwo} alt="gallery" />
                        </div>
                    </div>
                </div>

                <div className="gallery-features">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>🏥</span>
                                </div>
                                <h4>Modern Facility</h4>
                                <p>Contemporary design with patient comfort in mind</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>🧼</span>
                                </div>
                                <h4>Hygienic Environment</h4>
                                <p>Strict cleanliness protocols for patient safety</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>⚡</span>
                                </div>
                                <h4>Advanced Technology</h4>
                                <p>Latest medical equipment for accurate diagnosis</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>💝</span>
                                </div>
                                <h4>Comfortable Setting</h4>
                                <p>Relaxing atmosphere to ease patient anxiety</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;