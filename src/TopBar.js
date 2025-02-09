import React from 'react';
import { useMsal } from '@azure/msal-react';
import { useAccount } from '@azure/msal-react';

const TopBar = ({ handleLogout }) => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  return (
    <div className="top-bar">
      {account && (
        <div className="user-info">
          <img src={`https://graph.microsoft.com/v1.0/me/photo/$value`} alt="Profile" className="profile-pic" />
          <span className="user-name">{account.name}</span>
        </div>
      )}
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default TopBar;