// DashboardPage.tsx
import React, { useEffect, useState } from 'react';
import { authService } from '../api_service/api_methods';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { profile } from '../redux/authSlice';



const DashboardPage: React.FC = () => {
  interface UserDto {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar:string;
  }
  
  const emailAddress = useSelector((state: RootState) => state.auth.email);
  const [userDetails, setUserDetails] = useState<UserDto>();
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authService.getUserList();
        if (emailAddress != null && response.data.data.length > 0) {
          const userDetails = response.data.data.find((data) => data.email === emailAddress);
          if (userDetails) {
            setUserDetails(userDetails);
            dispatch(profile({ profilePicture: userDetails.avatar }));
          }
        }
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };
  
    fetchData();
  }, [emailAddress, dispatch]);
  return (
    <div>
      <h1> {userDetails?.first_name} Welcome to the Dashboard!</h1>
    </div>
  );
};

export default DashboardPage;
