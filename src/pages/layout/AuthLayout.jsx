import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../../assets/css/AuthLayout.css";

import boyImage from "../../assets/images/boy-image.png";

const AuthLayout = ({ children }) => {
  return (
    <section className="auth-section">
      <div className="auth_image__section">
        <img src={boyImage} alt="boy reading" className="auth_bg" />
      </div>
      <div className="auth_nav">
        <nav className="auth_header">
          <h1>logo</h1>

          <Link to="/">
            <img className="logo" src="/Logo.png" alt="logo" />
          </Link>
        </nav>
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
