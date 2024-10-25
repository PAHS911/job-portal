import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./compoents/application/Dashboard";
import Login from "./compoents/logsign/Login";
import Signup from "./compoents/logsign/Signup";
import AboutCompany from "./compoents/employer/AboutCompany";
import PostJob from "./compoents/employer/PostJob";
import MessageCandidate from "./compoents/employer/MessageCandidate";
import SearchCandidate from "./compoents/employer/SearchCandidate";

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
