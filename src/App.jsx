import './App.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Admin from './pages/Admin';
import Contactus from './pages/Contact/Contactus';
import ContactList from './components/Table/ContactList';
import Treatments from './pages/Treatments';
import ScrollToTop from './ScrollToTop';
import ScrollToTopArrow from './components/ScrollToTop/ScrollToTopArrow';

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopArrow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/singleservice" element={<Services />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/contactList" element={<ContactList />} />
        <Route path="/api/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;