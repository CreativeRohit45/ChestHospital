import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/about/3rd.jpg';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTS IN CHEST"
                                title="Top-Quality Chest Clinic Care, Provided by Leading Specialist in Seattle."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Highly Skilled Pulmonologists & Respiratory Care Team
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Advanced Diagnostic and Treatment Services
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Exclusive Discounts on All Pulmonary Treatments                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;