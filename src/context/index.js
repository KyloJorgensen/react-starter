import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { AuthProvider } from './auth';
import { UserProvider } from './user';
import theme from '../theme';

function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AppProviders.getDefaultProps = () => {
  return {
    children: null,
  };
};

export default AppProviders;
