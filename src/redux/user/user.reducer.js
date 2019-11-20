const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, aciton) => {
  switch (aciton.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: aciton.palyload
      };

    default:
      return state;
  }
};

export default userReducer;
