import React, { useState } from 'react';

const EventModal = ({ show, onClose }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    eventName: '',
    speakers: '',
    domain: '',
    date: '',
    time: '',
    venue: '',
    email: '' // Added email field
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to the backend or process it
    console.log('Form data submitted:', formData);

    // Here you'd send a request to your backend (using the email for SendGrid)
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        subject: `Registration Confirmation for ${formData.eventName}`,
        text: `Thank you for registering for ${formData.eventName}. 
               Here are the event details:\n
               Speakers: ${formData.speakers}\n
               Domain: ${formData.domain}\n
               Date: ${formData.date}\n
               Time: ${formData.time}\n
               Venue: ${formData.venue}`
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Email sent:', data);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Close the modal after submission
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg relative w-full max-w-md mx-4">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Event Name"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Speakers</label>
            <input
              type="text"
              name="speakers"
              value={formData.speakers}
              onChange={handleChange}
              placeholder="Speakers"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Domain</label>
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              placeholder="Domain"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Venue"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label> {/* New email input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
