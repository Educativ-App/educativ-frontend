import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../../components/Modal";
import CreateUser from "../../components/CreateUser";
import { useQuery } from "@tanstack/react-query";
import { getTeacherCourses } from "../../service/courseService";
import { getStudentsByCourse } from "../../service/studentService";
import Loading from "../../components/Loading";
import StudentCard from "../../components/StudentCard";

const Students = () => {
  const [createModal, setCreateModal] = useState(false);

  const { data: courses, isLoading } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });

  const [selectedCourse, setSelectedCourse] = useState("");

  const {
    data: students,
    isLoading: isStudentsLoading,
    isFetching,
    refetch: refetchStudents,
  } = useQuery({
    queryKey: ["students"],
    queryFn: () => getStudentsByCourse(selectedCourse),
    enabled: selectedCourse != "",
  });

  useEffect(() => {
    if (selectedCourse == "") return;
    refetchStudents();
  }, [selectedCourse]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid-wrapper">
        <div className="container">
          <AdminHeader
            btnText="Add Student"
            type="students"
            onClick={() => setCreateModal(true)}
          />

          <div className="form-wrapper">
            <h4>Select a course to view students</h4>

            <div>
              <label htmlFor="courseId">Course:</label>
              <select
                id="courseId"
                name="courseId"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                {courses ? (
                  courses.map((course, i) => (
                    <option key={i} value={course.course._id}>
                      {`${course.course.courseTittle} (${course.course.courseCode})`}
                    </option>
                  ))
                ) : (
                  <option value="">Select a course</option>
                )}
              </select>
            </div>
          </div>
          <div>
            {isStudentsLoading || isFetching ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loading />
              </div>
            ) : (
              <div className="row">
                {students ? (
                  students.map((student) => (
                    <div key={student._id} className="col-md-4">
                      <StudentCard student={student} />
                    </div>
                  ))
                ) : (
                  <p>{selectedCourse && "No Students Registered"}</p>
                )}
              </div>
            )}
          </div>
        </div>
        <Modal
          isOpen={createModal}
          onClose={() => setCreateModal(false)}
          hasCloseBtn={true}
        >
          <CreateUser role="student" setIsCreating={setCreateModal} />
        </Modal>
      </div>
    </>
  );
};

export default Students;
