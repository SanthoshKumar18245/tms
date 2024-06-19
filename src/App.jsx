import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Side from "./components/Side/Side";
import Header from "./components/Header/Header";
import Ticket from "./components/Ticket/Ticket";
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
              <Route path="/analytics" />
              {/* Define other routes here */}
            </Routes>
            <Ticket />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
