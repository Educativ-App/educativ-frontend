import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getQuestionsByAssessment,
  nextAssessment,
  startAssessment,
} from "../../service/courseService";
import { useStoreContext } from "../../Contexts/StoreContext";
import StartCard from "../../components/StartCard";
import QuestionCard from "../../components/QuestionCard";
import Timer from "../../components/Timer";

const StudentTestPage = () => {
  const { assId } = useParams();
  const {
    state: { assessmentDuration },
  } = useStoreContext();

  if (!assId) {
    return;
  }

  const [assessmentQuestion, setAssessmentQuestion] = useState(null);
  const [endAssessment, setEndAssessment] = useState("");

  const [loading, setLoading] = useState(false);

  const startAssessmentHandler = async () => {
    setLoading(true);
    const data = await startAssessment(assId);
    setAssessmentQuestion(data?.question);
    setEndAssessment(data?.endTime);
    setLoading(false);
  };

  const nextQuestionHandler = async (ans) => {
    setLoading(true);
    const data = await nextAssessment(assId, { studentOption: ans });
    setAssessmentQuestion(data?.question);
    setLoading(false);
  };

  return (
    <>
      {assessmentQuestion ? (
        <div className="flex-col container">
          <div className="align-end">
            <Timer
              duration={assessmentDuration}
              onTime={() => console.log("end time called")}
            />
          </div>
          <div className="align-center">
            <QuestionCard
              question={assessmentQuestion}
              onClick={nextQuestionHandler}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <div className="center">
          <StartCard
            duration={assessmentDuration}
            onClick={startAssessmentHandler}
            loading={loading}
          />
        </div>
      )}
    </>
  );
};

export default StudentTestPage;
