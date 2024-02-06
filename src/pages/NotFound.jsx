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
        <div className="center gap-2">
          <Button
            type="default"
            text="Back to Home"
            className="btn"
            onClick={() => navigate("/")}
          />
          <Button
            type="info"
            text="Go back"
            className="btn"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
