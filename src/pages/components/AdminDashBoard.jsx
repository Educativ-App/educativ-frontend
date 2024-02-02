import React from "react";

import "../../assets/css/AdminDashBoard.css";

import TaskTab from "../../components/TaskTab";

import boardWoman from "../../assets/images/board_woman.png";
import femaleStudent from "../../assets/images/female_student.png";
import sleepGirl from "../../assets/images/sleep_girl.png";

const overview = [
  {
    pre: "Total number of teachers",
    task: "26",
    image: boardWoman,
    colour: "yellow",
  },
  {
    pre: "Total number of students",
    task: "266",
    image: femaleStudent,
    colour: "yellow",
  },
  {
    pre: "Total number of courses",
    task: "7",
    image: sleepGirl,
    colour: "yellow",
  },
  {
    pre: "Total number of teachers",
    task: "26",
    image: boardWoman,
    colour: "yellow",
  },
];

const AdminDashBoard = () => {
  return (
    <div className="admin_dashboard">
      <section className="admin_left_container">
        <div className="admin_top_container">
          {overview.map((item, index) => (
            <TaskTab
              key={index}
              prefix={item.pre}
              task={item.task}
              image={item.image}
              colour={item.colour}
            />
          ))}
        </div>
        <div>Chart</div>
        <div>Chart</div>
      </section>
      <section className="admin_right_container">Right section</section>
    </div>
  );
};

export default AdminDashBoard;
