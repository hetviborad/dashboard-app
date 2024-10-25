import React from 'react';
import EarningsOverview from './EarningsOverview';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import Payments from './Payments';

const Dashboard = () => {
  return (
    <div className="container my-4">
      <h1>Dashboard</h1>
      <EarningsOverview />
      <h2>Projects</h2>
      <ProjectForm />
      <ProjectList />
      <Payments />
    </div>
  );
};

export default Dashboard;
