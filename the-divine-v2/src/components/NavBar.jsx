import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./WindowSize";
import su2c from '../img/su2c-logo.png'

function NavBar() {
  let location = useLocation();

  const { width } = useWindowDimensions();

  let navbar = "navbar";
  let asp = "as";
  let wep = "asWeapon"

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
      <div className="links">
        <NavLink className={asp} activeClassName="selected" exact to="/">
          Home
        </NavLink>
        <NavLink className={wep} activeClassName="selected" exact to="/weapons">
          Weapons
        </NavLink>
        <NavLink className={asp} activeClassName="selected" to="/story">
        Story
        </NavLink>
        {width > 575 && <NavLink className={asp} activeClassName="selected" to="/tiers">
        Tiers
        </NavLink>}
        <NavLink className={asp} activeClassName="selected" to="/roadmap">
        Roadmap
        </NavLink>
        <NavLink className={asp} activeClassName="selected" to="/team">
        Team
        </NavLink>
        <NavLink className={asp} activeClassName="selected" to="/standup">
          <img alt="hello" src={su2c} width='100px' />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
