import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  CALL_NEW_GET,
  ARTICLE_PROFILE_REQUEST,
  ARTICLE_PROFILE_SUCCESS,
  ARTICLE_PROFILE_FAILURE
} from "../actions/profile";
const initialState = {
  profileLoading: false,
  profile: [],
  profileError: null,

  updateProfileLoading: false,
  updateProfile: [],
  updateProfileError: null,

  callNewGet: false,

  articleProfileLoading: false,
  articleProfile: [],
  articleProfileError: null
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
    case ARTICLE_PROFILE_REQUEST:
      return {
        ...state,
        articleProfileLoading: true
      };

    case ARTICLE_PROFILE_SUCCESS:
      return {
        ...state,
        articleProfileLoading: false,
        articleProfile: [action.payload],
        articleProfileError: null
      };

    case ARTICLE_PROFILE_FAILURE:
      return {
        ...state,
        articleProfileLoading: false,
        articleProfileError: action.payload
      };

    default:
      return state;
  }
};

export default profileReducer;
