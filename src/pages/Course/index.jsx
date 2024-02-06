import { useQuery } from "@tanstack/react-query";
import Button from "../../components/Button";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getTeacherCourses } from "../../service/courseService";
import CourseCard from "../../components/CourseCard";
import Loading from "../../components/Loading";

const Index = () => {
  const navigate = useNavigate();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="spacing-wrapper mb-2 ">
        <Button
          text="Back"
          className={"m-2"}
          onClick={() => {
            navigate(-1);
          }}
          icon={<MdArrowBackIosNew />}
        />
      </div>

      <div className="grid-wrapper">
        <div className="container">
          <div className="row">
            {courses ? (
              courses.map((course) => (
                <div key={course.course._id} className="col-md-4">
                  <CourseCard
                    courseName={course.course.courseTittle}
                    courseTitle={course.course.courseCode}
                    onClick={() =>
                      navigate(
                        `/dashboard/teacher/assessment/${course.course._id}`
                      )
                    }
                  />
                </div>
              ))
            ) : (
              <div className="center">
                <h3>No Assigned Course</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
