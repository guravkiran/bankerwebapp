import React from 'react';
import { useMsal } from '@azure/msal-react';

const SignOut = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup().catch(e => {
      console.error(e);
    });
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default SignOut;