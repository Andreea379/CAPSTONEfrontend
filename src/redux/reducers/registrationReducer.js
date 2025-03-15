import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions/registration";

const initialState = {
  loading: false,
  user: [],
  error: null
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [...state.user, action.payload],
        error: null
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default registrationReducer;
