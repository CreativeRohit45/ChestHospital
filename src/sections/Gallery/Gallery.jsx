import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/1.png';
import imgTwo from '../../assets/servicePage/gallery/2.png';
import imgThree from '../../assets/servicePage/gallery/3.png';
import imgFour from '../../assets/servicePage/gallery/4.png';
import imgFive from '../../assets/servicePage/gallery/5.png';
import imgSix from '../../assets/servicePage/gallery/6.png';

const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    className="section-gallery"
                    subTitle="Gallery"
                    title="Images of the Clinic Environment"
                    description="Take a glimpse of the comfortable and welcoming atmosphere of our clinic. Designed with your health and comfort in mind, our clinic provides a calm, hygienic, and modern setting for all your respiratory care needs. Our team ensures every visit is a pleasant experience in a space equipped with the latest medical technology."
                />

                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgOne} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgTwo} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgThree} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFour} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFive} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgSix} alt="gallery" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;