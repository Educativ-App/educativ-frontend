import { MdLocalPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="top-footer">
        <div className="div-grid">
          <div className="list">
            <NavLink to="/about-us" className="text-wrapper">
              About
            </NavLink>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div className="list-2">
            <a href="#" className="text-wrapper">
              Become a partner
            </a>
            <a href="#">Careers</a>
            <a href="#">support@educativ.com</a>
            <div className="item">
              <MdLocalPhone size={28} />
              <div className="text-wrapper">(323) 943-1606</div>
            </div>
          </div>
          <div className="footer-social">
            <img
              className="footer-logo"
              alt="Footer Logo"
              src="/Logo-black.png"
            />
            <div className="d-flex">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaXTwitter size={24} />
              <FaThreads size={24} />
              <FaLinkedinIn size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="text-wrapper">&copy;{currentYear} EDUCATIV</div>
        {/* <p className="link-CSLB-license">CSLB license number # 1104018</p> */}
      </div>
    </>
  );
};

export default Footer;
