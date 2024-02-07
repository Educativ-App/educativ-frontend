import AdminHeader from "./components/AdminHeader";
import "../assets/css/AllCourses.css";
import Profile from "../components/Profile";
import { getAllCourses } from "../service/courseService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import CreateUser from "../components/CreateUser";

const AllCourses = () => {
  const [searchValue, setSearchValue] = useState("");

  const [createModal, setCreateModal] = useState(false);

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
        onClick={() => setCreateModal(true)}
      />

      <div className="courses_grid">
        {courses
          ?.filter((val) => {
            let searchVal = searchValue.toLowerCase();
            if (
              val.courseTittle.toLowerCase().startsWith(searchVal) ||
              val.courseCode.toLowerCase().startsWith(searchVal)
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

      <Modal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        hasCloseBtn={true}
      >
        <CreateUser role="teacher" setIsCreating={setCreateModal} />
      </Modal>
    </div>
  );
};

export default AllCourses;
