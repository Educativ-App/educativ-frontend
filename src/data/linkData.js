// TEACHERS LINK
export const sideBarLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "My Dashboard",
    link: "dashboard",
  },
  {
    title: "My Courses",
    link: "teacher/courses",
  },
  {
    title: "My Assessments",
    link: "teacher/assessment",
  },

  {
    title: "Settings",
    link: "settings",
    disabled: true,
  },
  {
    title: "Log out",
    type: "button",
  },
];

// ADMIN LINK
export const adminLinks = [
  {
    title: "Home",
    link: "/",
    type: "link",
  },
  {
    title: "My Dashboard",
    link: "dashboard",
    type: "link",
  },
  {
    title: "Teachers",
    link: "admin/teachers",
    type: "link",
  },
  {
    title: "Courses",
    link: "admin/courses",
    type: "link",
  },
  {
    title: "Log out",
    type: "button",
  },
];

// STUDENT LINK
export const studentLinks = [
  {
    title: "Home",
    link: "/",
    type: "link",
  },
  {
    title: "My Dashboard",
    link: "dashboard",
    type: "link",
  },
  {
    title: "Quizzes",
    link: "students/quiz",
    type: "link",
  },
  {
    title: "Courses",
    link: "students/courses",
    type: "link",
    disabled: true,
  },
  {
    title: "Log out",
    type: "button",
  },
];
