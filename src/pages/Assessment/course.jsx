import Loading from "../../components/Loading";
import { getTeacherAssessmentByCourse } from "../../service/courseService";
import {  useParams } from "react-router-dom";
import AssessmentCard from "../../components/AssessmentCard";
import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";

const Course = () => {
  let { courseId } = useParams();


  const [isLoading, setIsLoading] = useState(true);
  const [assessments, setAssessments] = useState([]);



  const getAssessments = async () => {
    const res = await getTeacherAssessmentByCourse(courseId);
    if (res) {
      setAssessments(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAssessments();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
        <BackButton/>

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
