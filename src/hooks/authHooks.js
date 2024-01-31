import axiosClient from "../axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export function useAuthService() {
  const loginUser = async (email, password) => {
    try {
      var res = await axiosClient.post("users/login", { email, password });
      var data = jwtDecode(res.data.token);
      const user = await getUserById(data.user.userId);
      return user;
    } catch (error) {
      if (error.response.status) {
        toast(error.response.data.error, { type: "error" });
      }
    }
  };

  const getUserById = async (id) => {
    try {
      var res = await axiosClient.get(`users/${id}`);
      return res.data;
    } catch (error) {
      if (error.response.status) {
        toast(error.response.data.error);
      }
    }
  };

  return { loginUser };
}
