import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./reducers/registrationReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer
});

const store = configureStore({
  reducer: rootReducer
});
export default store;
