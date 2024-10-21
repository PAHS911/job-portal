import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./compoents/application/Dashboard"; // Fixed path
import Login from "./compoents/logsign/Login"; // Fixed path
import Signup from "./compoents/logsign/Signup"; // Fixed path
import AboutCompany from "./compoents/employer/AboutCompany"; // Add the new route
import PostJob from "./compoents/employer/PostJob"; // Add the new route
import MessageCandidate from "./compoents/employer/MessageCandidate"; // Add the new route
import SearchCandidate from "./compoents/employer/SearchCandidate"; // Add the new route

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/message-candidate" element={<MessageCandidate />} />
        <Route path="/search-candidate" element={<SearchCandidate />} />
        {/* Redirect to login page by default */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
