import React from "react";
import Button from "./Button";
import "../assets/css/styles.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { getPage } from "../utils/helpers";
import { sideBarLinks } from "../data/linkData";

const Header = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const dashboardPage = getPage("dashboard");

  return (
    <nav className="navbar">
      <div className="header-container">
        <div>
          <img className="logo" src="/Logo.png" alt="logo" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          {!dashboardPage && (
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          )}
          {dashboardPage && showNavbar && (
            <ul>
              {sideBarLinks.map((sidebar, index) => (
                <li key={index}>
                  <NavLink to={sidebar.link}>{sidebar.title}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="menu-btn">
          <Button text="Sign Up" onClick={() => navigate("/signup")} />
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          {!showNavbar ? <MdOutlineMenu size={32} /> : <IoClose size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
