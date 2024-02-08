import React, { useMemo, useState } from "react";
import "../assets/css/StudentAssessmentCard.css";
import Button from "./Button";
import { getDateString } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../Contexts/StoreContext";

const StudentAssessmentCard = ({ assessment }) => {
  const navigate = useNavigate();
  const [testValidity, setTestValidity] = useState("");
  const { dispatch } = useStoreContext();

  let currentDate = new Date();

  let startDate = new Date(assessment.startTime);
  let endDate = new Date(assessment.endTime);

  useMemo(() => {
    if (currentDate > endDate) {
      setTestValidity("Expired");
    } else if (currentDate < startDate) {
      setTestValidity("Coming soon");
    } else {
      setTestValidity("");
    }
  }, []);

  const clickNavigator = () => {
    dispatch({
      type: "SET_ASSESSMENT_INFO",
      payload: {
        duration: assessment?.duration,
        maximumScore: assessment?.maximumScore,
      },
    });

    navigate(`${assessment._id}`);
  };

  return (
    <article className={`assess_card ${testValidity && "not-valid"}`}>
      <h2>{assessment.assessmentTittle}</h2>
      <p>Assigned by {assessment.teacher.firstName}</p>
      <div className="details">
        <p>
          Maximum score: <span>{assessment.maximumScore}</span>
        </p>
        <p>
          Duration: <span>{assessment.duration} mins </span>
        </p>
        <p>
          Start Date : <span>{getDateString(assessment.startTime)}</span>
        </p>
        <p>
          End Date : <span>{getDateString(assessment.endTime)}</span>
        </p>
      </div>
      <Button
        type="info"
        text="Take assessment"
        disabled={testValidity}
        onClick={clickNavigator}
      />
      {testValidity && (
        <div
          className={`badge ${testValidity === "Coming soon" && "soon"} ${
            testValidity === "Expired" && "expired"
          } `}
        >
          <h4>{testValidity}</h4>
        </div>
      )}
    </article>
  );
};

export default StudentAssessmentCard;
