import React from 'react';
import './Symptoms.scss';
import IconList from '../../components/IconList/IconList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import iconOne from '../../assets/symptoms/11.jpg';
import iconTwo from '../../assets/symptoms/22.jpg';
import iconThree from '../../assets/symptoms/55.png';
import iconFour from '../../assets/symptoms/33.jpg';
import iconFive from '../../assets/symptoms/44.png';

const Symptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Chronic Cough',
            'description':'A persistent cough lasting more than a few weeks, especially if it disrupts sleep or daily activities, could be a sign of underlying respiratory conditions.' 
        },
        {
            'icon' : iconTwo,
            'title' : 'Shortness of Breath',
            'description':'Difficulty breathing or feeling breathless even when resting may indicate a lung or airway problem.' 
        },
        {
            'icon' : iconThree,
            'title' : 'Chest Pain',
            'description':'Unexplained chest pain that worsens with breathing or coughing might require immediate attention.' 
        },
        {
            'icon' : iconFour,
            'title' : 'Wheezing or Noisy Breathing',
            'description':'If you experience frequent wheezing or unusual sounds while breathing, it could point to airway obstruction or asthma.' 
        },
        {
            'icon' : iconFive,
            'title' : 'Frequent Respiratory Infections',
            'description':'Recurring respiratory infections, such as bronchitis or pneumonia, can signal weakened lung function or chronic conditions.' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title="Sign and symptoms related to respiratory and pulmonary issues"
                    description="Common symptoms that a chest clinic would address, helping patients know when to seek medical advice."
                />

                <div className="row">
                    {
                        symptomsData.map(singleSymptoms => 
                            <IconList 
                                key={singleSymptoms.title}  
                                icon={singleSymptoms.icon}
                                title={singleSymptoms.title}
                                description={singleSymptoms.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Symptoms;