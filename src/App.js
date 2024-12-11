import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admission from "./Pages/Admission";
import Details from "./Pages/Details";
import Header from "./components/Header";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";
import Dashboard from "./Pages/Dashbaord";

function App() {
  return (
    <Router>
      <Header />
      <br></br>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
