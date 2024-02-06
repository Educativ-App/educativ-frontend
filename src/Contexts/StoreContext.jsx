import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const StoreContext = createContext();

const initialState = {
  assessmentTitle: "",
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
