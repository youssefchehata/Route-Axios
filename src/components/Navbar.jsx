import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Navbar = () => {
  return (
    // nav.nav-wrapper.red.darken-3
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          poke ' Times{" "}
        </NavLink>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>{" "}
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/axios">Axios</NavLink>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
