import React from 'react';
// import headerImage from './assets/header-image.jpg'; // Import your local image

const Header = () => {
  return (
    <header className="relative bg-black text-white text-center py-12 shadow-lg overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <img 
          src={headerImage} // Use the imported local image here
          alt="Header Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div> */}
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-blue-900 via-blue-100 to-blue-900 text-transparent bg-clip-text drop-shadow-lg">
          IEEE APSIT STUDENT BRANCH
        </h1>
        <p className="text-xl font-medium mt-4 tracking-wider text-gray-300 drop-shadow-md">
          Advancing Technology for Society
        </p>
      </div>
    </header>
  );
};

export default Header;
