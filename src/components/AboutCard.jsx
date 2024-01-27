import PropTypes from "prop-types";
import { clsx } from "clsx";
import {NavLink} from "react-router-dom"

const AboutCard = ({ title, text, type }) => {
  return (
    <div className={clsx("about-card", type)}>
      <center>
        <h2>{title}</h2>
      </center>
      <p>{text}</p>
     <NavLink to="/contact-us">
       <div className="button">Learn More</div>
     </NavLink>
     
    </div>
  );
};

AboutCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default AboutCard;
