import AdminHeader from "./components/AdminHeader";

import "../assets/css/AllTeacher.css";
import Profile from "../components/Profile";

const teachersList = [
  {
    name: "Monday Oshodi",
    faculty: "Management Science",
    dept: "Business Administration",
    staff_no: "150203031",
    session: "2023/24",
    semester: "First",
    role: "teacher",
  },
  {
    name: "Ola Sunday",
    faculty: "Science",
    dept: "Botany",
    staff_no: "150203031",
    session: "2022/23",
    semester: "Second",
    role: "teacher",
  },
  {
    name: "Adaeze Ugo",
    faculty: "Engineering",
    dept: "Civil Engineering",
    staff_no: "150203031",
    session: "2021/22",
    semester: "First",
    role: "teacher",
  },
  {
    name: "Tuesday Testing",
    faculty: "Art",
    dept: "English",
    staff_no: "150203031",
    session: "2023/24",
    semester: "First",
    role: "teacher",
  },
  {
    name: "Bolu Ige",
    faculty: "Management Science",
    dept: "Accounting",
    staff_no: "150203031",
    session: "2023/24",
    semester: "Second",
    role: "teacher",
  },
];

const AllTeacher = () => {
  return (
    <div className="admin_teacher">
      <AdminHeader btnText="Add Teacher" type="teachers" />

      <div className="teachers_grid">
        {teachersList.map((teacher, index) => (
          <Profile key={index} user={teacher} />
        ))}
      </div>
    </div>
  );
};

export default AllTeacher;
