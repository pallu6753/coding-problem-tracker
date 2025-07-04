import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatsDashboard = ({ problems }) => {
  const statusCounts = {
    "To-Do": 0,
    "In Progress": 0,
    "Solved": 0
  };

  problems.forEach((p) => {
    statusCounts[p.status]++;
  });

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ["gray", "orange", "green"]
      }
    ]
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Problem Status Overview</h2>
      <Pie data={data} />
    </div>
  );
};

export default StatsDashboard;
