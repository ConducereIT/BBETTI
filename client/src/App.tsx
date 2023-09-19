import React from "react";

// Style
import "./App.css";

// Views
import Home from "./views/Home.view";

// Import
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/concurenti" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/register" element={<Home />} />
          <Route path="/otp" element={<Home />} />
          <Route path="/admin-console" element={<Home />} />
          <Route path="/developer-console" element={<Home />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
