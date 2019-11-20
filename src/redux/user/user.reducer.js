import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, aciton) => {
  switch (aciton.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: aciton.palyload
      };

    default:
      return state;
  }
};

export default userReducer;
