import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/login";

const initialState = {
  loading: false,
  jwt: [],
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return { ...state, jwt: action.payload, loading: false, error: null };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
