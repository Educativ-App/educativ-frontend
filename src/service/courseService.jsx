import { toast } from "react-toastify";
import axiosClient from "../axios";

const getTeacherCourses = async () => {
  try {
    const res = await axiosClient.get("teacher-courses/teacher");
    return res.data;
  } catch (error) {
    if (error.response.status) {
      // toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const createAssessment = async (data) => {
  try {
    const res = await axiosClient.post("assessments", data);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const createQuestion = async (rows) => {
  try {
    const postRequests = rows.map((data) =>
      axiosClient.post("questions", data)
    );
    const res = Promise.all(postRequests)
      .then((responses) => {
        // Handle responses here
        responses.forEach((response) => {
          console.log(response.data);
        });
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });

    return res;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getTeacherAssessmentByCourse = async (courseId) => {
  try {
    const res = await axiosClient.get(`assessments/user/${courseId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const getQuestionsByAssessment = async (assessmentId) => {
  try {
    const res = await axiosClient.get(`questions/assessment/${assessmentId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const updateQuestion = async (question) => {
  try {
    const res = await axiosClient.put(`questions`, question);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

export {
  getTeacherCourses,
  createAssessment,
  getTeacherAssessmentByCourse,
  createQuestion,
  getQuestionsByAssessment,
  updateQuestion,
};
