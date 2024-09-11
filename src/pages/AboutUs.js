import React from 'react';
import { FaCalendar, FaUser, FaStar, FaBullseye, FaLightbulb } from 'react-icons/fa'; // Importing icons

const AboutUs = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">About Us</h2>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Foundation</h3>
          <div className="flex items-center mb-4">
            <FaCalendar className="text-teal-600 text-2xl mr-4" />
            <p className="text-lg text-gray-700">Founded in 2020 by a group of dedicated technologists with a vision to advance technological innovation and excellence.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Leadership</h3>
          <div className="flex items-center mb-4">
            <FaUser className="text-teal-600 text-2xl mr-4" />
            <p className="text-lg text-gray-700">Under the leadership of Dr. Jane Doe, our team has worked tirelessly to foster a collaborative and innovative environment.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Goals</h3>
          <div className="flex items-center mb-4">
            <FaStar className="text-teal-600 text-2xl mr-4" />
            <p className="text-lg text-gray-700">Our goals include promoting cutting-edge technologies, providing resources for skill development, and creating a network of professionals and enthusiasts.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Vision</h3>
          <div className="flex items-center mb-4">
            <FaLightbulb className="text-teal-600 text-2xl mr-4" />
            <p className="text-lg text-gray-700">Our vision is to become a leading hub for technological innovation, inspiring the next generation of engineers and tech leaders.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Agenda</h3>
          <div className="flex items-center mb-4">
            <FaBullseye className="text-teal-600 text-2xl mr-4" />
            <p className="text-lg text-gray-700">Our agenda focuses on organizing workshops, hosting seminars, and fostering a community of like-minded individuals who are passionate about technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
