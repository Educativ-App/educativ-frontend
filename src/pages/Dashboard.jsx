import React from "react";
import "../assets/css/Dashboard.css";
import StudentDashBoard from "./components/StudentDashBoard";
import TeacherDashBoard from "./components/TeacherDashBoard";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { authUser: user } = useAuth();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return user ? (
    <section className="dashboard">
      <div className="user_profile">
        <h2>Hello, {user?.name}</h2>
        <p>What will you do today? </p>
      </div>
      {user?.role == "student" ? <StudentDashBoard /> : <TeacherDashBoard />}
    </section>
  ) : (
    <></>
  );
};

export default Dashboard;
