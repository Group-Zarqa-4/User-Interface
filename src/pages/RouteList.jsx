import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
function RouteList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Home />} />
        <Route path="/vidoes" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default RouteList;
