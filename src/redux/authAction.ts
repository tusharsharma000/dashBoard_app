import { login, logout } from './authSlice';
import { Dispatch } from 'redux';

// export const loginUser = (token: string) => (dispatch: Dispatch) => {
//   if (token) {
//     dispatch(login({ token })); // Dispatch an object containing the 'token' property
//   } else {
//     console.error('Token not found.');
//   }
// };

export const logoutUser = () => (dispatch: Dispatch) => {
  dispatch(logout());
};
