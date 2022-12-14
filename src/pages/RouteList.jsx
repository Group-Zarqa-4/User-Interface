import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Premium from "./Premium";
import Profile from "./Profile/Profile";
import Reviews from "./Reviews";
import Stores from "./Stores";
import Story from "./Story";

function RouteList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/vidoes" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium/:id" element={<Premium />} />
        <Route path="/register" element={<Register />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
    </div>
  );
}

export default RouteList;
