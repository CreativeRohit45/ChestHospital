import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
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
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [fetchingSlots, setFetchingSlots] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const recordsPerPage = 10;
  const API_URL = 'https://hospital-app-latest.onrender.com';

  // Clinic schedule - same as in ContactForm
  const clinicSchedule = useMemo(() => ({
    0: [], // Sunday - Closed
    1: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Monday
    2: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Tuesday
    3: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Wednesday
    4: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Thursday
    5: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], // Friday
    6: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"] // Saturday
  }), []);

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

  // Fetch available time slots when editing appointment date
  const fetchAvailableSlots = async (appointmentDate) => {
    if (!appointmentDate) {
      setAvailableTimes([]);
      setBookedSlots([]);
      return;
    }
    
    setFetchingSlots(true);
    try {
      const response = await axios.get(`${API_URL}/api/booked-slots/${appointmentDate}`);
      setBookedSlots(response.data.bookedSlots || []);
      
      const selectedDate = new Date(appointmentDate);
      const dayOfWeek = selectedDate.getDay();
      
      const allSlots = clinicSchedule[dayOfWeek] || [];
      const booked = response.data.bookedSlots || [];

      const available = allSlots.filter(slot => !booked.includes(slot));
      setAvailableTimes(available);
      
    } catch (err) {
      console.error('Error fetching booked slots:', err);
      setAvailableTimes([]);
    } finally {
      setFetchingSlots(false);
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
    
    // Fetch available slots for the current appointment date
    fetchAvailableSlots(contact.appointmentDate);
  };

  const handleEditFormChange = (field, value) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));

    // If date changes, fetch new available slots and reset time
    if (field === 'appointmentDate') {
      setEditForm(prev => ({
        ...prev,
        appointmentTime: ''
      }));
      fetchAvailableSlots(value);
    }
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
      setAvailableTimes([]);
      setBookedSlots([]);
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
    setAvailableTimes([]);
    setBookedSlots([]);
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

  const exportToPDF = () => {
    setExportLoading(true);
    
    try {
      const doc = new jsPDF();
      
      // Add clinic header
      doc.setFontSize(20);
      doc.setTextColor(28, 102, 255);
      doc.text('Dr. Pandharkar Chest Clinic', 20, 20);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text('Appointment Report', 20, 30);
      
      // Add generation date
      const currentDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      doc.text(`Generated on: ${currentDate}`, 20, 40);
      
      // Add filter info
      if (selectedDate) {
        doc.text(`Filtered by Date: ${selectedDate}`, 20, 50);
      } else {
        doc.text('All Appointments', 20, 50);
      }
      
      // Prepare table data
      const tableData = filteredContacts.map((contact, index) => [
        index + 1,
        contact.name || 'N/A',
        contact.mobile || 'N/A',
        contact.appointmentDate || 'N/A',
        contact.appointmentTime || 'N/A',
        contact.message || 'No message'
      ]);
      
      // Add table
      doc.autoTable({
        head: [['Sr.No', 'Name', 'Mobile', 'Date', 'Time', 'Message']],
        body: tableData,
        startY: 60,
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [28, 102, 255],
          textColor: [255, 255, 255],
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        columnStyles: {
          0: { cellWidth: 15 }, // Sr.No
          1: { cellWidth: 30 }, // Name
          2: { cellWidth: 25 }, // Mobile
          3: { cellWidth: 25 }, // Date
          4: { cellWidth: 20 }, // Time
          5: { cellWidth: 'auto' } // Message
        },
        margin: { top: 60, left: 20, right: 20 },
        didDrawPage: function (data) {
          // Add footer
          const pageCount = doc.internal.getNumberOfPages();
          const pageSize = doc.internal.pageSize;
          const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
          
          doc.setFontSize(8);
          doc.setTextColor(128, 128, 128);
          doc.text(
            `Page ${data.pageNumber} of ${pageCount}`,
            data.settings.margin.left,
            pageHeight - 10
          );
          
          doc.text(
            'Dr. Pandharkar Chest Clinic - Confidential',
            pageSize.width - 70,
            pageHeight - 10
          );
        }
      });
      
      // Add summary at the end
      const finalY = doc.lastAutoTable.finalY + 20;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(`Total Appointments: ${filteredContacts.length}`, 20, finalY);
      
      // Generate filename
      const filename = selectedDate 
        ? `appointments_${selectedDate}.pdf`
        : `all_appointments_${new Date().toISOString().split('T')[0]}.pdf`;
      
      // Save the PDF
      doc.save(filename);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setExportLoading(false);
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
                    <button 
                      onClick={exportToPDF}
                      className="export-btn"
                      disabled={exportLoading || filteredContacts.length === 0}
                    >
                      {exportLoading ? '📄 Generating...' : '📄 Export PDF'}
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
                                  onChange={(e) => handleEditFormChange('name', e.target.value)}
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
                                  onChange={(e) => handleEditFormChange('mobile', e.target.value)}
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
                                  onChange={(e) => handleEditFormChange('appointmentDate', e.target.value)}
                                  className="edit-input"
                                  min={new Date().toISOString().split('T')[0]}
                                />
                              ) : (
                                contact.appointmentDate
                              )}
                            </td>
                            <td>
                              {editingContact === contact.id ? (
                                <select
                                  value={editForm.appointmentTime}
                                  onChange={(e) => handleEditFormChange('appointmentTime', e.target.value)}
                                  className="edit-select"
                                  disabled={fetchingSlots || !editForm.appointmentDate}
                                >
                                  <option value="">
                                    {fetchingSlots ? 'Loading...' : 'Select Time'}
                                  </option>
                                  {availableTimes.length > 0 ? (
                                    availableTimes.map((time, timeIndex) => (
                                      <option 
                                        key={timeIndex} 
                                        value={time}
                                        disabled={bookedSlots.includes(time)}
                                      >
                                        {time} {bookedSlots.includes(time) ? '(Booked)' : ''}
                                      </option>
                                    ))
                                  ) : (
                                    editForm.appointmentDate && !fetchingSlots && 
                                    <option disabled>No slots available</option>
                                  )}
                                  {/* Include current appointment time if it's not in available slots */}
                                  {editForm.appointmentTime && 
                                   !availableTimes.includes(editForm.appointmentTime) && 
                                   !bookedSlots.includes(editForm.appointmentTime) && (
                                    <option value={editForm.appointmentTime}>
                                      {editForm.appointmentTime} (Current)
                                    </option>
                                  )}
                                </select>
                              ) : (
                                contact.appointmentTime
                              )}
                            </td>
                            <td>
                              {editingContact === contact.id ? (
                                <textarea
                                  value={editForm.message}
                                  onChange={(e) => handleEditFormChange('message', e.target.value)}
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
                                      disabled={loading || fetchingSlots}
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