import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  CALL_NEW_GET
} from "../actions/profile";
const initialState = {
  profileLoading: false,
  profile: [],
  profileError: null,

  updateProfileLoading: false,
  updateProfile: [],
  updateProfileError: null,

  callNewGet: false
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        profileLoading: true
      };

    case PROFILE_SUCCESS:
      return {
        ...state,
        profileLoading: false,
        profile: [action.payload],
        profileError: null
      };

    case PROFILE_FAILURE:
      return {
        ...state,
        profileLoading: false,
        profileError: action.payload
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        updateProfileLoading: true
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfileLoading: false,
        updateProfile: [action.payload],
        updateProfileError: null
      };

    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updateProfileLoading: false,
        updateProfileError: action.payload
      };
    case CALL_NEW_GET:
      return {
        ...state,
        callNewGet: action.payload
      };

    default:
      return state;
  }
};

export default profileReducer;
