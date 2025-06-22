import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const API_URL = 'https://hospital-app-latest.onrender.com';

  const fetchAllContacts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/getallbookedslots`);
      setContacts(response.data);
      setFilteredContacts(response.data);
      setSelectedDate('');
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching all contacts:', error);
    }
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setCurrentPage(1);

    if (date === '') {
      setFilteredContacts(contacts);
    } else {
      try {
        const response = await axios.get(`${API_URL}/api/admin/booked-slots/${date}`);
        setFilteredContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts for date:', error);
        setFilteredContacts([]);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await axios.delete(`${API_URL}/api/admin/delete-booked-slot/${id}`);
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);

      const updatedFiltered = filteredContacts.filter(contact => contact.id !== id);
      setFilteredContacts(updatedFiltered);
      alert('Record deleted successfully!');
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Failed to delete the record.');
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredContacts.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredContacts.length / recordsPerPage);

  return (
    <div className='contact-list'>
      <div className="contact-list-container">
        <h1>Booked Appointments</h1>

        <div className="filter-bar">
          <label htmlFor="date">Choose a Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <button onClick={() => handleDateChange({ target: { value: '' } })}>Clear</button>
          <button onClick={fetchAllContacts}>Fetch All</button>
        </div>

        {currentRecords.length > 0 ? (
          <>
            <table className="contact-table">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th style={{ width: '40%' }}>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((contact, index) => (
                  <tr key={index}>
                    <td>{indexOfFirstRecord + index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.mobile}</td>
                    <td>{contact.appointmentDate}</td>
                    <td>{contact.appointmentTime}</td>
                    <td>{contact.message || 'No message'}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(contact.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span> Page {currentPage} of {totalPages} </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="no-contacts">No records found.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
