import React from 'react';
import ServicesData from './ServicesData';

function Ser() {
    return (
        <div>
            {ServicesData.map((ser, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <img
                        src={ser.icon}
                        alt={ser.title}
                        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
                    />
                    <h2>{ser.title}</h2> 
                    <p>{ser.description}</p>
                </div>
            ))}
        </div>
    );
}


export default Ser;
