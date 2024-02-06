
import PropTypes from "prop-types";
import "../assets/css/CourseCard.css";
import { NavLink } from "react-router-dom";

const TeacherCourseCard = ({ courseName, courseTitle, courseId }) => {
  return (
    <div className="course-card">
      <h3>{courseName}</h3>
      <p>{courseTitle}</p>
      <NavLink className="btn btn-info" to={`/dashboard/teacher/assessment/${courseId}`}>
        View Assessments
      </NavLink>
    </div>
  );
};

TeacherCourseCard.propTypes = {
  courseName: PropTypes.string,
  courseTitle: PropTypes.string,
  courseId: PropTypes.string
};

export default TeacherCourseCard;
