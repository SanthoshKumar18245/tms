import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Side from "./components/Side/Side";
import Header from "./components/Header/Header";
// Example component for /analytics route

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Side />
        <Routes>
          <Route path="/analytics" />
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
