import React from "react";
import "../assets/css/Dashboard.css";
import StudentDashBoard from "./components/StudentDashBoard";
import TeacherDashBoard from "./components/TeacherDashBoard";

let user = { name: "Adaeze", role: "student" };

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="user_profile">
        <h2>Hello, {user?.name}</h2>
        <p>What will you do today? </p>
      </div>
      {user?.role == "student" ? <StudentDashBoard /> : <TeacherDashBoard />}
    </section>
  );
};

export default Dashboard;
