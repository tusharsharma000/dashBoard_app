// Inside reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer, // Add your reducers here
  // Add other reducers here if needed
});

export default rootReducer;
