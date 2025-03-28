import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./reducers/registrationReducer";
import loginReducer from "./reducers/loginReducer";
import newArticleReducer from "./reducers/newArticleReducer";
import profileReducer from "./reducers/profileReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  article: newArticleReducer,
  profile: profileReducer,
  search: searchReducer
});

const store = configureStore({
  reducer: rootReducer
});
export default store;
