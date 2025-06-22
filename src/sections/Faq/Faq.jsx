import React from 'react';
import './Faq.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Faq = () => {
    return (
        <section className='faq-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="FAQ"
                    title="Frequently asked questions"
                />

                <div className="accordian-area">
                    <div className="accordion" id="accordionExample">
                        {/* FAQ 1 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What conditions do you treat at Dr. Pandharkar’s Chest Clinic?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We specialize in diagnosing and treating a range of chest-related conditions, including:
                                    <ul>
                                        <li>Asthma and allergies</li>
                                        <li>Chronic cough and bronchitis</li>
                                        <li>Tuberculosis (TB)</li>
                                        <li>Pneumonia and lung infections</li>
                                        <li>Sleep apnea and other sleep-related breathing disorders</li>
                                        <li>Chronic Obstructive Pulmonary Disease (COPD)</li>
                                        <li>Smoking cessation programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Do I need an appointment to visit the clinic?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    While walk-ins are welcome, we recommend booking an appointment for a smoother experience and to minimize wait times. You can call us at <strong>091584 50788</strong> to schedule your visit.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What are the clinic’s working hours?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our clinic hours are:
                                    <ul>
                                        <li><strong>Monday:</strong> 6:00 pm – 9:30 pm</li>
                                        <li><strong>Tuesday:</strong> 10:00 am – 12:00 pm & 7:00 pm – 9:30 pm</li>
                                        <li><strong>Wednesday:</strong> 6:00 pm – 9:30 pm</li>
                                        <li><strong>Thursday:</strong> 6:00 pm – 9:30 pm</li>
                                        <li><strong>Friday:</strong> 10:00 am – 12:00 pm & 7:00 pm – 9:30 pm</li>
                                        <li><strong>Saturday:</strong> 10:00 am – 12:00 pm & 6:00 pm – 9:30 pm</li>
                                        <li><strong>Sunday:</strong> Closed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How do I prepare for my first visit?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    For your first visit, please bring:
                                    <ul>
                                        <li>Any previous medical records and test reports</li>
                                        <li>A list of current medications</li>
                                        <li>Your ID proof for registration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 5 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What diagnostic services are available at the clinic?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We offer advanced diagnostic services, including:
                                    <ul>
                                        <li>Pulmonary function tests (PFT)</li>
                                        <li>Chest X-rays (outsourced)</li>
                                        <li>Sleep studies for sleep apnea</li>
                                        <li>Allergy testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 6 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Do you provide treatment for smokers looking to quit?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes! We offer <strong>smoking cessation counseling</strong> and treatment plans to support patients in quitting smoking and improving lung health.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 7 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    Can I get a second opinion at your clinic?
                                </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Absolutely. We welcome patients seeking a second opinion on any chest-related conditions and provide comprehensive consultations.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 8 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEight">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    How can I contact the clinic?
                                </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    You can reach us via:
                                    <ul>
                                        <li><strong>Phone:</strong> 091584 50788</li>
                                        <li><strong>Address:</strong> Office No. 017, First Floor, A-Building, Downtown City Vista, Fountain Road, Opp. Victorious Kids Educares, Kharadi, Pune – 411014</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
