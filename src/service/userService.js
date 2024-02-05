import { toast } from "react-toastify";
import axiosClient from "../axios";

const getTeachersRecord = async () => {
  try {
    const res = await axiosClient.get(`teachers/records`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};
const getStudentRecord = async () => {
  try {
    const res = await axiosClient.get(`students/records`);
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

const createUser = async (user) => {
  try {
    const res = await axiosClient.post(`users`, user);
    toast(res.data.message, { type: "success", autoClose: 2000 });
    return res.data;
  } catch (error) {
    if (error.response.status) {
      toast(error.response.data.error, { type: "error", autoClose: 5000 });
    }
  }
};

export { getTeachersRecord, getStudentRecord , createUser};
