import React from 'react';
import { Router, Redirect } from '@reach/router';
import Dashboard from './screens/Dashboard';
import AccountInfo from './screens/AccountInfo';
import NotFound from './screens/NotFound';

function AuthenticatedApp() {
  return (
    <div>
      <Routes />
    </div>
  );
}

function RedirectHome() {
  return <Redirect to="/dashboard" noThrow />;
}

function Routes() {
  return (
    <Router>
      <RedirectHome path="/" />
      <Dashboard path="/dashboard" />
      <AccountInfo path="/account-info" />
      <NotFound default />
    </Router>
  );
}

export default AuthenticatedApp;
