import React from "react";
import InputGroup from "../components/InputGroup";

const SignUp = () => {
  return (
    <div>
      <InputGroup
        label="First Name"
        name="first_name"
        id="first_name"
        type="text"
        error
        errorMessage="Invalid"
      />
      <InputGroup
        label="Password"
        name="password"
        id="password"
        type="password"
        error
        errorMessage="Invalid password"
      />
      <InputGroup label="Email" name="email" id="email" type="email" />
    </div>
  );
};

export default SignUp;
