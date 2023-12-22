import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AuthComponent = () => {
  return (
    <div>
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default AuthComponent;
