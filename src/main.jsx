import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/grid.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./pages/layout/AuthLayout.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/SignUp.jsx";
import DashBoardLayout from "./pages/layout/DashBoardLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { AuthProvider } from "./Contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AdminProtectedRoutes from "./pages/protectedRoute/AdminProtectedRoutes.jsx";
import AllTeacher from "./pages/AllTeacher.jsx";
import AllCourses from "./pages/AllCourses.jsx";
import CoursesPage from "./pages/Course/index.jsx";
import AssessmentPage from "./pages/Assessment/index.jsx";
import AssessmentCreate from "./pages/Assessment/create.jsx";
import AssessmentCoursePage from "./pages/Assessment/course.jsx";
import AddQuestions from "./pages/Assessment/AddQuestions.jsx";
import ViewQuestions from "./pages/Assessment/ViewQuestions.jsx";
import Students from "./pages/Students/index.jsx";
import StoreContextProvider from "./Contexts/StoreContext.jsx";
import ResultPage from "./pages/Results/ResultPage";
import StudentAssessment from "./pages/Students/StudentAssessment.jsx";
import StudentTestPage from "./pages/Students/StudentTestPage.jsx";
import StudentGradePage from "./pages/Students/StudentGradePage.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    element: <DashBoardLayout />,
    path: "/dashboard",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      // ADMIN PAGES
      {
        path: "admin",
        element: <AdminProtectedRoutes />,
        children: [
          {
            path: "teachers",
            element: <AllTeacher />,
          },
          {
            path: "courses",
            element: <AllCourses />,
          },
          {
            path: "courses/assessment/:courseId",
            element: <AssessmentCoursePage />,
          },
        ],
      },
      // STUDENT PAGES
      {
        path: "students",
        children: [
          {
            path: "grade",
            element: <StudentGradePage />,
          },
          {
            path: "assessment",
            element: <StudentAssessment />,
          },
          {
            path: "assessment/:assId",
            element: <StudentTestPage />,
          },
        ],
      },

      // TEACHERS PAGES
      {
        path: "teacher",
        children: [
          {
            path: "courses",
            element: <CoursesPage />,
          },
          {
            path: "assessment",
            element: <AssessmentPage />,
          },
          {
            path: "students",
            element: <Students />,
          },
          {
            path: "results",
            element: <ResultPage />,
          },
          {
            path: "assessment/create",
            element: <AssessmentCreate />,
          },
          {
            path: "assessment/:courseId",
            element: <AssessmentCoursePage />,
          },
          {
            path: "assessment/:assessmentId/add-questions",
            element: <AddQuestions />,
          },
          {
            path: "assessment/:assessmentId/view-questions",
            element: <ViewQuestions />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StoreContextProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </StoreContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
