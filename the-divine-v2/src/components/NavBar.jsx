import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../img/LOGO.png';

function NavBar() {
  let location = useLocation();

  let navbar = "navbar";
  let asp = "as";

  if (location.pathname === "/") {
    navbar = "navbar";
  } else {
    navbar = "navbar navbarAlt";
    asp = "linksAlt";
  }

  return (
    <nav className={navbar}>
      <h1
        style={
          location.pathname === "/"
            ? { color: "white" }
            : { color: "rgba(255, 238, 0, 0.76)" }
        }
      >
        THE DIVINE
      </h1>
      {/* <img className="logoHeader" width="55px" src={logo} alt="logo"/> */}
      <div className="links">
        <NavLink className={asp} activeClassName="selected" exact to="/">
          Home
        </NavLink>
        <NavLink className={asp} activeClassName="selected" to="/story">
        Story
        </NavLink>
        <NavLink className={asp} activeClassName="selected" to="/tiers">
        Tiers
        </NavLink>
        <NavLink className={asp} activeClassName="selected" to="/roadmap">
        Roadmap
        </NavLink>
        <NavLink className={asp} activeClassName="selected" to="/team">
        Team
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
