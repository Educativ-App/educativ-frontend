import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  getAllCourses,
  getTeacherAssessmentByCourse,
  getTeacherCourses,
} from "../../service/courseService";
import { useStoreContext } from "../../Contexts/StoreContext";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import BackButton from "../../components/BackButton";
import { FaPlusSquare } from "react-icons/fa";
import AssessmentCard from "../../components/AssessmentCard";
import { useAuth } from "../../Contexts/AuthContext";

const ResultPage = () => {
  const { dispatch } = useStoreContext();
  const navigate = useNavigate();

  const { authUser: user } = useAuth();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => {
      if (user.role === "admin") {
        return getAllCourses();
      } else {
        return getTeacherCourses();
      }
    },
  });

  const [selectedCourse, setSelectedCourse] = useState("");
  const {
    data: assessments,
    isLoading: isAssessmentLoading,
    isFetching,
    refetch: refetchAssessments,
    isSuccess,
  } = useQuery({
    queryKey: ["assessments-results"],
    queryFn: () =>
      getTeacherAssessmentByCourse(
        selectedCourse,
        user.role == "admin" ? "course" : "user"
      ),
    enabled: selectedCourse !== "",
  });

  useEffect(() => {
    // if (selectedCourse === "") return;
    refetchAssessments();
  }, [selectedCourse]);

  // useEffect(() => {
  //   refetchAssessments();
  // }, []);

  if (isLoading) {
    return <Loading />;
  }

  const navigationHandler = (link, title) => {
    dispatch({
      type: "ASSESSMENT_TITLE",
      payload: title,
    });
    navigate(link);
  };

  return (
    <div className="container">
      <div className="center">
        <h2>Assessment Results</h2>
      </div>
      <div className="grid-wrapper">
        <div className="container">
          <div className="d-flex">
            <BackButton />

            {user.role === "teacher" && (
              <NavLink
                to={"/dashboard/teacher/assessment/create"}
                className="btn btn-info"
              >
                <FaPlusSquare />
                Add
              </NavLink>
            )}
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
                    <option
                      key={i}
                      value={
                        user.role === "admin"
                          ? course?._id
                          : course?.course?._id
                      }
                    >
                      {`${
                        course?.courseTittle
                          ? course?.courseTittle
                          : course?.course?.courseTittle
                      } (${
                        course?.courseCode
                          ? course?.courseCode
                          : course?.course?.courseCode
                      })`}
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
                {isSuccess && assessments
                  ? assessments.map((assessment) => (
                      <div key={assessment._id} className="col-md-4">
                        <AssessmentCard
                          assessment={assessment}
                          isResult={true}
                          onResults={() =>
                            navigationHandler(
                              `/dashboard/${user.role}/results/${assessment._id}`,
                              assessment.assessmentTittle
                            )
                          }
                          onView={() =>
                            navigationHandler(
                              `/dashboard/teacher/assessment/${assessment._id}/view-questions`,
                              assessment.assessmentTittle
                            )
                          }
                          onAdd={() =>
                            navigationHandler(
                              `/dashboard/teacher/assessment/${assessment._id}/add-questions`,
                              assessment.assessmentTittle
                            )
                          }
                        />
                      </div>
                    ))
                  : selectedCourse && (
                      <div className="center">
                        <h2>No assessement found for the selected course</h2>
                      </div>
                    )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
