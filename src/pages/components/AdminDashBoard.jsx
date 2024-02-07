import React from "react";

import "../../assets/css/AdminDashBoard.css";

import TaskTab from "../../components/TaskTab";

import boardWoman from "../../assets/images/board_woman.png";
import femaleStudent from "../../assets/images/female_student.png";
import sleepGirl from "../../assets/images/sleep_girl.png";
import { useQuery } from "@tanstack/react-query";
import { getAllStudents, getAllTeachers } from "../../service/userService";
import { getAllCourses } from "../../service/courseService";
import { useNavigate } from "react-router-dom";

const AdminDashBoard = () => {
  const { data: teachers } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getAllTeachers(),
  });
  const { data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(),
  });
  const { data: students } = useQuery({
    queryKey: ["students"],
    queryFn: () => getAllStudents(),
  });

  const navigate = useNavigate();

  const overview = [
    {
      pre: "Teachers",
      task: `${teachers?.length ?? ""}`,
      image: boardWoman,
      colour: "yellow",
      link: "admin/teachers",
    },
    {
      pre: "Students",
      task: `${students?.length ?? ""}`,
      image: femaleStudent,
      colour: "yellow",
      link: "#",
    },
    {
      pre: "Courses",
      task: `${courses?.length ?? ""}`,
      image: sleepGirl,
      colour: "yellow",
      link: "admin/courses",
    },
  ];

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
              onClick={() => navigate(item?.link)}
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
