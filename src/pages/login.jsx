import React from "react";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

import "../assets/css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>

      <div className="form_section">
        <form className="form">
          <InputGroup label="Email" name="email" id="email" type="email" />
          <InputGroup
            label="Password"
            name="password"
            id="password"
            type="password"
          />

          <p>
            Forgot password?{" "}
            <Link to="/" className="link">
              Click here
            </Link>
          </p>

          <Button text="Sign in" />
        </form>

        <p className="signup_link">
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Create an account
          </Link>
        </p>

        <Button
          text="Back to Home"
          type="info"
          className="back_btn"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Login;
