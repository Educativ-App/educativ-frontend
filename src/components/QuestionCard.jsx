import React, { useState } from "react";
import "../assets/css/QuestionCard.css";
import Button from "./Button";
import { useStoreContext } from "../Contexts/StoreContext";

const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const QuestionCard = ({ question, onClick, loading, questionNumber }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const {
    state: { questionLength },
  } = useStoreContext();

  const submitHandler = () => {
    onClick(selectedOption);
  };

  return (
    <article className="question_card">
      <p className="quest_header">
        Question {questionNumber} / {questionLength}
      </p>

      <h2 className="quest">{question.text}</h2>
      {question?.options?.map((option, index) => {
        return (
          <div
            key={index}
            className={`quest_options ${
              selectedOption === option && "selected"
            }`}
            role="button"
            onClick={() => setSelectedOption(option)}
          >
            <span className="alphabet_span">{alphabets[index]}</span>
            {option}
          </div>
        );
      })}

      <Button
        type="info"
        text={questionNumber === questionLength ? "Finish" : "Next"}
        onClick={submitHandler}
        loading={loading}
      />
    </article>
  );
};

export default QuestionCard;
