import React from "react";
import { NavLink } from "react-router-dom";
import { Disc, Info } from 'react-feather';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink 
        className="nav-bar-button"
        exact
        to="/" 
        activeClassName="selected" 
        activeStyle={{
          fontWeight: "bold",
          borderColor: "black"
        }}
      >
        <Disc className="nav-bar-button-icon"/> Main
      </NavLink>

      <NavLink 
        className="nav-bar-button"
        exact
        to="/info" 
        activeClassName="selected" 
        activeStyle={{
          fontWeight: "bold",
          borderColor: "black"
        }}
      >
        <Info className="nav-bar-button-icon"/> Info
      </NavLink>
    </div> 
  );
}

export default NavBar;