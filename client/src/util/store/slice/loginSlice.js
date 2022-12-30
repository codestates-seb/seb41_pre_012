import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { username: null, email: null },
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginError } = loginSlice.actions;
export default loginSlice;
