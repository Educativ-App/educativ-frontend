import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import "../../assets/css/DashBoardLayout.css";
import { sideBarLinks } from "../../data/linkData";
import { checkInLocation } from "../../utils/helpers";

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
          {sideBarLinks.map((sidebar, index) => (
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
