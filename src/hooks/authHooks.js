import axiosClient from "../axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export function useAuthService() {
  const loginUser = async (email, password) => {
    try {
      var res = await axiosClient.post("users/login", { email, password });
      var data = jwtDecode(res.data.token);
      localStorage.setItem("token", res.data.token);
      // const user = await getUserById(data.user);
      const user = data.user;
      return user;
    } catch (error) {
      if (error.response.status) {
        toast(error.response.data.error, { type: "error", autoClose: 5000 });
      }
    }
  };

  const getUserById = async (user) => {
    console.log(user);
    try {
      var url = "users";
      switch (user.role) {
        case "student":
          url = "students";
          break;
        case "admin":
          url = "users";
          break;
        case "teacher":
          url = "teachers";
          break;
      }

      const res = await axiosClient.get(`${url}/${user.userId}`);

      return res.data;
    } catch (error) {
      if (error.response.status) {
        toast(error.response.data.error);
      }
    }
  };

  return { loginUser };
}
