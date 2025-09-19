import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth,db } from "../firebase-config.js";
import { signOut } from "firebase/auth";
import { useUser } from "../context/Usercontext.jsx"; // ✅ use our context

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  // ✅ Get userData + loading directly from context
  const { userData, loading } = useUser();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white shadow-md z-50">
        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
          <img src="/img/left2.png" alt="aKinder Logo" className="h-10" />
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block mx-6 px-4 py-1 w-full md:w-72 rounded-full text-gray-800 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Link to="/volunteer/home" className="hover:underline">Home</Link>
          <Link to="/volunteer/needs" className="hover:underline">Needs</Link>
          <Link to="/volunteer/chat" className="hover:underline">Chat</Link>
          <Link to="/volunteer/notifications" className="hover:underline">Notifications</Link>
          <button onClick={handleLogout} className="hover:underline">Logout</button>
        </div>
      </nav>

      {/* Profile Body */}
      <div className="flex-1 pt-24 w-[90%] mx-auto">
        {/* Profile Header Section */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start md:space-x-6 hover:shadow-lg transition-all duration-300">
          <img
            src={userData?.photoURL || "/img/userImage.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">{userData?.name || "User Name"}</h2>
            <p className="text-gray-600">{userData?.followers || 0} Followers</p>
            <p className="text-gray-500">{userData?.bio || "No bio added yet"}</p>
          </div>
        </div>

        {/* Sticky Tabs */}
        <div className="mt-6 border-b bg-white shadow-sm rounded-t-lg sticky top-16 z-40">
          <div className="flex space-x-6 px-6">
            {["events", "about", "needs", "agencies"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-4 bg-white shadow-md rounded-b-lg p-6 min-h-[300px]">
          {activeTab === "about" && (
            <div>
              <h3 className="font-bold mb-2">About</h3>
              <p><strong>Email:</strong> {auth.currentUser?.email}</p>
              <p><strong>Phone:</strong> {userData?.phone || "N/A"}</p>
              <p><strong>Location:</strong> {userData?.location || "N/A"}</p>
              <p><strong>Address:</strong> {userData?.address || "N/A"}</p>
            </div>
          )}

          {activeTab === "events" && (
            <div>
              <h3 className="font-bold mb-2">Events</h3>
              <p>No events yet.</p>
            </div>
          )}

          {activeTab === "needs" && (
            <div>
              <h3 className="font-bold mb-2">Needs</h3>
              <p>No needs added yet.</p>
            </div>
          )}

          {activeTab === "agencies" && (
            <div>
              <h3 className="font-bold mb-2">Agencies</h3>
              <p>No agencies linked yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
