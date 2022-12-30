import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;
