import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getPage } from "../../utils/helpers";

// STUDENT USER
// let user = { name: "Adaeze", role: "student" };

// ADMIN USER
let user = { role: "admin" };

// TEACHER USER
// let user = { name: "Mr. Monday", role: "teacher" };

const AdminProtectedRoutes = () => {
  const currentPage = getPage();

  if (user?.role === "admin") {
    if (currentPage === "admin") {
      return <Navigate to={"/dashboard"} />;
    }
    return <Outlet />;
  } else {
    return <Navigate to={"/"} replace />;
  }
};

export default AdminProtectedRoutes;
