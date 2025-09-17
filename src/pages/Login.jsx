import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config.js";


export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in:", formData);
    // TODO: Add login API integration
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Login successful:", user);
        navigate('/volunteer/home'); // Redirect to volunteer home page
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed: " + error.message);
        // setError(error.message);
      });
  };

  return (
    <div className="flex h-screen">
      {/* Left Images */}
  <div className="w-1/2 h-screen p-2">
    <img
      src="\img\loginPage.png"
      alt="Help"
      className="object-cover w-full h-full rounded-lg"
    />
  </div>


      {/* Right Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-500 to-teal-500">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-96">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://akindervolunteer.com/img/akinderLogo.b406f561.svg"
              alt="Logo"
              className="w-10 mr-2"
            />
            <h1 className="text-2xl font-bold text-gray-700">
              aKinder<span className="text-green-600">Volunteer</span>
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}  className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
            >
              LOGIN
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Register Buttons */}
          <div className="flex flex-col space-y-3">
            <Link
              to="/signup"
              className="w-full block text-center py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
            >
              REGISTER AS A VOLUNTEER
            </Link>
            <Link
              to="/signup"
              className="w-full block text-center py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
            >
              JOIN AS AN AGENCY
            </Link>
            <Link
              to="/signup"
              className="w-full block text-center py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
            >
              JOIN AS BUSINESS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
