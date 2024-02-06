import { useState } from "react";
import "../assets/css/courseList.css";
import { clsx } from "clsx";

var courses = [
  {
    course_code: "MAT 304",
    course_title: "Geometry",
    due: "16-01-2024",
    status: true,
  },
  {
    course_code: "BHM 311",
    course_title: "Business Mgt.",
    due: "16-01-2024",
    status: false,
  },
  {
    course_code: "PIL 302",
    course_title: "Philosophy",
    due: "16-01-2024",
    status: true,
  },
  {
    course_code: "FIN 311",
    course_title: "Fin. Analysis",
    due: "16-01-2024",
    status: false,
  },
];

const ExamList = () => {
  const [tab, setTab] = useState("test");
  return (
    <div className="course-list">
      <div className="tab">
        <div
          onClick={() => setTab("test")}
          className={clsx("tabs", tab == "test" && "active")}
        >
          <span>Assessments</span>
        </div>
        <div
          onClick={() => setTab("exam")}
          className={clsx("tabs", tab == "exam" && "active")}
        >
          <span>Exam Schedule</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Course Code</th>
            <th>Course</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, i) => (
            <tr key={i}>
              <td align="left">{`${i + 1}.`}</td>
              <td align="left">{course.course_code}</td>
              <td align="left">{course.course_title}</td>
              <td align="left">{course.due}</td>
              <td align="left">
                <div
                  className={clsx(
                    "status-box",
                    course.status ? "bg-done" : "bg-pending"
                  )}
                >
                  {course.status ? "Done" : "Pending"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamList;
