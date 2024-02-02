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
import QuizPage from "./pages/QuizPage.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { AuthProvider } from "./Contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AdminProtectedRoutes from "./pages/protectedRoute/AdminProtectedRoutes.jsx";
import AllTeacher from "./pages/AllTeacher.jsx";
import AllCourses from "./pages/AllCourses.jsx";


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
      {
        path: "quiz",
        element: <QuizPage />,
      },
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
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer/>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
