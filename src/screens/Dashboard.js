import React from "react";
import Layout from '../components/layout'
import { useUser } from '../context/user';

const Dashboard = () => {
  const user = useUser();

  return (
    <Layout>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome, {user.name}!</p>
      </div>
    </Layout>
  );
}

export default Dashboard;
