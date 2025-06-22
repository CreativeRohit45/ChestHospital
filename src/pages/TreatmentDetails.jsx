import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import './TreatmentDetails.scss';

const TreatmentDetails = () => {
    const { serviceSlug } = useParams();
    const location = useLocation();
    
    // Get service data from navigation state or find by slug
    const serviceData = location.state || getTreatmentData(serviceSlug);

    return (
        <>
            <Navbar />
            <section className='treatment-details-section'>
                <div className="container">
                    <div className="treatment-hero">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="treatment-content">
                                    <SectionTitle 
                                        subTitle="TREATMENT DETAILS"
                                        title={serviceData.title}
                                        description={serviceData.shortDescription}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="treatment-image">
                                    <img src={serviceData.image} alt={serviceData.title} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="treatment-details-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="treatment-info">
                                    <h3>About {serviceData.title}</h3>
                                    <p>{serviceData.detailedDescription}</p>

                                    <h4>Symptoms</h4>
                                    <ul className="symptoms-list">
                                        {serviceData.symptoms.map((symptom, index) => (
                                            <li key={index}>{symptom}</li>
                                        ))}
                                    </ul>

                                    <h4>Treatment Approach</h4>
                                    <p>{serviceData.treatmentApproach}</p>

                                    <h4>What to Expect</h4>
                                    <ul className="expectations-list">
                                        {serviceData.expectations.map((expectation, index) => (
                                            <li key={index}>{expectation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="treatment-sidebar">
                                    <div className="appointment-card">
                                        <h4>Book an Appointment</h4>
                                        <p>Ready to get treatment for {serviceData.title}?</p>
                                        <div className="theme-btn">
                                            <a href="/contact">Schedule Consultation</a>
                                        </div>
                                    </div>

                                    <div className="contact-info">
                                        <h5>Contact Information</h5>
                                        <div className="contact-item">
                                            <strong>Phone:</strong>
                                            <p>+91-9158450788</p>
                                            <p>+91-8766040262</p>
                                        </div>
                                        <div className="contact-item">
                                            <strong>Address:</strong>
                                            <p>Office No. 017, First Floor, A-Building, Downtown City Vista, Fountain Road, Kharadi, Pune – 411014</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

// Treatment data for all 16 services
const getTreatmentData = (slug) => {
    const treatments = {
        'asthma-and-allergy': {
            title: 'Asthma & Allergy',
            shortDescription: 'Comprehensive care for asthma and allergic conditions affecting your respiratory system.',
            detailedDescription: 'Asthma is a chronic respiratory condition that affects millions worldwide. Our specialized approach combines advanced diagnostics with personalized treatment plans to help you manage symptoms effectively and improve your quality of life.',
            image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Wheezing or whistling sound when breathing',
                'Shortness of breath during activities',
                'Chest tightness or pain',
                'Persistent cough, especially at night',
                'Difficulty sleeping due to breathing problems'
            ],
            treatmentApproach: 'Our treatment approach includes comprehensive allergy testing, pulmonary function tests, and personalized medication plans. We focus on identifying triggers and developing long-term management strategies.',
            expectations: [
                'Initial consultation and comprehensive assessment',
                'Allergy testing and pulmonary function evaluation',
                'Personalized treatment plan development',
                'Regular follow-ups and medication adjustments',
                'Education on trigger avoidance and self-management'
            ]
        },
        'bronchoscopy': {
            title: 'Bronchoscopy',
            shortDescription: 'Advanced diagnostic procedure to examine airways and diagnose lung conditions.',
            detailedDescription: 'Bronchoscopy is a minimally invasive procedure that allows direct visualization of the airways. Using a flexible bronchoscope, we can diagnose various lung conditions and perform therapeutic interventions.',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Persistent cough with unknown cause',
                'Blood in sputum (hemoptysis)',
                'Abnormal chest X-ray findings',
                'Suspected lung infection or tumor',
                'Foreign body in airways'
            ],
            treatmentApproach: 'The procedure is performed under local anesthesia with sedation. We use state-of-the-art equipment to ensure patient comfort and accurate diagnosis.',
            expectations: [
                'Pre-procedure consultation and preparation',
                'Minimally invasive outpatient procedure',
                'Real-time visualization of airways',
                'Tissue sampling if necessary',
                'Detailed results and treatment recommendations'
            ]
        },
        'bronchitis': {
            title: 'Bronchitis',
            shortDescription: 'Treatment for acute and chronic bronchitis with comprehensive respiratory care.',
            detailedDescription: 'Bronchitis involves inflammation of the bronchial tubes that carry air to your lungs. We provide specialized care for both acute and chronic forms of bronchitis.',
            image: 'https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Persistent cough with mucus production',
                'Chest discomfort or soreness',
                'Fatigue and weakness',
                'Shortness of breath',
                'Low-grade fever (in acute cases)'
            ],
            treatmentApproach: 'Treatment includes bronchodilators, anti-inflammatory medications, and pulmonary rehabilitation. We focus on reducing inflammation and improving lung function.',
            expectations: [
                'Comprehensive respiratory assessment',
                'Targeted medication therapy',
                'Breathing exercises and techniques',
                'Lifestyle modification guidance',
                'Regular monitoring and follow-up'
            ]
        },
        'chest-diseases': {
            title: 'Chest Diseases',
            shortDescription: 'Comprehensive diagnosis and management of various chest-related conditions.',
            detailedDescription: 'Our clinic specializes in diagnosing and treating a wide range of chest diseases using advanced imaging, laboratory tests, and individualized treatment strategies.',
            image: 'https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Chest pain or discomfort',
                'Difficulty breathing',
                'Persistent cough',
                'Abnormal chest sounds',
                'Reduced exercise tolerance'
            ],
            treatmentApproach: 'We use comprehensive diagnostic approaches including imaging studies, pulmonary function tests, and laboratory analysis to provide accurate diagnosis and effective treatment.',
            expectations: [
                'Thorough medical history and examination',
                'Advanced diagnostic testing',
                'Multidisciplinary treatment approach',
                'Personalized care plans',
                'Ongoing monitoring and support'
            ]
        },
        'chest-infection': {
            title: 'Chest Infection',
            shortDescription: 'Expert treatment for various types of chest infections and respiratory complications.',
            detailedDescription: 'Chest infections can range from mild to severe and require prompt, appropriate treatment. Our specialists provide comprehensive care for all types of respiratory infections.',
            image: 'https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Productive cough with colored sputum',
                'Fever and chills',
                'Chest pain when breathing or coughing',
                'Shortness of breath',
                'General malaise and fatigue'
            ],
            treatmentApproach: 'Treatment includes appropriate antibiotic therapy, supportive care, and monitoring for complications. We ensure complete recovery and prevent recurrence.',
            expectations: [
                'Rapid diagnosis and treatment initiation',
                'Appropriate antibiotic selection',
                'Symptom monitoring and management',
                'Prevention of complications',
                'Complete recovery guidance'
            ]
        },
        'copd': {
            title: 'COPD',
            shortDescription: 'Comprehensive management of Chronic Obstructive Pulmonary Disease.',
            detailedDescription: 'COPD is a progressive lung disease that requires long-term management. We provide comprehensive care including medication management, pulmonary rehabilitation, and lifestyle counseling.',
            image: 'https://images.pexels.com/photos/4386471/pexels-photo-4386471.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Progressive shortness of breath',
                'Chronic cough with sputum',
                'Wheezing and chest tightness',
                'Frequent respiratory infections',
                'Reduced exercise capacity'
            ],
            treatmentApproach: 'Our approach includes bronchodilator therapy, pulmonary rehabilitation, oxygen therapy when needed, and comprehensive lifestyle modifications.',
            expectations: [
                'Comprehensive COPD assessment',
                'Personalized medication regimen',
                'Pulmonary rehabilitation program',
                'Smoking cessation support',
                'Long-term disease management'
            ]
        },
        'cancer-diagnosis': {
            title: 'Cancer Diagnosis',
            shortDescription: 'Advanced diagnostic services for early detection of lung and thoracic cancers.',
            detailedDescription: 'Early detection of lung cancer significantly improves treatment outcomes. We provide comprehensive diagnostic services using the latest technology and techniques.',
            image: 'https://images.pexels.com/photos/4386472/pexels-photo-4386472.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Persistent cough that worsens',
                'Blood in sputum',
                'Chest pain that worsens with breathing',
                'Unexplained weight loss',
                'Shortness of breath'
            ],
            treatmentApproach: 'We use advanced imaging techniques, bronchoscopy, and tissue sampling for accurate diagnosis. Early detection and staging are crucial for treatment planning.',
            expectations: [
                'Comprehensive screening and assessment',
                'Advanced imaging studies',
                'Tissue biopsy when indicated',
                'Multidisciplinary consultation',
                'Coordinated care planning'
            ]
        },
        'diagnostic-rooms': {
            title: 'Diagnostic Rooms',
            shortDescription: 'State-of-the-art diagnostic facilities for comprehensive respiratory evaluation.',
            detailedDescription: 'Our modern diagnostic rooms are equipped with advanced technology to support comprehensive evaluations and early detection of respiratory disorders.',
            image: 'https://images.pexels.com/photos/4386473/pexels-photo-4386473.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Need for pulmonary function testing',
                'Respiratory symptom evaluation',
                'Pre-operative assessment',
                'Occupational lung disease screening',
                'Exercise tolerance testing'
            ],
            treatmentApproach: 'We provide comprehensive diagnostic services including pulmonary function tests, imaging studies, and specialized respiratory assessments.',
            expectations: [
                'Comfortable, modern facilities',
                'Advanced diagnostic equipment',
                'Experienced technical staff',
                'Comprehensive test results',
                'Detailed interpretation and recommendations'
            ]
        },
        'ild-and-pulmonary-fibrosis': {
            title: 'ILD & Pulmonary Fibrosis',
            shortDescription: 'Specialized care for interstitial lung disease and pulmonary fibrosis.',
            detailedDescription: 'Interstitial lung disease and pulmonary fibrosis are complex conditions requiring specialized expertise. We provide comprehensive evaluation and management.',
            image: 'https://images.pexels.com/photos/4386474/pexels-photo-4386474.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Progressive shortness of breath',
                'Dry, persistent cough',
                'Fatigue and weakness',
                'Clubbing of fingers',
                'Reduced exercise tolerance'
            ],
            treatmentApproach: 'Treatment includes anti-fibrotic medications, immunosuppressive therapy, pulmonary rehabilitation, and oxygen therapy as needed.',
            expectations: [
                'Comprehensive ILD evaluation',
                'High-resolution CT imaging',
                'Specialized treatment protocols',
                'Regular monitoring and follow-up',
                'Supportive care and rehabilitation'
            ]
        },
        'pleural-effusion': {
            title: 'Pleural Effusion',
            shortDescription: 'Expert diagnosis and treatment of fluid accumulation around the lungs.',
            detailedDescription: 'Pleural effusion involves fluid accumulation in the space around the lungs. We provide precise diagnosis and treatment including ultrasound-guided procedures.',
            image: 'https://images.pexels.com/photos/4386475/pexels-photo-4386475.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Shortness of breath',
                'Chest pain, especially when breathing',
                'Dry cough',
                'Feeling of chest heaviness',
                'Reduced exercise capacity'
            ],
            treatmentApproach: 'We use ultrasound-guided thoracentesis for fluid removal and analysis. Treatment addresses the underlying cause and prevents recurrence.',
            expectations: [
                'Accurate diagnosis with imaging',
                'Ultrasound-guided procedures',
                'Fluid analysis and interpretation',
                'Treatment of underlying causes',
                'Prevention of recurrence'
            ]
        },
        'post-covid-care': {
            title: 'Post Covid Care',
            shortDescription: 'Comprehensive rehabilitation for lingering post-COVID respiratory symptoms.',
            detailedDescription: 'Post-COVID syndrome can affect respiratory function long after recovery. We provide specialized care to help patients regain their lung health and overall well-being.',
            image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Persistent shortness of breath',
                'Chronic fatigue',
                'Reduced exercise tolerance',
                'Persistent cough',
                'Chest tightness'
            ],
            treatmentApproach: 'Our approach includes respiratory therapy, lung function testing, gradual exercise programs, and comprehensive rehabilitation.',
            expectations: [
                'Comprehensive post-COVID assessment',
                'Pulmonary rehabilitation program',
                'Gradual exercise progression',
                'Respiratory therapy techniques',
                'Long-term recovery support'
            ]
        },
        'pneumonia': {
            title: 'Pneumonia',
            shortDescription: 'Expert care for pneumonia with rapid diagnosis and effective treatment.',
            detailedDescription: 'Pneumonia requires prompt diagnosis and appropriate treatment. Our specialists provide comprehensive care for all types of pneumonia.',
            image: 'https://images.pexels.com/photos/4386477/pexels-photo-4386477.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'High fever and chills',
                'Productive cough with colored sputum',
                'Chest pain when breathing',
                'Shortness of breath',
                'Fatigue and weakness'
            ],
            treatmentApproach: 'Treatment includes appropriate antibiotic therapy, supportive care, and monitoring for complications. We ensure complete recovery.',
            expectations: [
                'Rapid diagnosis and treatment',
                'Appropriate antibiotic selection',
                'Symptom monitoring',
                'Complication prevention',
                'Complete recovery support'
            ]
        },
        'pulmonary-function-tests': {
            title: 'Pulmonary Function Tests',
            shortDescription: 'Comprehensive lung function testing for accurate respiratory assessment.',
            detailedDescription: 'Pulmonary function tests provide detailed information about lung performance and help diagnose various respiratory conditions.',
            image: 'https://images.pexels.com/photos/4386478/pexels-photo-4386478.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Unexplained shortness of breath',
                'Chronic cough',
                'Reduced exercise tolerance',
                'Occupational exposure concerns',
                'Pre-operative assessment needs'
            ],
            treatmentApproach: 'We perform comprehensive spirometry, lung volume measurements, and diffusion capacity testing using state-of-the-art equipment.',
            expectations: [
                'Comprehensive lung function assessment',
                'Detailed test interpretation',
                'Comparison with normal values',
                'Treatment recommendations',
                'Follow-up testing as needed'
            ]
        },
        'sleep-related-disorder': {
            title: 'Sleep Related Disorder',
            shortDescription: 'Comprehensive evaluation and treatment of sleep-related breathing disorders.',
            detailedDescription: 'Sleep disorders can significantly impact respiratory health and overall quality of life. We provide comprehensive sleep studies and treatment options.',
            image: 'https://images.pexels.com/photos/4386479/pexels-photo-4386479.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Loud snoring',
                'Witnessed breathing interruptions',
                'Excessive daytime sleepiness',
                'Morning headaches',
                'Difficulty concentrating'
            ],
            treatmentApproach: 'We provide overnight sleep studies, CPAP therapy, and comprehensive treatment plans for various sleep-related breathing disorders.',
            expectations: [
                'Comprehensive sleep evaluation',
                'Overnight sleep study',
                'CPAP therapy if indicated',
                'Follow-up and adjustment',
                'Long-term management support'
            ]
        },
        'tobacco-and-smoking-cessation': {
            title: 'Tobacco & Smoking Cessation',
            shortDescription: 'Comprehensive smoking cessation program with counseling and support.',
            detailedDescription: 'Quitting smoking is one of the best things you can do for your lung health. Our comprehensive program provides the support and tools you need to succeed.',
            image: 'https://images.pexels.com/photos/4386480/pexels-photo-4386480.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Desire to quit smoking',
                'Nicotine withdrawal symptoms',
                'Smoking-related health concerns',
                'Repeated failed quit attempts',
                'Need for professional support'
            ],
            treatmentApproach: 'Our program includes counseling, nicotine replacement therapy, prescription medications, and ongoing support to help you quit successfully.',
            expectations: [
                'Personalized quit plan development',
                'Nicotine replacement therapy',
                'Behavioral counseling',
                'Medication support if needed',
                'Long-term follow-up and support'
            ]
        },
        'tuberculosis-treatment': {
            title: 'Tuberculosis Treatment',
            shortDescription: 'Comprehensive TB diagnosis and treatment following national guidelines.',
            detailedDescription: 'Tuberculosis requires specialized care and long-term treatment. We provide comprehensive TB management following national guidelines.',
            image: 'https://images.pexels.com/photos/4386481/pexels-photo-4386481.jpeg?auto=compress&cs=tinysrgb&w=800',
            symptoms: [
                'Persistent cough lasting weeks',
                'Blood in sputum',
                'Chest pain',
                'Unexplained weight loss',
                'Night sweats and fever'
            ],
            treatmentApproach: 'We provide accurate TB diagnosis using advanced testing methods and comprehensive treatment following national TB guidelines.',
            expectations: [
                'Accurate TB diagnosis',
                'Comprehensive treatment plan',
                'Regular monitoring and follow-up',
                'Contact tracing and prevention',
                'Complete cure and recovery'
            ]
        }
    };

    return treatments[slug] || treatments['asthma-and-allergy'];
};

export default TreatmentDetails;