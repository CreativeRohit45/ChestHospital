import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingContact, setEditingContact] = useState(null);
  const [editForm, setEditForm] = useState({});
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

  const handleEdit = (contact) => {
    setEditingContact(contact.id);
    setEditForm({
      name: contact.name,
      mobile: contact.mobile,
      appointmentDate: contact.appointmentDate,
      appointmentTime: contact.appointmentTime,
      message: contact.message || ''
    });
  };

  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`${API_URL}/api/admin/update-booked-slot/${id}`, editForm);
      
      // Update local state
      const updatedContacts = contacts.map(contact => 
        contact.id === id ? { ...contact, ...editForm } : contact
      );
      setContacts(updatedContacts);
      
      const updatedFiltered = filteredContacts.map(contact => 
        contact.id === id ? { ...contact, ...editForm } : contact
      );
      setFilteredContacts(updatedFiltered);
      
      setEditingContact(null);
      setEditForm({});
      alert('Record updated successfully!');
    } catch (error) {
      console.error('Error updating contact:', error);
      alert('Failed to update the record.');
    }
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
    setEditForm({});
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination-btn prev-btn"
        >
          ← Previous
        </button>
      );
    }

    // First page
    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="pagination-btn"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(<span key="dots1" className="pagination-dots">...</span>);
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="dots2" className="pagination-dots">...</span>);
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="pagination-btn"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="pagination-btn next-btn"
        >
          Next →
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className='contact-list'>
      <div className="contact-list-container">
        <div className="contact-list-header">
          <h1>
            <span className="header-icon">📋</span>
            Booked Appointments
          </h1>
          <p className="header-subtitle">Manage patient appointments and records</p>
        </div>

        <div className="filter-section">
          <div className="filter-bar">
            <div className="filter-group">
              <label htmlFor="date">
                <span className="filter-icon">📅</span>
                Filter by Date:
              </label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="date-input"
              />
            </div>
            <div className="filter-actions">
              <button 
                onClick={() => handleDateChange({ target: { value: '' } })}
                className="filter-btn clear-btn"
              >
                <span>🔄</span>
                Clear Filter
              </button>
              <button 
                onClick={fetchAllContacts}
                className="filter-btn refresh-btn"
              >
                <span>↻</span>
                Refresh All
              </button>
            </div>
          </div>

          <div className="records-info">
            <span className="total-records">
              Total Records: <strong>{filteredContacts.length}</strong>
            </span>
            <span className="current-page-info">
              Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, filteredContacts.length)} of {filteredContacts.length}
            </span>
          </div>
        </div>

        {currentRecords.length > 0 ? (
          <>
            <div className="table-wrapper">
              <table className="contact-table">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecords.map((contact, index) => (
                    <tr key={contact.id || index} className="table-row">
                      <td className="sr-no">{indexOfFirstRecord + index + 1}</td>
                      <td>
                        {editingContact === contact.id ? (
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                            className="edit-input"
                          />
                        ) : (
                          <span className="patient-name">{contact.name}</span>
                        )}
                      </td>
                      <td>
                        {editingContact === contact.id ? (
                          <input
                            type="tel"
                            value={editForm.mobile}
                            onChange={(e) => setEditForm({...editForm, mobile: e.target.value})}
                            className="edit-input"
                          />
                        ) : (
                          <span className="mobile-number">{contact.mobile}</span>
                        )}
                      </td>
                      <td>
                        {editingContact === contact.id ? (
                          <input
                            type="date"
                            value={editForm.appointmentDate}
                            onChange={(e) => setEditForm({...editForm, appointmentDate: e.target.value})}
                            className="edit-input"
                          />
                        ) : (
                          <span className="appointment-date">{contact.appointmentDate}</span>
                        )}
                      </td>
                      <td>
                        {editingContact === contact.id ? (
                          <input
                            type="time"
                            value={editForm.appointmentTime}
                            onChange={(e) => setEditForm({...editForm, appointmentTime: e.target.value})}
                            className="edit-input"
                          />
                        ) : (
                          <span className="appointment-time">{contact.appointmentTime}</span>
                        )}
                      </td>
                      <td className="message-cell">
                        {editingContact === contact.id ? (
                          <textarea
                            value={editForm.message}
                            onChange={(e) => setEditForm({...editForm, message: e.target.value})}
                            className="edit-textarea"
                            rows="2"
                          />
                        ) : (
                          <span className="message-text">{contact.message || 'No message'}</span>
                        )}
                      </td>
                      <td className="actions-cell">
                        {editingContact === contact.id ? (
                          <div className="edit-actions">
                            <button
                              onClick={() => handleSaveEdit(contact.id)}
                              className="action-btn save-btn"
                              title="Save changes"
                            >
                              <span>💾</span>
                              Save
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="action-btn cancel-btn"
                              title="Cancel editing"
                            >
                              <span>❌</span>
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="view-actions">
                            <button
                              onClick={() => handleEdit(contact)}
                              className="action-btn edit-btn"
                              title="Edit record"
                            >
                              <span>✏️</span>
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(contact.id)}
                              className="action-btn delete-btn"
                              title="Delete record"
                            >
                              <span>🗑️</span>
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="pagination-container">
                <div className="pagination">
                  {renderPaginationButtons()}
                </div>
                <div className="pagination-info">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-contacts">
            <div className="no-data-icon">📭</div>
            <h3>No records found</h3>
            <p>Try adjusting your filters or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;