
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function Portfolio() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

function AdminArea() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("portfolioAdminDemo") === "true"
  );

  function handleLogout() {
    sessionStorage.removeItem("portfolioAdminDemo");
    setIsLoggedIn(false);
    navigate("/admin", { replace: true });
  }

  if (!isLoggedIn) {
    return (
      <AdminLogin
        onLogin={() => setIsLoggedIn(true)}
      />
    );
  }

  return <AdminDashboard onLogout={handleLogout} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path="/admin" element={<AdminArea />} />

        <Route
          path="/admin/dashboard"
          element={<AdminArea />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
