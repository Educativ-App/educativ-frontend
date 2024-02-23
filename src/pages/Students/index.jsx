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
  const [searchValue, setSearchValue] = useState("");

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
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
    queryKey: ["students", selectedCourse],
    queryFn: async () => await getStudentsByCourse(selectedCourse),
    enabled: !!selectedCourse,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="center">
        <h2>No course assigned to this teacher</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="grid-wrapper">
        <div className="">
          <AdminHeader
            btnText="Add Student"
            type="students"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target?.value)}
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
                    <option key={i} value={course?.course?._id}>
                      {`${course?.course?.courseTittle} (${course?.course?.courseCode})`}
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
                  students
                    .filter((val) => {
                      let searchVal = searchValue.toLowerCase();
                      if (
                        val.firstName.toLowerCase().startsWith(searchVal) ||
                        val.middleName.toLowerCase().startsWith(searchVal) ||
                        val.user.email.toLowerCase().startsWith(searchVal) ||
                        val.gender.toLowerCase().startsWith(searchVal) ||
                        val.studentStatus.toLowerCase().startsWith(searchVal) ||
                        val.lastName.toLowerCase().startsWith(searchVal)
                      ) {
                        return val;
                      }
                    })
                    .map((student) => (
                      <div key={student?._id} className="col-md-4">
                        <StudentCard
                          student={student}
                          refetchStudents={refetchStudents}
                        />
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
          <CreateUser
            role="student"
            setIsCreating={setCreateModal}
            refetch={refetchStudents}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Students;
