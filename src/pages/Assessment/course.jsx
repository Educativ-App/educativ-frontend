import Loading from "../../components/Loading";
import {
  getAssessmentByCourse,
  getTeacherAssessmentByCourse,
} from "../../service/courseService";
import { useParams } from "react-router-dom";
import AssessmentCard from "../../components/AssessmentCard";
import BackButton from "../../components/BackButton";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Contexts/AuthContext";

const Course = () => {
  const { authUser: user } = useAuth();
  let { courseId } = useParams();
  let assessments;
  let isLoading;
  let isSuccess;
  let isFetching;

  if (user && user.role === "teacher") {
    const {
      data,
      isLoading: teacherLoading,
      isSuccess: teacherSuccess,
      isFetching: teacherFetching,
    } = useQuery({
      queryKey: ["teacher-assessments"],
      queryFn: () => getTeacherAssessmentByCourse(courseId),
    });

    assessments = data;
    isLoading = teacherLoading;
    isSuccess = teacherSuccess;
    isFetching = teacherFetching;
  }

  if (user && user.role === "admin") {
    const {
      data,
      isLoading: adminLoading,
      isSuccess: adminSuccess,
    } = useQuery({
      queryKey: ["course-assessments"],
      queryFn: () => getAssessmentByCourse(courseId),
    });

    assessments = data;
    isLoading = adminLoading;
    isSuccess = adminSuccess;
  }

  if (isLoading && isFetching) {
    return <Loading />;
  }

  if (!isFetching && isSuccess) {
    return (
      <div className="container">
        <BackButton />

        <div className="grid-wrapper">
          <div className="container">
            <div className="row">
              {assessments ? (
                assessments.map((assessment) => (
                  <div key={assessment._id} className="col-md-4">
                    <AssessmentCard assessment={assessment} />
                  </div>
                ))
              ) : (
                <p>No Assigned Course</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <BackButton />

        <div className="center">
          <h3>No assessment for the selected course</h3>
        </div>
      </div>
    );
  }
};

export default Course;
