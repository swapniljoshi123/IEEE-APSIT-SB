// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-lg font-bold">IEEE Sidebar</h2>
      </div>
      <ul className="mt-4">
        <li className="p-2 hover:bg-gray-700">
          <Link to="/events">Events</Link>
        </li>
        <li className="p-2 hover:bg-gray-700">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="p-2 hover:bg-gray-700">
          <Link to="/membership">Membership</Link>
        </li>
        <li className="p-2 hover:bg-gray-700">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="p-2 hover:bg-gray-700">
          <Link to="/faq">FAQ</Link>
        </li>
        {/* Add more options as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;