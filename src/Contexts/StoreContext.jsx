import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { useAuth } from "./AuthContext";
import { getStudentRecord, getTeachersRecord } from "../service/userService";

const StoreContext = createContext();

const initialState = {
  assessmentTitle: "",
  user_info: {},
  assessment_info: {
    duration: null,
    maximumScore: null,
  },
  questionLength: 0,
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authUser: user } = useAuth();

  const getStudentDetails = async () => {
    try {
      const data = await getStudentRecord();
      dispatch({
        type: "ADD_USER",
        payload: data,
      });
    } catch (error) {
      return;
    }
  };
  const getTeacherDetails = async () => {
    try {
      const data = await getTeachersRecord();
      dispatch({
        type: "ADD_USER",
        payload: data,
      });
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    // STUDENT'S DETAILS
    if (user && user.role === "student") {
      getStudentDetails();
    }
    // TEACHER'S DETAILS
    if (user && user.role === "teacher") {
      getTeacherDetails();
    }
  }, [user]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};

export default StoreContextProvider;
