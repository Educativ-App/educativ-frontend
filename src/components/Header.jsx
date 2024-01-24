import React from "react";
import Button from "./Button"
import '../assets/css/styles.css'

const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="header-container">
        <div >
          <img className="logo" src="/Logo.png" alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a  href="/">Home</a >
            </li>
            <li>
              <a  href="#about">About</a >
            </li>
            <li>
              <a  href="#features">Features</a >
            </li>
            <li>
              <a  href="/about">Contact Us</a >
            </li>
           
          </ul>
        </div>
        <Button  text="Sign Up" />
      </div>
    </nav>
  );
};

export default Header;
