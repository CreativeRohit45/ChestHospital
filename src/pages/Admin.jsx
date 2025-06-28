import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import './Admin.scss';

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingContact, setEditingContact] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const recordsPerPage = 10;
  const API_URL = 'https://hospital-app-latest.onrender.com';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Rohit123') {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  const fetchAllContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/admin/getallbookedslots`);
      setContacts(response.data);
      setFilteredContacts(response.data);
      setSelectedDate('');
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching all contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchAllContacts();
    }
  }, [isAuthorized]);

  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setCurrentPage(1);

    if (date === '') {
      setFilteredContacts(contacts);
    } else {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/admin/booked-slots/${date}`);
        setFilteredContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts for date:', error);
        setFilteredContacts([]);
      } finally {
        setLoading(false);
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
    setLoading(true);
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
      alert('Contact updated successfully!');
    } catch (error) {
      console.error('Error updating contact:', error);
      alert('Failed to update contact.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
    setEditForm({});
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/api/admin/delete-booked-slot/${id}`);
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);

      const updatedFiltered = filteredContacts.filter(contact => contact.id !== id);
      setFilteredContacts(updatedFiltered);
      
      setDeleteConfirm(null);
      alert('Contact deleted successfully!');
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Failed to delete contact.');
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredContacts.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredContacts.length / recordsPerPage);

  if (!isAuthorized) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-wrapper">
          <div className="admin-login-card">
            <div className="admin-header">
              <div className="admin-icon">
                <span>🔐</span>
              </div>
              <h2>Admin Access</h2>
              <p>Enter your credentials to access the admin panel</p>
            </div>

            <form onSubmit={handleLogin} className="admin-login-form">
              {error && (
                <div className="error-message">
                  <span>⚠️</span>
                  {error}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                />
              </div>

              <button type="submit" className="admin-login-btn">
                <span>🚀</span>
                Access Admin Panel
              </button>
            </form>

            <div className="admin-footer">
              <p>Authorized personnel only</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <Navbar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-header">
          <div className="container">
            <div className="dashboard-title">
              <h1>
                <span>📊</span>
                Admin Dashboard
              </h1>
              <p>Manage appointments and patient data</p>
            </div>
            <button 
              onClick={() => setIsAuthorized(false)} 
              className="logout-btn"
            >
              <span>🚪</span>
              Logout
            </button>
          </div>
        </div>

        <div className="admin-content">
          <div className="container">
            <div className="contacts-management">
              <div className="management-header">
                <h2>
                  <span>📋</span>
                  Appointment Management
                </h2>
                <div className="stats-overview">
                  <div className="stat-card">
                    <h3>{contacts.length}</h3>
                    <p>Total Appointments</p>
                  </div>
                  <div className="stat-card">
                    <h3>{filteredContacts.length}</h3>
                    <p>Filtered Results</p>
                  </div>
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-controls">
                  <div className="filter-group">
                    <label htmlFor="date">Filter by Date:</label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      className="date-filter"
                    />
                  </div>
                  <div className="filter-actions">
                    <button 
                      onClick={() => handleDateChange({ target: { value: '' } })}
                      className="clear-btn"
                    >
                      Clear Filter
                    </button>
                    <button 
                      onClick={fetchAllContacts}
                      className="refresh-btn"
                      disabled={loading}
                    >
                      {loading ? '🔄' : '🔄'} Refresh
                    </button>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <p>Loading appointments...</p>
                </div>
              ) : currentRecords.length > 0 ? (
                <>
                  <div className="contacts-table-wrapper">
                    <table className="contacts-table">
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
                          <tr key={contact.id || index}>
                            <td>{indexOfFirstRecord + index + 1}</td>
                            <td>
                              {editingContact === contact.id ? (
                                <input
                                  type="text"
                                  value={editForm.name}
                                  onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                  className="edit-input"
                                />
                              ) : (
                                contact.name
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
                                contact.mobile
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
                                contact.appointmentDate
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
                                contact.appointmentTime
                              )}
                            </td>
                            <td>
                              {editingContact === contact.id ? (
                                <textarea
                                  value={editForm.message}
                                  onChange={(e) => setEditForm({...editForm, message: e.target.value})}
                                  className="edit-textarea"
                                  rows="2"
                                />
                              ) : (
                                <div className="message-cell">
                                  {contact.message || 'No message'}
                                </div>
                              )}
                            </td>
                            <td>
                              <div className="action-buttons">
                                {editingContact === contact.id ? (
                                  <>
                                    <button
                                      onClick={() => handleSaveEdit(contact.id)}
                                      className="save-btn"
                                      disabled={loading}
                                    >
                                      ✅
                                    </button>
                                    <button
                                      onClick={handleCancelEdit}
                                      className="cancel-btn"
                                    >
                                      ❌
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      onClick={() => handleEdit(contact)}
                                      className="edit-btn"
                                    >
                                      ✏️
                                    </button>
                                    <button
                                      onClick={() => setDeleteConfirm(contact.id)}
                                      className="delete-btn"
                                    >
                                      🗑️
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {totalPages > 1 && (
                    <div className="pagination">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="pagination-btn"
                      >
                        ← Previous
                      </button>
                      
                      <div className="pagination-info">
                        <span>Page {currentPage} of {totalPages}</span>
                        <span>({filteredContacts.length} total records)</span>
                      </div>
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="pagination-btn"
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="no-records">
                  <div className="no-records-icon">📭</div>
                  <h3>No appointments found</h3>
                  <p>There are no appointments matching your current filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>⚠️ Confirm Deletion</h3>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this appointment? This action cannot be undone.</p>
            </div>
            <div className="modal-actions">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="cancel-modal-btn"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="confirm-delete-btn"
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Admin;