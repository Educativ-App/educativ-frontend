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
    case "SET_ASSESSMENT_INFO":
      return {
        ...state,
        assessment_info: action.payload,
      };
    case "SET_QUEST_LENGTH":
      return {
        ...state,
        questionLength: action.payload,
      };

    default:
      return state;
  }
};
