import React from "react";
import Button from "../components/Button";

import "../assets/css/NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not_found-page">
      <div className="not_found-page--container">
        <h1>Page Not Found</h1>
        <Button
          type="default"
          text="Back to Home"
          className="btn"
          onClick={() => navigate("/")}
        />
      </div>
    </main>
  );
};

export default NotFound;
