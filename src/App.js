import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Features from "./pages/features";
import Pircing from "./pages/pricing";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pircing" element={<Pircing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
