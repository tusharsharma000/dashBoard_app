
// import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './components/signin';
import SignUpPage from './components/signup';
import DashboardPage from './components/dashboard';
import Navbar from './components/navbar';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
// import PrivateRoute from './components/private_dashboard_route';


function App() {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <Router>
    <Navbar/>
    <Routes>
    {token && (
          <Route
            path="/"
            element={
              <Navigate to="/dashboard" replace />
            }
          />
          
        )}
        {token && (
          <Route
            path="/signup"
            element={
              <Navigate to="/dashboard" replace />
            }
          />
          
        )}
        {!token && (
          <Route
            path="/dashboard"
            element={
              <Navigate to="/" replace />
            }
          />
          
        )}
      <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {token ? (
          <Route path="/dashboard" element={<DashboardPage />} />
        ) : (
          <Route path="/" element={<SignInPage />} />
        )}
    
    </Routes>
  </Router>
  );
}

export default App;
