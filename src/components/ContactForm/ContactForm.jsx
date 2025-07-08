import React, { useState, useEffect, useMemo, useRef } from 'react';
import './ContactForm.scss';
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
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableSlots, setAvailableSlots] = useState({});
    const [loadingSlots, setLoadingSlots] = useState({});
    const [fetchingSlots, setFetchingSlots] = useState(false);
    const [bookedSlots, setBookedSlots] = useState([]);
    const [exportLoading, setExportLoading] = useState(false);
    const recordsPerPage = 10;

    // Update this URL to your backend API URL
    const API_URL = 'https://hospital-backend-production-318c.up.railway.app'; 

     // Refs for click outside detection
    const calendarRef = useRef(null);
    const inputRef = useRef(null);

    // Clinic schedule
    const clinicSchedule = useMemo(() => ({
    0: [], // Sunday - Closed
    1: [ // Monday - 6:00 PM to 9:30 PM
        "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
        "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
        "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
        "9:00 PM", "9:15 PM"
    ],
    2: [ // Tuesday - 10:00 AM to 1:00 PM & 7:00 PM to 9:30 PM
        "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
        "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
        "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
        "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
        "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
        "9:00 PM", "9:15 PM"
    ],
    3: [ // Wednesday - 6:00 PM to 9:30 PM
        "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
        "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
        "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
        "9:00 PM", "9:15 PM"
    ],
    4: [ // Thursday - 6:00 PM to 9:30 PM
        "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
        "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
        "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
        "9:00 PM", "9:15 PM"
    ],
    5: [ // Friday - 10:00 AM to 1:00 PM & 6:00 PM to 9:30 PM
        "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
        "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
        "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
        "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
        "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
        "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
        "9:00 PM", "9:15 PM"
    ],
    6: [ // Saturday - 10:00 AM to 1:00 PM & 6:00 PM to 9:30 PM
        "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
        "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
        "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
        "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
        "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
        "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
        "9:00 PM", "9:15 PM"
    ]
}), []);



    // Handle click outside calendar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showCalendar && 
                calendarRef.current && 
                !calendarRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)) {
                setShowCalendar(false);
                setSelectedDate(null);
                setAvailableSlots({});
                setBookedSlots([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCalendar]);

    // Prevent body scroll when calendar is open
    useEffect(() => {
        if (showCalendar) {
            // Prevent background scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling
            document.body.style.overflow = '';
        }

        // Clean up when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [showCalendar]);


    // Fetch available slots for a specific date
    const fetchSlotsForDate = async (date) => {
        const dateString = date.toISOString().split('T')[0];
        
        if (availableSlots[dateString] || loadingSlots[dateString]) {
            return;
        }

        setLoadingSlots(prev => ({ ...prev, [dateString]: true }));

        try {
            const response = await axios.get(`${API_URL}/api/booked-slots/${dateString}`);
            const booked = response.data.bookedSlots || [];

            const dayOfWeek = date.getDay();
            const allSlots = clinicSchedule[dayOfWeek] || [];

            const now = new Date();
            const isToday = date.toDateString() === now.toDateString();

            const available = allSlots.filter(slot => {
                if (booked.includes(slot)) return false;

                if (isToday) {
                    const [hours, minutes, meridian] = slot.match(/(\d+):(\d+)\s?(AM|PM)/i).slice(1);
                    let slotHour = parseInt(hours, 10);
                    let slotMinute = parseInt(minutes, 10);

                    if (meridian.toUpperCase() === 'PM' && slotHour !== 12) slotHour += 12;
                    if (meridian.toUpperCase() === 'AM' && slotHour === 12) slotHour = 0;

                    const slotTime = new Date();
                    slotTime.setHours(slotHour, slotMinute, 0, 0);

                    return slotTime > now;
                }

                return true;
            });

            setAvailableSlots(prev => ({
                ...prev,
                [dateString]: available
            }));

        } catch (err) {
            console.error('Error fetching booked slots:', err);
            setAvailableSlots(prev => ({
                ...prev,
                [dateString]: []
            }));
        } finally {
            setLoadingSlots(prev => ({ ...prev, [dateString]: false }));
        }
    };

    // Generate calendar days
    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        const days = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const isCurrentMonth = date.getMonth() === month;
            const isPast = date < today;
            const dayOfWeek = date.getDay();
            const isClinicClosed = clinicSchedule[dayOfWeek].length === 0;
            
            days.push({
                date,
                isCurrentMonth,
                isPast,
                isClinicClosed,
                dateString: date.toISOString().split('T')[0]
            });
        }
        
        return days;
    };

    // Handle date click
    const handleDateClick = (day) => {
        if (day.isPast || day.isClinicClosed || !day.isCurrentMonth) return;
        
        setSelectedDate(day.date);
        fetchSlotsForDate(day.date);
    };

    // Handle time slot selection
    const handleTimeSlotClick = (time) => {
        const dateString = selectedDate.toISOString().split('T')[0];
        setFormData(prev => ({
            ...prev,
            appointmentDate: dateString,
            appointmentTime: time
        }));
        setShowCalendar(false);
        setSelectedDate(null);
        setAvailableSlots({});
        setBookedSlots([]);
        setError('');
        setSuccess('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
        setSuccess('');
    };

    const handleCalendarOpen = () => {
        setShowCalendar(true);
        setError('');
        setSuccess('');
    };

    const handleCalendarClose = () => {
        setShowCalendar(false);
        setSelectedDate(null);
        setAvailableSlots({});
        setBookedSlots([]);
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
            
            // Clear the cached slots for the selected date
            const dateString = formData.appointmentDate;
            setAvailableSlots(prev => {
                const updated = { ...prev };
                delete updated[dateString];
                return updated;
            });
            
            setFormData({
                name: '',
                mobile: '',
                message: '',
                appointmentDate: '',
                appointmentTime: ''
            });
            setSelectedDate(null);
        } catch (err) {
            setError(err.response?.data?.msg || 'Failed to book appointment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const calendarDays = generateCalendarDays();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    return (
        <div className="appointment-container">
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
                    
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label>Select Appointment Date & Time</label>
                            <div className="calendar-input-wrapper">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="form-control calendar-display"
                                    placeholder="Click to select date and time..."
                                    value={formData.appointmentDate && formData.appointmentTime ? 
                                        `${new Date(formData.appointmentDate).toLocaleDateString()} at ${formData.appointmentTime}` : ''}
                                    onClick={handleCalendarOpen}
                                    readOnly
                                />
                                
                                {showCalendar && (
                                    <>
                                        <div className="calendar-overlay" onClick={handleCalendarClose}></div>
                                        <div className="calendar-popup" ref={calendarRef}>
                                            <div className="calendar-header">
                                                <button 
                                                    type="button"
                                                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                                    className="calendar-nav-btn"
                                                >
                                                    ‹
                                                </button>
                                                <h3>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
                                                <button 
                                                    type="button"
                                                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                                    className="calendar-nav-btn"
                                                >
                                                    ›
                                                </button>
                                                <button 
                                                    type="button"
                                                    onClick={handleCalendarClose}
                                                    className="calendar-close-btn"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                            
                                            <div className="calendar-content">
                                                <div className="calendar-grid">
                                                    <div className="calendar-weekdays">
                                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                                            <div key={day} className="weekday">{day}</div>
                                                        ))}
                                                    </div>
                                                    
                                                    <div className="calendar-days">
                                                        {calendarDays.map((day, index) => (
                                                            <div
                                                                key={index}
                                                                className={`calendar-day ${
                                                                    !day.isCurrentMonth ? 'other-month' : ''
                                                                } ${
                                                                    day.isPast ? 'past' : ''
                                                                } ${
                                                                    day.isClinicClosed ? 'closed' : ''
                                                                } ${
                                                                    selectedDate && day.date.toDateString() === selectedDate.toDateString() ? 'selected' : ''
                                                                }`}
                                                                onClick={() => handleDateClick(day)}
                                                            >
                                                                <span className="day-number">{day.date.getDate()}</span>
                                                                {day.isCurrentMonth && !day.isPast && !day.isClinicClosed && (
                                                                    <div className="slots-indicator">
                                                                        {loadingSlots[day.dateString] ? (
                                                                            <span className="loading-dots">•••</span>
                                                                        ) : availableSlots[day.dateString] ? (
                                                                            <span className="slots-count">
                                                                                {availableSlots[day.dateString].length} slots
                                                                            </span>
                                                                        ) : (
                                                                            <span className="slots-count">Available</span>
                                                                        )}
                                                                    </div>
                                                                )}
                                                                {day.isClinicClosed && day.isCurrentMonth && (
                                                                    <div className="closed-indicator">Closed</div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                {selectedDate && (
                                                    <div className="time-slots-section">
                                                        <h4>Available Times for {selectedDate.toLocaleDateString()}</h4>
                                                        <div className="time-slots-grid">
                                                            {loadingSlots[selectedDate.toISOString().split('T')[0]] ? (
                                                                <div className="loading-slots">Loading available times...</div>
                                                            ) : availableSlots[selectedDate.toISOString().split('T')[0]]?.length > 0 ? (
                                                                availableSlots[selectedDate.toISOString().split('T')[0]].map((time, index) => (
                                                                    <button
                                                                        key={index}
                                                                        type="button"
                                                                        className="time-slot-btn"
                                                                        onClick={() => handleTimeSlotClick(time)}
                                                                    >
                                                                        {time}
                                                                    </button>
                                                                ))
                                                            ) : (
                                                                <div className="no-slots">No available slots for this date</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
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
                    
                    <div className="col-lg-12">
                        <button type="submit" className="btn appointment-btn" disabled={loading}>
                            {loading ? 'Booking...' : 'Book Appointment'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;