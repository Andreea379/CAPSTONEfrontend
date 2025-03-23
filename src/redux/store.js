import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./reducers/registrationReducer";
import loginReducer from "./reducers/loginReducer";
import newArticleReducer from "./reducers/newArticleReducer";

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  newArticle: newArticleReducer
});

const store = configureStore({
  reducer: rootReducer
});
export default store;
