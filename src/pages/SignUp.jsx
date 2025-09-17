import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering user:", formData);
    // TODO: Add API integration
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img
          src="/img/background.avif"
          alt="Background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div> {/* Overlay */}
      </div>

      {/* Form Container */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[95vh] p-6 z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register as a Volunteer
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg w-full"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              value={formData.email}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg w-full"
            />
            <PhoneInput
              country={'us'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="w-full px-4 py-2 rounded-lg"
              containerClass="w-full"
            />
          </div>

          {/* Age */}
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg w-full"
          >
            <option value="">Age*</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-50">36-50</option>
            <option value="50+">50+</option>
          </select>

          {/* Address Fields */}
          <input
            type="text"
            name="address1"
            placeholder="Address*"
            value={formData.address1}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg w-full"
          />
          <input
            type="text"
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg w-full"
          />

          {/* City, State, Zip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City*"
              value={formData.city}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg w-full"
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg w-full"
            >
              <option value="">State*</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
            </select> 
            <input
              type="text"
              name="zip"
              placeholder="Zip code*"
              value={formData.zip}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg w-full"
            />
          </div>

          {/* Password Fields */}
          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg w-full"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password*"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg w-full"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-lg w-full hover:bg-purple-700 font-semibold"
          >
            SIGNUP
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
