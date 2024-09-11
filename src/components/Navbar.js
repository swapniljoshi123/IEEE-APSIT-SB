import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSignInAlt, FaUserPlus, FaCalendarAlt } from 'react-icons/fa'; // Importing icons

const Navbar = ({ openLoginModal, openSignUpModal, openEventModal }) => {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-800 to-blue-400 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold tracking-wide text-white">
            APSIT-SB
          </Link>
          <div className="flex space-x-6 items-center">
            <Link 
              to="/" 
              className="flex items-center hover:text-gray-200 text-lg font-medium transition duration-300 ease-in-out relative group"
            >
              <FaHome className="mr-2" />
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about-us" 
              className="flex items-center hover:text-gray-200 text-lg font-medium transition duration-300 ease-in-out relative group"
            >
              <FaInfoCircle className="mr-2" />
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={openLoginModal}
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <FaSignInAlt className="mr-2" /> Login
            </button>
            <button
              onClick={openSignUpModal}
              className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <FaUserPlus className="mr-2" /> Sign Up
            </button>
            <button
              onClick={openEventModal}
              className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <FaCalendarAlt className="mr-2" /> Event Registration
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
