import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import "../../assets/css/DashBoardLayout.css";
import { adminLinks, studentLinks, teacherLinks } from "../../data/linkData";
import { checkInLocation, getPage } from "../../utils/helpers";
import { useAuth } from "../../Contexts/AuthContext";

const DashBoardLayout = () => {
  const navigate = useNavigate();
  const { authUser: user, signOut } = useAuth();

  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const clickHandler = (url, type) => {
    if (type === "button") {
      signOut();
      navigate("/");
      return;
    }
    if (url === "dashboard") {
      navigate("/dashboard");
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
          {user?.role === "student" &&
            studentLinks?.map((sidebar, index) => (
              <button
                onClick={() => clickHandler(sidebar.link, sidebar?.type)}
                key={index}
                className={`sidebar_link ${
                  checkInLocation(sidebar.link) && "active"
                }`}
                disabled={sidebar?.disabled}
              >
                {sidebar.title}
              </button>
            ))}
          {user?.role === "teacher" &&
            teacherLinks?.map((sidebar, index) => (
              <button
                onClick={() => clickHandler(sidebar.link, sidebar?.type)}
                key={index}
                className={`sidebar_link ${
                  checkInLocation(sidebar.link) && "active"
                }`}
                disabled={sidebar?.disabled}
              >
                {sidebar.title}
              </button>
            ))}
          {user?.role === "admin" &&
            adminLinks?.map((sidebar, index) => (
              <button
                onClick={() => clickHandler(sidebar.link, sidebar?.type)}
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
