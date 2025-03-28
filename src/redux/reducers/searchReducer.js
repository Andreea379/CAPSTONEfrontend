import {
  FIRSTNAME_PROFILE_REQUEST,
  FIRSTNAME_PROFILE_SUCCESS,
  FIRSTNAME_PROFILE_FAILURE
} from "../actions/search";
const initialState = {
  firstnameProfileLoading: false,
  firstnameProfiles: [],
  firstnameProfilesError: null
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRSTNAME_PROFILE_REQUEST:
      return {
        ...state,
        firstnameProfileLoading: true,
        firstnameProfilesError: null
      };
    case FIRSTNAME_PROFILE_SUCCESS:
      return {
        ...state,
        firstnameProfileLoading: false,
        firstnameProfiles: action.payload
      };
    case FIRSTNAME_PROFILE_FAILURE:
      return {
        ...state,
        firstnameProfileLoading: false,
        firstnameProfilesError: action.payload
      };

    default:
      return state;
  }
};
export default searchReducer;
