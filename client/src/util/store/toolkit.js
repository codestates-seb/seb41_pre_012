import axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";

// Action creators

const loginRequest = createAction("LOGIN_REQUEST");
const loginSuccess = createAction("LOGIN_SUCCESS");
const loginError = createAction("LOGIN_ERROR");

const registerRequest = createAction("REGISTER_REQUEST");
const registerSuccess = createAction("REGISTER_SUCCESS");
const registerError = createAction("REGISTER_ERROR");

// Async thunk

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post("http://localhost:3001/login", { username, password });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};

export const register = (username, password) => {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axios.post("http://localhost:3001/register", { username, password });
      dispatch(registerSuccess(response.data));
    } catch (error) {
      dispatch(registerError(error));
    }
  };
};

// Reducer

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginReducer = createReducer(initialState, {
  [loginRequest]: (state) => {
    state.loading = true;
  },
  [loginSuccess]: (state, action) => {
    state.user = action.payload;
    state.loading = false;
    state.error = null;
  },
  [loginError]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const registerReducer = createReducer(initialState, {
  [registerRequest]: (state) => {
    state.loading = true;
  },
  [registerSuccess]: (state, action) => {
    state.user = action.payload;
    state.loading = false;
    state.error = null;
  },
  [registerError]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
