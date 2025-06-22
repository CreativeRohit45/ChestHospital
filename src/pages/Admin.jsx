import { useState } from 'react';
import ContactList from '../components/Table/ContactList';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleLogin = () => {
    const password = prompt('Enter admin password:');
    if (password === 'Rohit123') {
      setIsAuthorized(true);
    } else {
      alert('Unauthorized');
    }
  };

  if (!isAuthorized) {
    return (
      <div>
        <h2>Admin Login</h2>
        <button onClick={handleLogin}>Enter Admin Area</button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ContactList />
      <Footer />
    </>
  );
};

export default Admin;
