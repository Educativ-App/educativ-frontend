import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { useAuth } from "./AuthContext";

const StoreContext = createContext();

const initialState = {
  courses: [],
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authUser: user } = useAuth();

  return (
    <StoreContext.Provider value={{ state, dispatch, user }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};

export default StoreProvider;
