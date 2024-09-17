import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Sign from './pages/Sign';
import Login from './components/LoginModal';
import SignUp from './pages/SignUp';
import Modal from './components/Modal';
import EventModal from './components/EventModal';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import MovingText from './components/MovingText';
import CollegeLocation from './components/CollegeLocation';

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

  return (
    <Router>
      <div className={`App ${showLoginModal || showSignUpModal || showEventModal ? 'blurred' : ''}`}>
        <Header />
        <Navbar
          openLoginModal={openLoginModal}
          openSignUpModal={openSignUpModal}
          openEventModal={openEventModal}
        />
        <div>
      
      <MovingText />
      {/* Rest of your page */}
    </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/sign" element={<Sign />} /> */}

          {/* <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
        <CollegeLocation />
        <Footer />
      </div>
      <LoginModal show={showLoginModal} onClose={closeLoginModal} />
      <SignUpModal show={showSignUpModal} onClose={closeSignUpModal} />
      <EventModal show={showEventModal} onClose={closeEventModal} />
    </Router>
  );
}

export default App;
