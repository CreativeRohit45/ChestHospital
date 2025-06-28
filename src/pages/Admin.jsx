import { useState } from 'react';
import ContactList from '../components/Table/ContactList';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import './Admin.scss';

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
    <>
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
        <ContactList />
      </div>
      <Footer />
    </>
  );
};

export default Admin;