import PropTypes from "prop-types";
import { getDateString } from "../utils/helpers";
import "../assets/css/CourseCard.css";
import { Link } from "react-router-dom";


const AssessmentCard = ({ assessment }) => {
  return (
    <div className="assessment-card">
      <center>
        <h1>{assessment.assessmentTittle}</h1>
      </center>
      <table>
        <tr>
          <td align="left">Course:</td>
          <td align="right">{assessment.course.courseTittle}</td>
        </tr>
        <tr>
          <td align="left">Start Date:</td>
          <td align="right">{getDateString(assessment.startTime)}</td>
        </tr>
        <tr>
          <td align="left">End Date:</td>
          <td align="right">{getDateString(assessment.endTime)}</td>
        </tr>
        <tr>
          <td align="left">Max Score:</td>
          <td align="right">{assessment.maximumScore}</td>
        </tr>
        <tr>
          <td align="left">Duration:</td>
          <td align="right">{assessment.duration} mins</td>
        </tr>
        <tr>
          <td align="left">Created On:</td>
          <td align="right">{getDateString(assessment.createAt)}</td>
        </tr>
        <tr>
          <td align="left"><Link to={`/teacher/assessment/${assessment._id}/view-questions`}><button>View Questions</button></Link></td>
          <td align="right"><Link to={`/teacher/assessment/${assessment._id}/add-questions`}><button >Add Questions</button></Link>   </td>
        </tr>
      </table>
    </div>
  );
};

AssessmentCard.propTypes = {
  assessment: PropTypes.shape({
    _id: PropTypes.string,
    assessmentTittle: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    createAt: PropTypes.string,
    maximumScore: PropTypes.number,
    duration: PropTypes.number,
    course : PropTypes.shape({
        courseTittle : PropTypes.string
    })
  }),
};

export default AssessmentCard;
