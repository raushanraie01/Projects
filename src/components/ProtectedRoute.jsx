// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/Usercontext.js";

export default function ProtectedRoute({ children }) {
  const { userData, loading } = useUser();

  // While still checking user
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  // If not logged in → redirect to login
  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise → render the page
  return children;
}
