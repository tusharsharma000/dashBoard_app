// Navbar.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.auth.token);
  const emailData = useSelector((state: RootState) => state.auth.email);
  const profilePicture = useSelector((state: RootState) => state.auth.profilePicture);

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/"); // Dispatch the logout action to clear the token
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
  <div className="container mx-auto flex justify-between items-center">
    {token ? (
      <div className="flex items-center">
        <Link to="/">
          <img
            src={profilePicture!}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        </Link>
        <span className="ml-2">{emailData}</span>
      </div>
    ) : null}
    <div className="space-x-4 flex items-center">
      {!token ? (
        <Link to="/" className="ml-auto">
          Sign In
        </Link>
      ) : null}
      {!token ? (
        <Link to="/signup" className="hover:underline">
          Sign Up
        </Link>
      ) : null}
      {token ? (
        <button className="hover:underline text-blue-500 ml-auto" onClick={handleSignOut}>
          Sign out
        </button>
      ) : null}
    </div>
  </div>
</nav>

  );
};

export default Navbar;
