import React from "react";
import Layout from "../components/layout";
import { useUser } from "../context/user";

const AccountInfo = () => {
  const user = useUser();
  return (
    <Layout>
      <div className="account-info">
        <h1>Account Info</h1>
        <div>
          <img src={user.avatar} alt={user.name} />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </Layout>
  );
}

export default AccountInfo;
