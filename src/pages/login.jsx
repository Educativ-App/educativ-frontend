import { useRef, useState } from "react";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { useAuthService } from "../hooks/authHooks";
import { useAuth } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { loginUser } = useAuthService();
  const { saveLoggedInUser } = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var email = emailRef.current.value;
    var password = passwordRef.current.value;

    setLoading(true);
    const user = await loginUser(email, password);
    setLoading(false);
    if (user != null) {
      saveLoggedInUser(user);
      toast("Login Successful", { type: "success", autoClose: 2000 });
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <div className="form_section">
        <form className="form" onSubmit={handleSubmit}>
          <InputGroup
            ref={emailRef}
            label="Email"
            name="email"
            id="email"
            type="email"
          />
          <InputGroup
            ref={passwordRef}
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
