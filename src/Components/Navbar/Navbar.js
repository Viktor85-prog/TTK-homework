import React from "react";
import classes from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";
// import Loginization from "../../Components_old/Loginization/Loginization";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      MENU
      {/* <ul>
        <li>
          <NavLink to="/Login" activeClassName="selected">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacts" activeClassName="selected">
            Contacts
          </NavLink>
        </li>
      </ul>
      <div>
        <Loginization />
      </div> */}
    </nav>
  );
};

export default Navbar;
