import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure this import is present to apply the styles

const SignIn = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).then(() => {
      navigate('/');
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <div className="signin-container">
      <button className="signin-button" onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default SignIn;