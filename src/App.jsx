// 


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import SignupPage from "./pages/SignUp.jsx";
import VolunteerHome from "./pages/VolunteerHome.jsx";
import Landing from "./pages/Landing.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Landing />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Volunteer Home Page */}
        <Route path="/volunteer/home" element={<VolunteerHome />} />
      </Routes>
    </Router>
  );
}

export default App;
