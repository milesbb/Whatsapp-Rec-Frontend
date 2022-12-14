import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile.js";


const comboReducer = combineReducers({
  loadedProfile: profileReducer,
});

const store = configureStore({
  reducer: comboReducer,
});

export default store;
