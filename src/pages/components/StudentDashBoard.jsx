import React from "react";

import "../../assets/css/StudentDashBoard.css";

import testBaord from "../../assets/images/testboard.png";
import gradeBook from "../../assets/images/grade_book.png";
import library from "../../assets/images/library_book.png";
import Quiz from "../../assets/images/quiz_mark.png";

import TaskTab from "../../components/TaskTab";
import ProgressBar from "../../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Profile";
import CourseList from "../../components/CourseList";
import ExamList from "../../components/ExamList";
import DashboardCalendar from "../../components/Calendar";

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
    link: "/dashboard/quiz",
  },
];

var user = {
  name: "Adaeze Igwe",
  faculty: "Faculty of Business Administration",
  dept: "Accountancy Department",
  mat_no: "150203031",
  session: "2023/24",
  level: "300L",
  semester: "First",
  role: "student",
};

const StudentDashBoard = () => {
  const navigate = useNavigate();

  const pageNavigator = (page) => {
    navigate(`${page}`);
  };

  return (
    <>
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
                onClick={() => pageNavigator(task?.link)}
              />
            ))}
          </div>
          <div className="analytics">
            <div className="chart_container">
              <h3>Chart</h3>
            </div>
            <div className="status_container">
              <div>
                <ProgressBar percentage={32} type="Average" />
                <h3>Performance</h3>
              </div>
              <div>
                <ProgressBar percentage={78} type="Project" />
                <h3>Status</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_section">
          <Profile img="https://i.pravatar.cc/200" user={user} />
        </div>
      </div>

      <div className="student_btm_content">
        <div>
          <ExamList />
        </div>
        <div>
          <CourseList />
        </div>
        <div>
          <DashboardCalendar />
        </div>
      </div>
    </>
  );
};

export default StudentDashBoard;
