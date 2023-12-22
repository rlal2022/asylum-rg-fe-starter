import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './styles/styles.css';
import LoginButton from '../common/Auth0/LoginButton';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <h1>Welcome</h1>
        <LoginButton />
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        {user?.picture && (
          <img src={user.picture} alt={user?.name} className="profile-img" />
        )}
        <h2>{user?.name}</h2>
        <p>Username: {user?.nickname}</p>
        <button
          className="logout-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Sign Out
        </button>
      </div>
    )
  );
};

export default Profile;
