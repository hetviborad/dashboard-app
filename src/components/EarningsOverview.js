import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const EarningsOverview = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Earnings',
        data: [1200, 1900, 3000, 500, 2300, 1500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mb-4">
      <h3>Earnings Overview</h3>
      <Bar data={data} options={{ responsive: true }} />
      <div className="mt-3">
        <h5>Total Earnings: $10,000</h5>
      </div>
    </div>
  );
};

export default EarningsOverview;
