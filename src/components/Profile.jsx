import "../assets/css/styles.css";
import PropTypes from "prop-types";

const Profile = ({ img = "https://picsum.photos/200", user }) => {
  return (
    <div className="profile-card">
      <div className="user-image">
        <img src={img} alt="userimage" />
        <div className="profile-info">
          <center>
            <span className="profile-name">{user.name}</span>
          </center>
          <center>
            <span>{`Faculty of ${user.faculty}`}</span>
          </center>
          <center>
            <span> {`Department of ${user.dept}`}</span>
          </center>
        </div>
      </div>
      <div className="content">
        <table style={{ width: "100%", borderSpacing: '12px' }}>
          <tr>
            <td align="left">Staff Number</td>
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
    mat_no: PropTypes.string,
    session: PropTypes.string,
    semester: PropTypes.string,
  }),
};
export default Profile;
