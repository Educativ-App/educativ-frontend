import Profile from "../../components/Profile";
import "../../assets/css/TeacherDashboard.css";
import DashboardCalendar from "../../components/Calendar";
import CourseList from "../../components/CourseList";
import ExamList from "../../components/ExamList";
import TaskTab from "../../components/TaskTab";
import testBoard from "../../assets/images/testboard.png";
import gradeBook from "../../assets/images/grade book.png";
import penGrade from "../../assets/images/grade_book.png";

var user = {
  name: "Monday Oshodi",
  faculty: "Management Science",
  dept: "Business Administration",
  staff_no: "150203031",
  session: "2023/24",
  semester: "First",
  role: "teacher",
};

var tasks = [
  {
    pre: "",
    task: "Test",
    image: testBoard,
    colour: "gradient",
    links: [
      {
        text: "Create a new test",
        url: "#",
      },
      {
        text: "Manage Test",
        url: "#",
      },
    ],
  },
  {
    pre: "",
    task: "Result",
    image: gradeBook,
    colour: "gradient",
    links: [
      {
        text: "Create New Assessment",
        url: "#",
      },
      {
        text: "Manage Assessment",
        url: "#",
      },
    ],
  },
  {
    pre: "",
    task: "Grades",
    image: penGrade,
    colour: "gradient",
    links: [
      {
        text: "View Results",
        url: "#",
      },
      {
        text: "Print Results",
        url: "#",
      },
    ],
  },
];

const TeacherDashBoard = () => {
  return (
    <>
      <div className="d-grid">
        <div id="item-0">
          <div className="teacher">
            {tasks.map((task, i) => (
              <div key={i} className="teacher-tasks mini-grid">
                <div id="item-0">
                  <TaskTab
                    prefix={task.pre}
                    task={task.task}
                    image={task.image}
                    colour={task.colour}
                  />
                </div>

                <ul id="item-1">
                  {task.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div id="item-1">
          <div className="col">
            <Profile img="https://i.pravatar.cc/200" user={user} />
            <DashboardCalendar />
          </div>
        </div>
        <div id="item-2">
          <ExamList />
        </div>
        <div id="item-3">
          <CourseList />
        </div>
      </div>
    </>
  );
};

export default TeacherDashBoard;
