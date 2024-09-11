import React from 'react';
import { FaLaptopCode, FaUsers, FaLightbulb } from 'react-icons/fa'; // Importing icons


// Import images
import img1 from '../assets/images/IEEE-APSIT-LOGO.png';
import img2 from '../assets/images/IEEE-APSIT-LOGO.png';
import img3 from '../assets/images/IEEE-APSIT-LOGO.png';
// Import all 22 images
import img22 from '../assets/images/IEEE-APSIT-LOGO.png';

// Additional Images for Computer Society and Women in Engineering
import compSocImage from '../assets/images/IEEE_CS.jpg';
import womenEngImage from '../assets/images/IEEE_WIE.png';

// Array of imported images
const imageUrls = [
  img1,
  img2,
  img3,
  // Add all 22 imported images here
  img22
];

const Body = () => {
  return (
    <main className="container mx-auto my-8 px-4">
      <section id="aboutus" className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-extrabold text-center text-blue-700">About IEEE APSIT Student Branch</h2>
        <p className="mt-6 text-lg text-gray-700 text-justify leading-relaxed">
          IEEE APSIT Student Branch is a vibrant community aimed at fostering technological innovation and excellence among students. As part of the prestigious IEEE organization, we are committed to providing a platform where students can collaborate, share ideas, and work towards a common goal of advancing technology for the benefit of humanity.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-around mt-8">
          <div className="text-center mb-8 md:mb-0">
            <FaLaptopCode className="text-blue-700 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-600">Innovation & Technology</h3>
            <p className="mt-2 text-gray-600">
              Our branch provides opportunities to explore cutting-edge technologies, participate in coding competitions, and develop real-world projects.
            </p>
          </div>

          <div className="text-center mb-8 md:mb-0">
            <FaUsers className="text-blue-700 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-600">Community & Networking</h3>
            <p className="mt-2 text-gray-600">
              We encourage collaboration, where students network with peers, industry experts, and thought leaders through various events and conferences.
            </p>
          </div>

          <div className="text-center">
            <FaLightbulb className="text-blue-700 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-600">Innovative Thinking</h3>
            <p className="mt-2 text-gray-600">
              IEEE APSIT-SB promotes a culture of innovation by hosting brainstorming sessions, hackathons, and seminars to ignite new ideas.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg text-gray-700 text-justify leading-relaxed">
          Our mission is to create an environment where students are encouraged to develop their technical and professional skills. Through our various initiatives, we aim to shape the next generation of engineers and leaders who will drive progress and bring solutions to global challenges.
        </p>
      </section>

      {/* Computer Society and Women in Engineering Section */}
      <section id="initiatives" className="mt-12 bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">Our Initiatives</h2>
  
  <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
    {/* Computer Society Section */}
    <div className="lg:w-1/2 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img src={compSocImage} alt="Computer Society" className="w-full h-64 object-cover rounded-lg mb-4 shadow-md transition-transform transform hover:scale-105" />
      <h3 className="text-2xl font-semibold text-teal-600 mb-2">Computer Society</h3>
      <p className="text-gray-600">
        Our Computer Society focuses on advancing computing technologies and providing resources for students interested in computer science. We host workshops, seminars, and projects that help students build skills and network with professionals in the field.
      </p>
    </div>
    
    {/* Women in Engineering Section */}
    <div className="lg:w-1/2 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl mt-8 lg:mt-0">
      <img src={womenEngImage} alt="Women in Engineering" className="w-full h-64 object-cover rounded-lg mb-4 shadow-md transition-transform transform hover:scale-105" />
      <h3 className="text-2xl font-semibold text-teal-600 mb-2">Women in Engineering</h3>
      <p className="text-gray-600">
        We are committed to supporting and empowering women in engineering. Our initiatives include mentorship programs, workshops, and networking events designed to inspire and support women in their engineering careers.
      </p>
    </div>
  </div>
</section>



      {/* Carousel Section */}
      {/* <section id="carousel" className="mt-12">
        <h2 className="text-3xl font-bold text-center text-blue-700">Our Gallery</h2>
        <div className="mt-6">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
          >
            {imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <img src={url} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
    </main>
  );
};

export default Body;
