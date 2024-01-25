import React from "react";
import InputGroup from "../components/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

import "../assets/css/signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="form_heading">Create an Account</h1>

      <div className="form_container">
        <form className="form">
          <InputGroup
            label="First Name"
            name="first_name"
            id="first_name"
            type="text"
          />
          <InputGroup
            label="Last Name"
            name="last_name"
            id="last_name"
            type="text"
          />

          <InputGroup label="Email" name="email" id="email" type="email" />
          <InputGroup
            label="Password"
            name="password"
            id="password"
            type="password"
          />
          <InputGroup
            label="Confirm Password"
            name="confirm_password"
            id="confirm_password"
            type="password"
          />

          <Button text="Sign Up" />
        </form>
      </div>

      <p className="signup_link">
        Already have an account?{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>

      <Button
        text="Back to Home"
        type="info"
        className="back_btn"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default SignUp;
