import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Logo from "./img/bon.jpg";
import "./Header.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/">
          <div className="logo">
            <img src={Logo} className="logo" />
          </div>
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/destination">Destination</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <IoMdContact className="icon" size={"50px"} />
      </div>
    </nav>
  );
};

export default Header;