import React, { useMemo } from "react";
import "../assets/css/Dashboard.css";
import StudentDashBoard from "./components/StudentDashBoard";
import TeacherDashBoard from "./components/TeacherDashBoard";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminDashBoard from "./components/AdminDashBoard";
import Button from "../components/Button";
import { MdArrowBackIos } from "react-icons/md";
import { getStudentRecord, getTeachersRecord } from "../service/userService";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { authUser: user } = useAuth();

  let userDetails;

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  // TEACHER'S DETAILS

  if (user && user.role === "teacher") {
    const { data } = useQuery({
      queryKey: ["user-details"],
      queryFn: () => getTeachersRecord(),
    });

    userDetails = data;
  }

  // STUDENT'S DETAILS
  if (user && user.role === "student") {
    const { data } = useQuery({
      queryKey: ["user-details"],
      queryFn: () => getStudentRecord(),
    });

    userDetails = data;
  }

  return user ? (
    <section className="dashboard">
      <div className="user_profile">
        <div>
          <h2>Hello, {userDetails?.firstName ?? ""}</h2>
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
