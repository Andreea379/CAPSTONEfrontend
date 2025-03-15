import { LOGIN } from "../actions/login";

const initialState = {
  token: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
