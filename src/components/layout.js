import React from "react";
import { Link } from "@reach/router";
import { useAuth } from "../context/auth";

function Layout({ children }) {
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
            <div className="menu__item">
              Dashboard
            </div>
          </Link>
          <Link to="/account-info" className="menu__link">
            <div className="menu__item">
              Account Info
            </div>
          </Link>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
