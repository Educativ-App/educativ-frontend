import AdminHeader from "./components/AdminHeader";

import "../assets/css/AllTeacher.css";

const AllTeacher = () => {
  return (
    <div className="admin_teacher">
      <AdminHeader btnText="Add Teacher" type="teachers" />
    </div>
  );
};

export default AllTeacher;
