import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import "../../assets/css/DashBoardLayout.css";
import { adminLinks, sideBarLinks } from "../../data/linkData";
import { checkInLocation } from "../../utils/helpers";

// STUDENT USER
// let user = { name: "Adaeze", role: "student" };

// ADMIN USER
let user = { role: "admin" };

// TEACHER USER
// let user = { name: "Mr. Monday", role: "teacher" };

const DashBoardLayout = () => {
  const navigate = useNavigate();

  const clickHandler = (url) => {
    if (url === "dashboard") {
      navigate(".");
      return;
    }
    navigate(url);
  };

  return (
    <div className="dashboard_layout">
      <div className="nav_header">
        <Header />
      </div>
      <aside className="sidebar">
        <div className="sidebar_links">
          {user.role !== "admin" &&
            sideBarLinks?.map((sidebar, index) => (
              <button
                onClick={() => clickHandler(sidebar.link)}
                key={index}
                className={`sidebar_link ${
                  checkInLocation(sidebar.link) && "active"
                }`}
                disabled={sidebar?.disabled}
              >
                {sidebar.title}
              </button>
            ))}
          {user.role === "admin" &&
            adminLinks?.map((sidebar, index) => (
              <button
                onClick={() => clickHandler(sidebar.link)}
                key={index}
                className={`sidebar_link ${
                  checkInLocation(sidebar.link) && "active"
                }`}
                disabled={sidebar?.disabled}
              >
                {sidebar.title}
              </button>
            ))}
        </div>
      </aside>
      <main className="dashboard_layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;
