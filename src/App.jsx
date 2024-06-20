import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Side from "./components/Side/Side";
import Header from "./components/Header/Header";
import Ticket from "./components/Ticket/Ticket";
import DashBoard from "./components/DashBoard/DashBoard";
import Analytics from "./components/Analytics/Analytics";
// Import other components for routes

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content flex">
          <Side />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/analytics" element={<Analytics />} />
              {/* Define other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
