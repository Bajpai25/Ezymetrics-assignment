import React from 'react';
import { useChart } from '../../hooks/Hooks';

 const Leads_chart = ({ data }) => {
  const config = {
    type: 'doughnut',
    data: {
      labels: data.map(d => d.name),
      datasets: [{
        data: data.map(d => d.value),
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  };

  const chartRef = useChart(config);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Lead Sources Distribution</h3>
      <div className="h-72">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};
export default Leads_chart