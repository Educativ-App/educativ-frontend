import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header";

import "../../assets/css/DashBoardLayout.css";

const sideBarLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "My Dashboard",
    link: "/dashboard",
  },
  {
    title: "My Courses",
    link: "/",
  },
  {
    title: "My Tests",
    link: "/",
  },
  {
    title: "My Exams",
    link: "/",
  },
  {
    title: "Settings",
    link: "/",
  },
];

const DashBoardLayout = () => {
  return (
    <div className="dashboard_layout">
      <div className="nav_header">
        <Header />
      </div>
      <aside className="sidebar">
        <div className="sidebar_links">
          {sideBarLinks.map((sidebar, index) => (
            <NavLink to={sidebar.link} key={index} className="sidebar_link">
              {sidebar.title}
            </NavLink>
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
