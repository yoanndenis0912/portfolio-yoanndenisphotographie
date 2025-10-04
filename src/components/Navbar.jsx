import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
