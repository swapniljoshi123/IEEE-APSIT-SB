import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <div className="container mx-auto">
        {/* IEEE APSIT-SB Section */}
        <p className="text-lg font-bold mb-4">
          &copy; 2024 IEEE APSIT-SB. All rights reserved.
        </p>

        {/* Developer Section */}
        <div className="text-md mb-4">
          <p>Developed & Managed by:</p>
          <p className="font-semibold">Ayush Panigrahi & Swapnil Joshi</p>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/swapniljoshi123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/ayush" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/ayush" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* APSIT Address or any other info can go here */}
        <p className="text-sm text-gray-400">
          APSIT-Thane,India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
