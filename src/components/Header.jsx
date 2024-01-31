import { useMemo } from "react";
import Button from "./Button";
import "../assets/css/styles.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate, useNavigation } from "react-router-dom";
import { checkInLocation, getPage } from "../utils/helpers";
import { adminLinks, sideBarLinks } from "../data/linkData";
import useClickOutiside from "../hooks/use-clickOutside";
import { useCheckLocation } from "../hooks/useCheckLocation";
import { useAuth } from "../Contexts/AuthContext";





// STUDENT USER
// let user = { name: "Adaeze", role: "student" };

// ADMIN USER
let user = { role: "admin" };

// TEACHER USER
// let user = { name: "Mr. Monday", role: "teacher" };

const Header = () => {
  const navigate = useNavigate();
  const dashboardPage = getPage();


  const { isLoggedIn, signOut} = useAuth();


  

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

  const navNavigator = (to) => {
    setShowNavbar(false);
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
              </ul>
            )}
            {dashboardPage &&
              showNavbar &&
              (user.role !== "admin" ? (
                <ul>
                  {sideBarLinks?.map((sidebar, index) => (
                    <li key={index}>
                      <Link
                        to={sidebar.link}
                        className={`${
                          checkInLocation(sidebar.link) && "active"
                        }`}
                      >
                        {sidebar.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {adminLinks?.map((sidebar, index) => (
                    <li key={index}>
                      <button
                        onClick={() => navNavigator(sidebar.link)}
                        className={`navBtn ${
                          checkInLocation(sidebar.link) && "active"
                        }`}
                      >
                        {sidebar.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
          </div>

          {isLoggedIn ? (
            <div className="menu-btn">
              <Button text="Log Out" onClick={() => signOut()} />
            </div>
          ) : (
            ""

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
