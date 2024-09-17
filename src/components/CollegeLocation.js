import { LocationMarkerIcon } from "@heroicons/react/solid"; // Corrected icon

const CollegeLocation = () => {
  return (
    <div className="college-location bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-16 px-6 md:px-10 text-center">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-8">Student Branch Address:</h2>
      
      <div className="flex justify-center items-center  mb-3 max-w-1xl mx-auto">
        <LocationMarkerIcon className="w-20 h-10 text-red-500" /> {/* Updated Icon */}
        <p className="text-xl font-medium text-gray-700 leading-relaxed">
          A.P. Shah Institute Of Technology, Ghodbunder Road, Kasarvadavli, Thane, MH, India
        </p>
      </div>

      <div className="map mt-10 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.3293740512254!2d72.96466420920662!3d19.268037545843686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bba2e15f6c7b%3A0x20e1357d640bef7e!2sA.%20P.%20Shah%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1726558259453!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          title="College Location"
          className="border-4 border-blue-200 rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300 md:w-3/4 lg:w-2/3"
        ></iframe>
      </div>
    </div>
  );
};

export default CollegeLocation;
