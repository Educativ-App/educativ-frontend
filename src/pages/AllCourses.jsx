import AdminHeader from "./components/AdminHeader";
import "../assets/css/AllCourses.css";

const AllCourses = () => {
  return (
    <div className="admin_courses">
      <AdminHeader btnText="Add Course" type="courses" />
    </div>
  );
};

export default AllCourses;
