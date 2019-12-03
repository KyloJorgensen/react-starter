import React from 'react';
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

export default AppProviders;
