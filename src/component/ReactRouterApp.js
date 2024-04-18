import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "../forRouter/Contact";
import About from "../forRouter/About";
import Home from "../forRouter/Home";

const ReactRouterApp = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterApp;
