import React from "react";
import "../assets/css/StudentResultCard.css";
import Button from "./Button";

const StudentResultCard = ({ assignBy, title, onClick, loading, disabled }) => {
  return (
    <div className="result_card">
      <h4>{title}</h4>
      <h4>Assigned by: {assignBy} </h4>
      <div className="result_btn">
        <Button
          type="info"
          text="View result"
          onClick={onClick}
          loading={loading}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default StudentResultCard;
