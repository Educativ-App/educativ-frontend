import AdminHeader from "./components/AdminHeader";
import "../assets/css/AllCourses.css";
import Profile from "../components/Profile";

const coursesList = [
  {
    name: "CHM 432",
    faculty: "Science",
    total: 20,
    dept: "BioChemistry",
    course_code: "432",
    session: "2023/24",
    semester: "First",
  },
  {
    name: "ACC 101",
    total: 10,
    dept: "Acoounting",
    course_code: "101",
    session: "2022/23",
    semester: "Second",
  },
  {
    name: "EEG 300",
    faculty: "Engineering",
    total: 40,
    dept: "Civil Engineering",
    course_code: "300",
    session: "2021/22",
    semester: "First",
  },
  {
    name: "LIT 211",
    faculty: "Art",
    dept: "English",
    total: 60,
    course_code: "211",
    session: "2023/24",
    semester: "First",
  },
  {
    name: "Bio 232",
    faculty: "Science",
    total: 20,
    dept: "Zoology",
    course_code: "232",
    session: "2023/24",
    semester: "Second",
  },
];

const AllCourses = () => {
  return (
    <div className="admin_courses">
      <AdminHeader btnText="Add Course" type="courses" />

      <div className="courses_grid">
        {coursesList?.map((course, index) => (
          <Profile key={index} course={course} type="course" />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
