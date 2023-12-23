// SignUpPage.tsx
import React from 'react';
import { authService } from '../api_service/api_methods'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import AuthForm from '../common_components/common_form';

// import { loginUser } from '../redux/authAction';// Import the API service

const SignUpPage: React.FC = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSignUp = async (data: { email: string; password: string }) => {
    try {
      const response = await authService.register(data.email, data.password);
      const { token } = response.data;

      if (token) {
        // dispatch(loginUser(token)); // Dispatch the token directly to loginUser
        dispatch(login({ token , email: data.password}));
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

    onSubmit={handleSignUp}
    buttonText="Sign Up"
  />
  );
};

export default SignUpPage;
