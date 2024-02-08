import React from "react";
import "../assets/css/EndAssessment.css";
import ProgressBar from "./ProgressBar";
import Button from "./Button";
import { useStoreContext } from "../Contexts/StoreContext";
import { useNavigate } from "react-router-dom";

const EndAssessmentCard = ({ data }) => {
  const {
    state: {
      assessment_info: { maximumScore },
    },
  } = useStoreContext();

  const navigate = useNavigate();
  let PercentageScore = data?.PercentageScores ?? "0%";
  let convertPercent = parseInt(PercentageScore?.split("%")[0]);

  return (
    <article className="end_card">
      <h2>Your assessment result</h2>

      <div className="result_cont">
        <div className="total">
          <p>Total Score:</p>
          <h3>
            {data?.TotalScores}
            <span>/{maximumScore}</span>
          </h3>
        </div>
        <div>
          <ProgressBar percentage={convertPercent} />
        </div>
      </div>

      <div className="result_btns">
        <Button text="All results" disabled={true} />
        <Button
          type="info"
          text="All assessment"
          onClick={() => navigate("/dashboard/students/assessment")}
        />
      </div>
    </article>
  );
};

export default EndAssessmentCard;
