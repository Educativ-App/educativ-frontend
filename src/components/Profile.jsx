import "../assets/css/styles.css";
import PropTypes from "prop-types";

const Profile = ({
  img = "https://picsum.photos/200",
  user,
  type = "profile",
  course,
}) => {
  return (
    <div className="profile-card">
      <div className="user-image">
        <img src={img} alt="userimage" />
        <div className="profile-info">
          {type === "profile" ? (
            <>
              <center>
                <span className="profile-name">{user.name}</span>
              </center>
              <center>
                <span>{`Faculty of ${user?.faculty}`}</span>
              </center>
              <center>
                <span> {`Department of ${user?.dept}`}</span>
              </center>
            </>
          ) : (
            <>
              <center>
                <span className="profile-name">{course.courseCode}</span>
              </center>
              <center>
                <span>{`${course.courseTittle}`}</span>
              </center>
              {/* <center>
                <span> {`${course.total} students enrolled`}</span>
              </center> */}
            </>
          )}
        </div>
      </div>
      <div className="content">
        <table style={{ width: "100%", borderSpacing: "12px" }}>
          <tbody>
            {type === "profile" &&
              (user.role === "teacher" ? (
                <>
                  <tr>
                    <td align="left">Staff Number</td>
                    <td align="right">{user.staff_no}</td>
                  </tr>
                  <tr>
                    <td align="left">Session</td>
                    <td align="right">{user.session}</td>
                  </tr>
                  <tr>
                    <td align="left">Semester</td>
                    <td align="right">{user.semester}</td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td align="left">Level</td>
                    <td align="right">{user.level}</td>
                  </tr>
                  <tr>
                    <td align="left">Matric. Number</td>
                    <td align="right">{user.mat_no}</td>
                  </tr>
                  <tr>
                    <td align="left">Session</td>
                    <td align="right">{user.session}</td>
                  </tr>
                  <tr>
                    <td align="left">Semester</td>
                    <td align="right">{user.semester}</td>
                  </tr>
                </>
              ))}
            {type === "course" && (
              <>
                <tr>
                  <td align="left">Course code</td>
                  <td align="right">{course.courseCode}</td>
                </tr>
                {/* <tr>
                <td align="left">Session</td>
                <td align="right">{course.session}</td>
              </tr>
              <tr>
                <td align="left">Semester</td>
                <td align="right">{course.semester}</td>
              </tr> */}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Profile.propTypes = {
  img: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    faculty: PropTypes.string,
    dept: PropTypes.string,
    level: PropTypes.string,
    mat_no: PropTypes.string,
    session: PropTypes.string,
    semester: PropTypes.string,
    role: PropTypes.string,
  }),
};
export default Profile;
