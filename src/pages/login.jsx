import { useState } from "react";

import "../assets/css/Login.css";

import InputGroup from "../components/InputGroup";
import Button from "../components/Button";

import { Link, useNavigate } from "react-router-dom";
import { useAuthService } from "../hooks/authHooks";
import { useAuth } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { loginUser } = useAuthService();
  const { saveLoggedInUser } = useAuth();

  // HDR:-------------------------FORM SUBMISSION-----------------------------------------

  const submitHandler = async (formData) => {
    setLoading(true);
    const user = await loginUser(formData.email, formData.password);
    setLoading(false);
    if (user != null) {
      saveLoggedInUser(user);
      toast("Login Successful", { type: "success", autoClose: 2000 });
      navigate("/dashboard");
    }
  };

  // HDR:-------------------------FORM VALIDATION-----------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div>
      <h1>Login</h1>

      <div className="form_section">
        <form className="form" onSubmit={handleSubmit(submitHandler)}>
          <InputGroup
            label="Email"
            name="email"
            id="email"
            type="email"
            error={errors.email}
            errormessage={errors.email?.message}
            {...register("email")}
          />
          <InputGroup
            label="Password"
            name="password"
            id="password"
            type="password"
            error={errors.password}
            errormessage={errors.password?.message}
            {...register("password")}
          />

          <p>
            Forgot password?{" "}
            <Link to="/" className="link">
              Click here
            </Link>
          </p>

          <Button loading={loading} text="Sign in" />
        </form>

        {/* <p className="signup_link">
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Create an account
          </Link>
        </p> */}

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
