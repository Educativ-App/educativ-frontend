import React, { useState } from "react";
import "../assets/css/QuestionCard.css";
import Button from "./Button";

const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const QuestionCard = ({ question, onClick, loading }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const submitHandler = () => {
    onClick(selectedOption);
  };

  return (
    <article className="question_card">
      <p className="quest_header">Question 01</p>

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
        text="Next"
        onClick={submitHandler}
        loading={loading}
      />
    </article>
  );
};

export default QuestionCard;
