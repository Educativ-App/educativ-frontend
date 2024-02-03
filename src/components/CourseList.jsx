import { useQuery } from "@tanstack/react-query";
import "../assets/css/courseList.css";
import { getTeacherCourses } from "../service/courseService";

const CourseList = () => {
  const { data: courses } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });
  // var courses = [
  //   {
  //     course_code: "MAT 304",
  //     course_title: "Geometry",
  //   },
  //   {
  //     course_code: "BHM 311",
  //     course_title: "Business Mgt.",
  //   },
  //   {
  //     course_code: "PIL 302",
  //     course_title: "Philosophy",
  //   },
  //   {
  //     course_code: "FIN 311",
  //     course_title: "Fin. Analysis",
  //   },
  // ];
  return (
    <div className="course-list">
      <h3>My Courses</h3>
      <table>
        <tr>
          <th>SN</th>
          <th>Course Code</th>
          <th>Course</th>
        </tr>
        {/* {courses.map((course, i) => (
          <tr key={i}>
            <td align="left">{`${i + 1}.`}</td>
            <td align="left">{course.course_code}</td>
            <td align="left">{course.course_title}</td>
          </tr>
        ))} */}
        {courses && courses.length > 0 ? (
          courses?.map((course, i) => (
            <tr key={course.course._id}>
              <td align="left">{`${i + 1}.`}</td>
              <td align="left">{course.course.courseCode}</td>
              <td align="left">{course.course.courseTittle}</td>
            </tr>
          ))
        ) : (
          <p value="">No Assigned Courses</p>
        )}
      </table>
    </div>
  );
};

export default CourseList;
