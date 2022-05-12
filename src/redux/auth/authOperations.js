import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from 'services/auth-api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await authAPI.registerUser(credentials);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await authAPI.logInUser(credentials);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logOutUser();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = authAPI.token;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const response = await authAPI.refreshCurrentUser();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
