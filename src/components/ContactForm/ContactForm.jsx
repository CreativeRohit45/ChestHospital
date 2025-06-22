import React, { useState, useEffect, useMemo } from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';
import axios from 'axios'; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        message: '',
        appointmentDate: '',
        appointmentTime: ''
    });

    const [loading, setLoading] = useState(false);
    const [fetchingSlots, setFetchingSlots] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [bookedSlots, setBookedSlots] = useState([]);

    // Update this URL to your backend API URL
    const API_URL = 'https://hospital-app-latest.onrender.com'; 

    // Clinic schedule
    const clinicSchedule = useMemo(() => ({
        0: [], // Sunday - Closed
        1: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Monday
        2: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Tuesday
        3: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Wednesday
        4: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Thursday
        5: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Friday
        6: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"] // Saturday
    }), []);

    useEffect(() => {
        const fetchBookedSlots = async () => {
            if (!formData.appointmentDate) return;
            
            setFetchingSlots(true);
            try {
                const response = await axios.get(`${API_URL}/api/booked-slots/${formData.appointmentDate}`);
                setBookedSlots(response.data.bookedSlots || []);
                
                const selectedDate = new Date(formData.appointmentDate);
                const dayOfWeek = selectedDate.getDay();
                
                const allSlots = clinicSchedule[dayOfWeek] || [];
                const booked = response.data.bookedSlots || [];

                const available = allSlots.filter(slot => !booked.includes(slot));
                setAvailableTimes(available);
                
            } catch (err) {
                console.error('Error fetching booked slots:', err);
                setError('Failed to fetch available time slots. Please try again.');
            } finally {
                setFetchingSlots(false);
            }
        };

        fetchBookedSlots();
    }, [formData.appointmentDate, clinicSchedule, API_URL]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value.trim()
        }));
        setError('');
        setSuccess('');

        if (name === 'appointmentDate') {
            setFormData(prev => ({
                ...prev,
                appointmentTime: ''
            }));
        }
    };

    const validateForm = () => {
        if (!formData.name) return "Name is required";
        if (!formData.mobile) return "Mobile number is required";
        if (!/^\d{10}$/.test(formData.mobile)) return "Invalid mobile number format";
        if (!formData.appointmentDate) return "Appointment date is required";
        if (!formData.appointmentTime) return "Appointment time is required";
        
        const selectedDate = new Date(formData.appointmentDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            return "You cannot book an appointment in the past";
        }
        
        const dayOfWeek = selectedDate.getDay();
        if (clinicSchedule[dayOfWeek].length === 0) {
            return "The clinic is closed on the selected day";
        }
        
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/api/book-appointment`, formData);
            
            setSuccess(response.data.msg || 'Appointment booked successfully!');
            
            const updatedSlotsResponse = await axios.get(`${API_URL}/api/booked-slots/${formData.appointmentDate}`);
            setBookedSlots(updatedSlotsResponse.data.bookedSlots || []);
            
            setFormData({
                name: '',
                mobile: '',
                message: '',
                appointmentDate: '',
                appointmentTime: ''
            });
        } catch (err) {
            setError(err.response?.data?.msg || 'Failed to book appointment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getScheduleDisplay = () => {
        return (
            <div className="clinic-hours">
                {/* You can add clinic hours display here if needed */}
            </div>
        );
    };

    return (
        <div className="appointment-container">
            {getScheduleDisplay()}
            
            <form onSubmit={handleSubmit} className="contact-form" autoComplete="on">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name..."
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile No</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter mobile no..."
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                maxLength="10"
                                autoComplete="tel"
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="appointmentDate">Appointment Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="appointmentDate"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="appointmentTime">Appointment Time</label>
                            <select
                                className="form-control"
                                id="appointmentTime"
                                name="appointmentTime"
                                value={formData.appointmentTime}
                                onChange={handleChange}
                                autoComplete="off"
                                disabled={fetchingSlots || !formData.appointmentDate}
                            >
                                <option value="">
                                    {fetchingSlots ? 'Loading available times...' : 'Select Time'}
                                </option>
                                {availableTimes.length > 0 ? (
                                    availableTimes.map((time, index) => (
                                        <option 
                                            key={index} 
                                            value={time} 
                                            disabled={bookedSlots.includes(time)}
                                        >
                                            {time} {bookedSlots.includes(time) ? '(Booked)' : ''}
                                        </option>
                                    ))
                                ) : (
                                    formData.appointmentDate && !fetchingSlots && 
                                    <option disabled>No slots available for this date</option>
                                )}
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="message">Messages</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter your message..."
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <button type="submit" className="btn appointment-btn" disabled={loading || fetchingSlots}>
                            {loading ? 'Booking...' : 'Book Appointment'}
                        </button>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="appointment-call">
                            <div className="icon">
                                <img src={icon} alt="icon" />
                            </div>
                            <div className="call-text">
                                <p>Need Help?</p>
                                <h6>+91-9158450788</h6>
                                <h6>+91-8766040262</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
