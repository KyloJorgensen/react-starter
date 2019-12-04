import React from 'react';
import Layout from '../components/layout';
import { useUser } from '../context/user';

const AccountInfo = () => {
  const { avatar, name, email } = useUser();
  return (
    <Layout>
      <div className="account-info">
        <h1>Account Info</h1>
        <div>
          <img src={avatar} alt={name} />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </Layout>
  );
};

export default AccountInfo;
