import Button from "./Button";
import PropTypes from "prop-types";
import "../assets/css/CourseCard.css";

const CourseCard = ({ courseName, courseTitle, onClick }) => {
  return (
    <div className="course-card">
      <h3>{courseName}</h3>
      <p>{courseTitle}</p>
      <Button text="View Assessments" onClick={onClick} />
    </div>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string,
  courseTitle: PropTypes.string,
};

export default CourseCard;
