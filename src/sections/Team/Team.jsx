import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.jpeg';


const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dr. Vaibhav D. Pandharkar'
        },

    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle
                            subTitle="Meet Our Specialist"
                            title="Get to know our Chest Specialist"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'>Get to know our dedicated chest specialist, committed to providing personalized, high-quality respiratory care. With expertise and a compassionate approach, our doctor is here to support your journey to better lung health and well-being.</p>

                    </div>
                </div>

                <div className="row">
                    {
                        teams.map((team, index) =>
                        <div className="col-lg-12 col-sm-12" key={team.id || team.name || index}>
                            <div className="team-card d-flex align-items-center mb-4">
                            <div className="team-img col-lg-4 col-sm-6">
                                <img src={team.img} alt={team.name} className="img-fluid" />
                            </div>
                            <div className="team-info col-lg-8 col-sm-6">
                                <h3>{team.name}</h3>
                                <p>Dr. Vaibhav Pandharkar is a Pulmonologist in Kharadi-Chandannagar, Pune and has experience of 12 years in this field. Dr. Vaibhav Pandharkar practices at Dr. Pandharkar Chest Clinic at Kharadi Bypass, Pune. He is a consultant at Columbia Asia Hospital, Sangamnerkar Hospital, Imax Hospital, and also a panel consultant at Ruby Hall Clinic, Inamdar Hospital, and Sahyadri Hospital (Nagar Road and Hadapsar, Pune).</p>
                                <p>He completed his MBBS from Jawahar Medical Foundation's Annasaheb Chudaman Patil Memorial Medical College, Dhule, DTCD (chest diseases) from B J Medical College, Pune, DNB (Pulmonary Medicine) from Ruby Hall Clinic, Pune, MD (Chest Medicine) (USAIM), and Adult Respiratory Medicine European Diploma from Europe.</p>
                                <p>He is a member of ATS and a member of ERS. Some of the services provided by the doctor are COPD, Asthma, Tuberculosis and other Chest Diseases, Pulmonary Function Tests, Smoking Cessation, etc.</p>
                            </div>
                            </div>
                        </div>
                        )
                    }
                </div>



            </div>
        </section>
    );
};

export default Team;