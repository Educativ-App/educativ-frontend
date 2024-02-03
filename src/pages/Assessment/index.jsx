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
    <div>
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

      <div>
        <h4>Select a course to view assessment</h4>

        <div>
          <label htmlFor="courseId">Course ID:</label>
          <select
            id="courseId"
            name="courseId"
            // value={formData.courseId}
            // onChange={handleChange}
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
            {/* Add your course options dynamically based on your data */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Index;
