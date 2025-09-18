
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import SignupPage from "./pages/SignUp.jsx";
import VolunteerHome from "./pages/VolunteerHome.jsx";
import Landing from "./pages/Landing.jsx";
import UnderMaintenance from "./pages/UnderMaintenance.jsx"; // 👈 create this page

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

        {/* Volunteer Routes */}
        <Route path="/volunteer">
          {/* Default volunteer route → Home */}
          <Route index element={<VolunteerHome />} />
          <Route path="home" element={<VolunteerHome />} />

          {/* If no matching volunteer subroute → Under Maintenance */}
          <Route path="*" element={<UnderMaintenance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
