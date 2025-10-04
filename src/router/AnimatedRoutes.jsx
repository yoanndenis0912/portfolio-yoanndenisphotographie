import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

function Page({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>
      {children}
    </motion.div>
  );
}

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/portfolio" element={<Page><Portfolio /></Page>} />
        <Route path="/portfolio/:slug" element={<Page><Gallery /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}
