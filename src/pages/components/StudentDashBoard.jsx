import React from "react";

import "../../assets/css/StudentDashBoard.css";

import testBaord from "../../assets/images/testboard.png";
import gradeBook from "../../assets/images/grade_book.png";
import library from "../../assets/images/library_book.png";
import Quiz from "../../assets/images/quiz_mark.png";

import TaskTab from "../../components/TaskTab";

const taskTab = [
  {
    pre: "take a",
    task: "Report",
    image: testBaord,
    colour: "yellow",
  },
  {
    pre: "check your",
    task: "Grades",
    image: gradeBook,
    colour: "lemon",
  },
  {
    pre: "Visit the library",
    task: "Library",
    image: library,
    colour: "pink",
  },
  {
    pre: "Take a",
    task: "Quiz",
    image: Quiz,
    colour: "teal",
  },
];

const StudentDashBoard = () => {
  return (
    <div className="student_dashboard">
      <div className="tasks_section">
        <div className="tasks">
          {taskTab.map((task) => (
            <TaskTab
              key={task.task}
              prefix={task.pre}
              task={task.task}
              image={task.image}
              colour={task.colour}
            />
          ))}
        </div>
        <div className="analytics">Analytics</div>
      </div>
      <div className="profile_section">profile</div>
    </div>
  );
};

export default StudentDashBoard;
