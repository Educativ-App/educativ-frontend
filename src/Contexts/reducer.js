export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COURSES":
      return {
        ...state,
        courses: action.payload,
      };

    default:
      return state;
  }
};
