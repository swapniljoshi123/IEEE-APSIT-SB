import React, { useState } from 'react';
import { UserIcon, MailIcon, LockClosedIcon, PhoneIcon, CalendarIcon , UserCircleIcon} from '@heroicons/react/solid';
const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    phoneNumber: '',
    guardianNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md px-8 py-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div className="relative">
            <UserIcon className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Username"
              required
            />
          </div>

          {/* Age Field */}
          <div className="relative">
            <CalendarIcon className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Age"
              required
            />
          </div>

          {/* Gender Field */}
          <div className="relative">
            <UserCircleIcon className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition appearance-none"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Email Field */}
          <div className="relative">
            <MailIcon className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <LockClosedIcon className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Password"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="relative">
            <PhoneIcon className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Guardian Number Field */}
          <div className="relative">
            <PhoneIcon className="absolute w-6 h-6 text-gray-500 left-3 top-3" />
            <input
              type="tel"
              name="guardianNumber"
              value={formData.guardianNumber}
              onChange={handleChange}
              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              placeholder="Parent/Guardian Phone Number"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
