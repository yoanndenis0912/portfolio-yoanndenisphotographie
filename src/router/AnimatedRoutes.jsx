import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Category from "../pages/Category";
import Contact from "../pages/Contact";

export default function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      {/* route par défaut pour éviter l'écran vide */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}