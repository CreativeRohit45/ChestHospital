import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/pro.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            img: imgOne,
            name: 'Manmeet Kaur',
            description: 'Dr Vaibhav is brilliant chest specialist in town...I had severe breathing issues and wheezing problem and nobody could understand my problem. ** ******* *** ** ********* ****** **** *** after 2 months of his treatment I am lot better....very happy with Dr Vaibhav... ** *** **** ********* *** ********* **********thank u doctor',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
        },
        {
            img: imgOne,
            name: 'Amit Rana',
            description: 'I visited the doctor for long term chest pain, he  listen complete problem and symptoms. Based on that suggests differ possibility and started treatment. He suggests starting with basic test and then advanced test which confirm one of the possiblilty. Really good doctor understand issue and explain very well about issue.',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
        },
        {
            img: imgOne,
            name: 'Marie-Gon Vos',
            description: 'Thank you for taking the time and offer a good treatment to maintain my health. I’m very happy with the appointment',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
        },
        {
            img: imgOne,
            name: 'Sidhika Jain',
            description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                            subTitle="TESTIMONIAL"
                            title="What people have said about us"
                        />
                    </div>
                    <div className="col-lg-6">
                        {/* Add extra content here if needed */}
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {testimonails.map((testimonail, index) => (
                        <TestimoniCard key={index} testimonail={testimonail} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
