import React from "react";
import "../assets/css/Dashboard.css";
import StudentDashBoard from "./components/StudentDashBoard";
import TeacherDashBoard from "./components/TeacherDashBoard";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminDashBoard from "./components/AdminDashBoard";
import Button from "../components/Button";
import { MdArrowBackIos } from "react-icons/md";

// STUDENT USER
// let user = { name: "Adaeze", role: "student" };

// ADMIN USER
// let user = { role: "admin" };

// TEACHER USER
// let user = { name: "Mr. Monday", role: "teacher" };

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
        <div>
          <h2>Hello, {user?.name ?? ""}</h2>
          <p>What will you do today? </p>
        </div>
        <Button
          text="Back"
          onClick={() => {
            navigate(-1);
          }}
          icon={<MdArrowBackIos />}
        />
      </div>
      {user.role === "student" ? (
        <StudentDashBoard />
      ) : user.role === "teacher" ? (
        <TeacherDashBoard />
      ) : (
        <AdminDashBoard />
      )}

      {/* {user?.role == "student" ? <StudentDashBoard /> : <TeacherDashBoard />} */}
    </section>
  ) : (
    <></>
  );
};

export default Dashboard;
