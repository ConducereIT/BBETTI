import React from "react";

// Style
import "./App.css";

// Views
import Home from "./views/Home.view";
import Concurenti from "./views/ Concurenti.view";
import Contact from "./views/Contact.view";
import Login from "./views/Login.view";
import Register from "./views/Register.view";
import Otp from "./views/Otp.view";

//Console
import Admin from "./views/Console/Admin.view";
import Developer from "./views/Console/Developer.view";

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

          <Route path="/concurenti" element={<Concurenti />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/admin-console" element={<Admin />} />
          <Route path="/developer-console" element={<Developer />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
