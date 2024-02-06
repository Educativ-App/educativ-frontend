import { useMemo } from "react";
import Button from "./Button";
import "../assets/css/styles.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { checkInLocation } from "../utils/helpers";
import { adminLinks, teacherLinks, studentLinks } from "../data/linkData";
import useClickOutiside from "../hooks/use-clickOutside";
import { useCheckLocation } from "../hooks/useCheckLocation";
import { useAuth } from "../Contexts/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const dashboardPage = useCheckLocation("/dashboard");

  const { isLoggedIn, signOut, authUser: user } = useAuth();

  const {
    visible: showNavbar,
    setVisible: setShowNavbar,
    ref,
  } = useClickOutiside(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useMemo(() => {
    showNavbar
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  }, [showNavbar]);

  const navNavigator = (to, type) => {
    setShowNavbar(false);
    if (type === "button") {
      signOut();
      navigate("/");
      return;
    }
    if (to === "dashboard") {
      navigate(".");
      return;
    }

    navigate(to);
  };

  return (
    <>
      <nav className="navbar">
        <div className="header-container" ref={ref}>
          <Link to="/">
            <img className="logo" src="/Logo.png" alt="logo" />
          </Link>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            {!dashboardPage && (
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/features">Features</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
                {showNavbar && (
                  <li>
                    {isLoggedIn ? (
                      <Button
                        text="Log Out"
                        onClick={() => navNavigator("/", "button")}
                        type="info"
                      />
                    ) : (
                      <Button
                        text="Log in"
                        type="info"
                        onClick={() => navigate("/login")}
                      />
                    )}
                  </li>
                )}
              </ul>
            )}

            {/* MOBILE NAVIGATION */}

            {dashboardPage &&
              showNavbar &&
              (user?.role === "teacher" ? (
                <ul>
                  {teacherLinks?.map((sidebar, index) => (
                    <li key={index}>
                      {sidebar.type === "button" ? (
                        <>
                          <Button
                            text={sidebar.title}
                            onClick={() =>
                              navNavigator(sidebar.link, sidebar?.type)
                            }
                            type="info"
                          />
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            navNavigator(sidebar.link, sidebar?.type)
                          }
                          className={`navBtn ${
                            checkInLocation(sidebar.link) && "active"
                          }`}
                        >
                          {sidebar.title}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ) : user?.role === "student" ? (
                <ul>
                  {studentLinks?.map((sidebar, index) => (
                    <li key={index}>
                      {sidebar.type === "button" ? (
                        <>
                          <Button
                            text={sidebar.title}
                            onClick={() =>
                              navNavigator(sidebar.link, sidebar?.type)
                            }
                            type="info"
                          />
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            navNavigator(sidebar.link, sidebar?.type)
                          }
                          className={`navBtn ${
                            checkInLocation(sidebar.link) && "active"
                          }`}
                        >
                          {sidebar.title}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {adminLinks?.map((sidebar, index) => (
                    <li key={index}>
                      {sidebar.type === "button" ? (
                        <>
                          <Button
                            text={sidebar.title}
                            onClick={() =>
                              navNavigator(sidebar.link, sidebar?.type)
                            }
                            type="info"
                          />
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            navNavigator(sidebar.link, sidebar?.type)
                          }
                          className={`navBtn  ${
                            checkInLocation(sidebar.link) && "active"
                          }`}
                        >
                          {sidebar.title}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
          </div>

          {!dashboardPage ? (
            <div className="menu-btn">
              {isLoggedIn ? (
                <Button text="Log Out" onClick={() => signOut()} />
              ) : (
                <Button text="Log in" onClick={() => navigate("/login")} />
              )}
            </div>
          ) : (
            <div className="menu-btn">
              <h3>
                {user?.role === "student"
                  ? "Student's Dashboard"
                  : user?.role === "teacher"
                  ? "Teacher's Dashboard"
                  : "Admin's Dashboard"}
              </h3>
            </div>
          )}

          <div className="menu-icon" onClick={handleShowNavbar}>
            {!showNavbar ? <MdOutlineMenu size={32} /> : <IoClose size={24} />}
          </div>
        </div>
      </nav>

      {showNavbar && <div className="backdrop" />}
    </>
  );
};

export default Header;
