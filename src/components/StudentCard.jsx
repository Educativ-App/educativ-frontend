import "../assets/css/styles.css";
import PropTypes from "prop-types";

const StudentCard = ({ img = "https://picsum.photos/200", student }) => {
  return (
    <div className="profile-card">
      <div className="user-image">
        <img src={img} alt="userimage" />
        <div className="profile-info">
          <center>
            <span className="profile-name">{`${student.firstName}  ${student.lastName}`}</span>
          </center>
          <center>
            <span>{`Faculty of Management`}</span>
          </center>
          <center>
            <span> {`Department of Accounting`}</span>
          </center>
        </div>
      </div>
      <div className="content">
        <table style={{ width: "100%", borderSpacing: "12px" }}>
          <tr>
            <td align="left">FirstName</td>
            <td align="right">{student.firstName}</td>
          </tr>
          <tr>
            <td align="left">MiddleName</td>
            <td align="right">{student.middleName}</td>
          </tr>
          <tr>
            <td align="left">LastName</td>
            <td align="right">{student.lastName}</td>
          </tr>
          <tr>
            <td align="left">Email</td>
            <td align="right">{student.user.email}</td>
          </tr>
          <tr>
            <td align="left">Gender</td>
            <td align="right">{student.gender}</td>
          </tr>
          <tr>
            <td align="left">Status</td>
            <td align="right">{student.studentStatus}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  img: PropTypes.string,
  student: PropTypes.shape({
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    studentStatus: PropTypes.string,
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
};
export default StudentCard;
