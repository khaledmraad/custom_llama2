import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./userInputReducer";

const store = configureStore({
  reducer: {
    userInput:userInputReducer
  }
});

export default store;