import React, { useMemo } from "react";
import Button from "./Button";
import "../assets/css/styles.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { checkInLocation, getPage } from "../utils/helpers";
import { sideBarLinks } from "../data/linkData";
import useClickOutiside from "../hooks/use-clickOutside";

const Header = () => {
  const navigate = useNavigate();
  // const [showNavbar, setShowNavbar] = React.useState(false);

  const {
    visible: showNavbar,
    setVisible: setShowNavbar,
    ref,
  } = useClickOutiside(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useMemo(() => {
    showNavbar
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  }, [showNavbar]);

  const dashboardPage = getPage("dashboard");

  return (
    <>
      <nav className="navbar">
        <div className="header-container" ref={ref}>
          <Link to="/">
            <img className="logo" src="/Logo.png" alt="logo" />
          </Link>
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
                  <NavLink to="/dashboard">Dashboard</NavLink>
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
                    <Link
                      to={sidebar.link}
                      className={`${checkInLocation(sidebar.link) && "active"}`}
                    >
                      {sidebar.title}
                    </Link>
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

      {showNavbar && <div className="backdrop" />}
    </>
  );
};

export default Header;
