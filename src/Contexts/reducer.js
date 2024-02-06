export const reducer = (state, action) => {
  switch (action.type) {
    case "ASSESSMENT_TITLE":
      return {
        ...state,
        assessmentTitle: action.payload,
      };

    default:
      return state;
  }
};
