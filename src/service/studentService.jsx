import { toast } from "react-toastify";
import axiosClient from "../axios";

const getAllStudents = async () => {
  try {
    const res = await axiosClient.get(`students`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const getStudentsByCourse = async (courseId) => {
  try {
    const res = await axiosClient.get(`students/course/${courseId}`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

export { getAllStudents, getStudentsByCourse };
