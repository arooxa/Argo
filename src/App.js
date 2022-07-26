import Manage from "./pages/Manage";
import Landing from "./pages/Landing";
import Boards from "./pages/Boards";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Inbox from "./pages/Inbox";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      
      <Routes>
        <Route path="/dash" element={<Manage />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </Router>
  );
}

export default App;
