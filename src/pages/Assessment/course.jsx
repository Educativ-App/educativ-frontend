import Loading from "../../components/Loading";
import { getTeacherAssessmentByCourse } from "../../service/courseService";
import { useParams } from "react-router-dom";
import AssessmentCard from "../../components/AssessmentCard";
import BackButton from "../../components/BackButton";
import { useQuery } from "@tanstack/react-query";

const Course = () => {
  let { courseId } = useParams();

  const { data: assessments, isLoading } = useQuery({
    queryKey: ["teacher-assessments"],
    queryFn: () => getTeacherAssessmentByCourse(courseId),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!assessments.length) {
    return (
      <div>
        <BackButton />

        <div className="center">
          <h3>No assessment for the selected course</h3>
        </div>
      </div>
    );
  }

  return (
    <>
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
    </>
  );
};

export default Course;
