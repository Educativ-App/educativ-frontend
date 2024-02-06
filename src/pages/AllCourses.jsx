import AdminHeader from "./components/AdminHeader";
import "../assets/css/AllCourses.css";
import Profile from "../components/Profile";
import { getAllCourses } from "../service/courseService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="admin_courses">
      <AdminHeader
        btnText="Add Course"
        type="courses"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target?.value)}
      />

      <div className="courses_grid">
        {courses
          ?.filter((val) => {
            if (
              val.courseTittle
                .toLowerCase()
                .startsWith(searchValue.toLowerCase()) ||
              val.courseCode.toLowerCase().startsWith(searchValue.toLowerCase())
            ) {
              return val;
            }
          })
          ?.map((course, index) => (
            <CourseCard
              key={index}
              courseName={course.courseCode}
              courseTitle={course.courseTittle}
              onClick={() => navigate(`assessment/${course._id}`)}
            />
          ))}
      </div>
    </div>
  );
};

export default AllCourses;
