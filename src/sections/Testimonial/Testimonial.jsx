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
            description: 'Dr Vaibhav is brilliant chest specialist in town...I had severe breathing issues and wheezing problem and nobody could understand my problem. After 2 months of his treatment I am lot better....very happy with Dr Vaibhav... Thank u doctor',
            ratings: [<AiFillStar key={1} />, <AiFillStar key={2} />, <AiFillStar key={3} />, <AiFillStar key={4} />, <AiFillStar key={5} />]
        },
        {
            img: imgOne,
            name: 'Amit Rana',
            description: 'I visited the doctor for long term chest pain, he listen complete problem and symptoms. Based on that suggests differ possibility and started treatment. He suggests starting with basic test and then advanced test which confirm one of the possiblilty. Really good doctor understand issue and explain very well about issue.',
            ratings: [<AiFillStar key={1} />, <AiFillStar key={2} />, <AiFillStar key={3} />, <AiFillStar key={4} />, <AiFillStar key={5} />]
        },
        {
            img: imgOne,
            name: 'Marie-Gon Vos',
            description: 'Thank you for taking the time and offer a good treatment to maintain my health. I\'m very happy with the appointment',
            ratings: [<AiFillStar key={1} />, <AiFillStar key={2} />, <AiFillStar key={3} />, <AiFillStar key={4} />, <AiFillStar key={5} />]
        },
        {
            img: imgOne,
            name: 'Samarth Sankalp',
            description: 'The best doctor you can go so far in Pune. Physician who feels like home, going to doctor was never so comfortable.. now its never to scary and the improvement within months was so far. Thank you Dr. Pandharkar.',
            ratings: [<AiFillStar key={1} />, <AiFillStar key={2} />, <AiFillStar key={3} />, <AiFillStar key={4} />, <AiFillStar key={5} />]
        },
        {
            img: imgOne,
            name: 'Alisha Sinha',
            description: "Dr. Pandharkar is the best doctor for the chest related issues. Last year my mother was diagnosed with TB we got her treated at some other city but can’t see any improvement. Later on we consulted Dr. Pandharkar. He took good care of my mother’s case. He didn’t recommend any expensive medicines or tests. He always gave adequate amount of time for our consultations. I highly recommend Dr. Pandharkar for all chest related issues. All the staffs at the clinic are also of good nature and they took good care of us.",
            ratings: [<AiFillStar key={1} />, <AiFillStar key={2} />, <AiFillStar key={3} />, <AiFillStar key={4} />, <AiFillStar key={5} />]
        },
        {
            img: imgOne,
            name: 'Somnath Shirke',
            description: `I can confidently say that Dr. Pandharkar is one of the most knowledgeable doctors out there today. Also the staff is good and the clinic is highly maintained. The best doctor with best facilities I had gone through. Thank you doctor.`,
            ratings: [<AiFillStar key={1} />, <AiFillStar key={2} />, <AiFillStar key={3} />, <AiFillStar key={4} />, <AiFillStar key={5} />]
        },
        {
            img: imgOne,
            name: 'Sidhika Jain',
            description: 'Excellent service and professional care. The doctor was very thorough in explaining my condition and the treatment plan. Highly recommended for anyone with respiratory issues.',
            ratings: [<AiFillStar key={1} />, <AiFillStar key={2} />, <AiFillStar key={3} />, <AiFillStar key={4} />, <AiFillStar key={5} />]
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <SectionTitle 
                            subTitle="TESTIMONIAL"
                            title="What people have said about us"
                            description="Read what our patients say about their experience with our respiratory care services."
                        />
                    </div>
                </div>

                <div className="testimonial-slider-wrapper">
                    <Slider {...settings} className="testimoni-slider">
                        {testimonails.map((testimonail, index) => (
                            <div key={index} className="testimonial-slide">
                                <TestimoniCard testimonail={testimonail} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;