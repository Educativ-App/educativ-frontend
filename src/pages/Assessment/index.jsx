import { useQuery } from "@tanstack/react-query";
import {
  getTeacherAssessmentByCourse,
  getTeacherCourses,
} from "../../service/courseService";
import Loading from "../../components/Loading";
import BackButton from "../../components/BackButton";
import { useEffect, useState } from "react";
import AssessmentCard from "../../components/AssessmentCard";
import { NavLink } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";

const Index = () => {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });

  const [selectedCourse, setSelectedCourse] = useState("");

  const {
    data: assessments,
    isLoading: isAssessmentLoading,
    isFetching,
    refetch: refetchAssessments,
  } = useQuery({
    queryKey: ["teacher-assessments"],
    queryFn: () => getTeacherAssessmentByCourse(selectedCourse),
    enabled: selectedCourse != "",
  });

  useEffect(() => {
    if (selectedCourse == "") return;
    refetchAssessments();
  }, [selectedCourse]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid-wrapper">
      <div className="container">
        <div className="d-flex">
          <BackButton />
          <NavLink to={'/dashboard/teacher/assessment/create'} className="btn btn-info">
            <FaPlusSquare />
            Add
          </NavLink>
        </div>

        <div className="form-wrapper">
          <h4>Select a course to view assessment</h4>

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
          {isAssessmentLoading || isFetching ? (
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
              {assessments ? (
                assessments.map((assessment) => (
                  <div key={assessment._id} className="col-md-4">
                    <AssessmentCard assessment={assessment} />
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
