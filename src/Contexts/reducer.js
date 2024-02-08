export const reducer = (state, action) => {
  switch (action.type) {
    case "ASSESSMENT_TITLE":
      return {
        ...state,
        assessmentTitle: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        user_info: action.payload,
      };
    case "SET_DURATION":
      return {
        ...state,
        assessmentDuration: action.payload,
      };

    default:
      return state;
  }
};
