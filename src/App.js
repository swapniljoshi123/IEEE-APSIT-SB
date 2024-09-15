import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import EventModal from './components/EventModal';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

  const openEventModal = () => setShowEventModal(true);
  const closeEventModal = () => setShowEventModal(false);

  // Add 'blurred' class if any modal is open
  const isBlurred = showLoginModal || showSignUpModal || showEventModal;

  return (
    <Router>
      {/* Apply 'blurred' class conditionally based on modal state */}
      <div className={`App ${isBlurred ? 'blurred' : ''}`}>
        <Header />
        <Navbar
          openLoginModal={openLoginModal}
          openSignUpModal={openSignUpModal}
          openEventModal={openEventModal}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>

      {/* Modals */}
      <LoginModal show={showLoginModal} onClose={closeLoginModal} />
      <SignUpModal show={showSignUpModal} onClose={closeSignUpModal} />
      <EventModal show={showEventModal} onClose={closeEventModal} />
    </Router>
  );
}

export default App;
