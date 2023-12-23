// SignInPage.tsx
import React from 'react';
import { authService } from '../api_service/api_methods'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import AuthForm from '../common_components/common_form';

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = async (data: { email: string; password: string }) => {
    try {
      const response = await authService.login(data.email, data.password);
      const { token } = response.data;

      if (token) {
        // dispatch(loginUser(token)); // Dispatch the token directly to loginUser
        dispatch(login({ token, email:data.email }));
        navigate('/dashboard');
      } else {
        console.error('Token not found in response.');
      }
    } catch (error) {
      console.error('Sign-up failed:', error);
      // Handle error scenarios (e.g., display error message to the user)
    }
  };
  return (
    <AuthForm
    // email={email}
    // password={password}
    // setEmail={setEmail}
    // setPassword={setPassword}
    onSubmit={handleSignIn}
    buttonText="Sign In"
  />
  );
};

export default SignInPage;
