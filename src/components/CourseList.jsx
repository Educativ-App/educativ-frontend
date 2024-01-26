import '../assets/css/courseList.css'


const CourseList = () => {
  var courses = [
    {
      course_code: "MAT 304",
      course_title: "Geometry",
    },
    {
      course_code: "BHM 311",
      course_title: "Business Mgt.",
    },
    {
      course_code: "PIL 302",
      course_title: "Philosophy",
    },
    {
      course_code: "FIN 311",
      course_title: "Fin. Analysis",
    },
  ];
  return (
    <div className="course-list">
      <h3>My Courses</h3>
      <table>
        <tr>
          <th>SN</th>
          <th>Course Code</th>
          <th>Course</th>
        </tr>
        {courses.map((course, i) => (
          <tr key={i}>
            <td align="left">{`${i + 1}.`}</td>
            <td align="left">{course.course_code}</td>
            <td align="left">{course.course_title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CourseList;
