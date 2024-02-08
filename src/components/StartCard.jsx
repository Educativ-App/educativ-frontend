import React from "react";
import Button from "./Button";

import "../assets/css/StartCard.css";

const StartCard = ({ duration, onClick, loading }) => {
  return (
    <article className="start_card">
      <h1>Welcome to your assessment</h1>
      <h5>Read the below instructions carefully</h5>
      <ul>
        <li>
          The assessment duration is <strong>{duration} mins</strong>
        </li>
        <li>Do not refresh the page or leave the assessment page</li>
        <li>Previous answers can not be changed</li>
        <li>The test will end automatically after the duration elapse</li>
      </ul>

      <Button text="Start test" onClick={onClick} loading={loading} />
    </article>
  );
};

export default StartCard;
