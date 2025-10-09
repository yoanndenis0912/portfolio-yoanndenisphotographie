import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Category from "../pages/Category";
import Contact from "../pages/Contact";
import Merci from "../pages/Merci"; // ✅ ajout de la page Merci
import FadeWrapper from "../components/FadeWrapper";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <FadeWrapper>
              <Home />
            </FadeWrapper>
          }
        />
        <Route
          path="/portfolio"
          element={
            <FadeWrapper>
              <Portfolio />
            </FadeWrapper>
          }
        />
        <Route
          path="/portfolio/:slug"
          element={
            <FadeWrapper>
              <Category />
            </FadeWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <FadeWrapper>
              <Contact />
            </FadeWrapper>
          }
        />
        {/* ✅ Nouvelle page de confirmation */}
        <Route
          path="/merci"
          element={
            <FadeWrapper>
              <Merci />
            </FadeWrapper>
          }
        />
        <Route
          path="*"
          element={
            <FadeWrapper>
              <Home />
            </FadeWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}