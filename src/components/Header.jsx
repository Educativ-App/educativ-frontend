import React from "react";
import Button from "./Button";
import "../assets/css/styles.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="header-container">
        <div>
          <img className="logo" src="/Logo.png" alt="logo" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
          <div className='menu-btn'>
            <Button text="Sign Up" />
          </div>
    
          <div className="menu-icon" onClick={handleShowNavbar}>
            {
                !showNavbar ? <MdOutlineMenu size={32} /> : <IoClose size={24}/>
            }
            
         
        </div>
      </div>
    </nav>
  );
};

export default Header;
