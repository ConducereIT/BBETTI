import React from "react";

// Style
import "./App.css";

// Views
import Home from "./views/Home.view";
import Concurenti from "./views/ Concurenti.view";
import Sponsori from "./views/Sponsori.view";
import Login from "./views/Login.view";
import Register from "./views/Register.view";
import Otp from "./views/Otp.view";
import ResetPassword from "./views/ResetPassword.view";

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
import ResetPass from "./views/ResetPassword.view";
import { PreloaderProvider } from "./views/components/General/PreloaderProvider.component";
import Preloader from "./views/components/General/Preloader.component";

const App = () => {
  return (
    <>
      <PreloaderProvider>
        <Preloader />
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/concurenti" element={<Concurenti />} />
            <Route path="/sponsori" element={<Sponsori />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/admin-console" element={<Admin />} />
            <Route path="/developer-console" element={<Developer />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </PreloaderProvider>
    </>
  );
};

export default App;
