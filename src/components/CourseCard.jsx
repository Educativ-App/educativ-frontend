import Button from "./Button";
import  PropTypes from "prop-types";
import "../assets/css/CourseCard.css";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ courseName, courseTitle, courseId }) => {
    const navigate = useNavigate();
  return (
    <div className="course-card">
      <h3>{courseName}</h3>
      <p>{courseTitle}</p>
      <Button text="View Assessments" onClick={()=>navigate(`/teacher/course/${courseId}`)} />
    </div>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string,
  courseTitle: PropTypes.string,
  courseId: PropTypes.string
};

export default CourseCard;
