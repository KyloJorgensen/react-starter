import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { useAuth } from '../context/auth';

const Layout = ({ children }) => {
  const { logout } = useAuth();
  return (
    <div className="app">
      <header className="header">
        <div className="header__inner">
          <button className="button button__hollow" onClick={logout}>
            Sign out
          </button>
        </div>
      </header>
      <div className="main">
        <div className="menu">
          <Link to="/dashboard" className="menu__link">
            <div className="menu__item">Dashboard</div>
          </Link>
          <Link to="/account-info" className="menu__link">
            <div className="menu__item">Account Info</div>
          </Link>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Layout.getDefaultProps = () => {
  return {
    children: null,
  };
};

export default Layout;
