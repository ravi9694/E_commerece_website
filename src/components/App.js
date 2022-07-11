import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignIn from "./SignUp";
// import { render } from "@testing-library/react";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<><Announcement /><Carousel/></>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/SignUp" element={<SignIn/>} />
          <Route exact path="/Cart" element={<><h1>This is a page for saved items</h1></>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
