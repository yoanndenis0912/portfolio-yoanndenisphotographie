import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Category from "../pages/Category";
import Contact from "../pages/Contact";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div {...pageTransition}>
              <Portfolio />
            </motion.div>
          }
        />
        <Route
  path="/portfolio/:slug"
  element={
    <motion.div {...pageTransition}>
      <Category />
    </motion.div>
  }
/>
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;