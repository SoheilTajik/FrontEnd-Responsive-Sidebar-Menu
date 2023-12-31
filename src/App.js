import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Revenue from "./components/Revenue/Revenue";
import Notification from "./components/Notification/Notification";
import Analytics from "./components/Analytics/Analytics";
import Likes from "./components/Likes/Likes";
import Wallets from "./components/Wallets/Wallets";

function App() {
  // State to control dark mode
  const [darkMode, setDarkMode] = useState(false);

  // State to control whether the sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(true); // Set to true initially, or false if you want it closed by default

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Define CSS class for the App element
  const appClassName = `App ${darkMode ? "dark" : ""} ${
    sidebarOpen ? "sidebar-open" : "sidebar-closed"
  }`;

  return (
    <Router>
      <div className={appClassName}>
        <SideBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          sidebarClosed={sidebarOpen}
          handleSidebarToggle={toggleSidebar}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/wallets" element={<Wallets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
