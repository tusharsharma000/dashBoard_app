// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  email: string | null;
  profilePicture: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  email : null,
  profilePicture: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string, email: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.email = null;
      state.profilePicture = null;
    },
    profile: (state, action: PayloadAction<{ profilePicture:string }>) => {
      state.profilePicture = action.payload.profilePicture;
    },
  },
});

export const { login, logout, profile } = authSlice.actions;
export default authSlice.reducer;
