import { useQuery } from "@tanstack/react-query";
import "../assets/css/courseList.css";
import { getTeacherCourses } from "../service/courseService";

const CourseList = () => {
  const { data: courses } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });

  return (
    <div className="course-list">
      <h3>My Courses</h3>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Course Code</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {courses && courses?.length > 0 ? (
            courses?.map((course, i) => (
              <tr key={i}>
                <td align="left">{`${i + 1}.`}</td>
                <td align="left">{course.course?.courseCode}</td>
                <td align="left">{course.course?.courseTittle}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td value="">No Assigned Courses</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
