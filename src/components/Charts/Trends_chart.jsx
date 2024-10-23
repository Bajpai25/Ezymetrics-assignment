import React from 'react';
import { useChart } from '../../hooks/Hooks';

 const  Trends_chart = ({ data }) => {
  const config = {
    type: 'line',
    data: {
      labels: data.map(d => d.month),
      datasets: [
        {
          label: 'New Leads',
          data: data.map(d => d.newLeads),
          borderColor: '#0088FE',
          tension: 0.1
        },
        {
          label: 'Converted',
          data: data.map(d => d.converted),
          borderColor: '#00C49F',
          tension: 0.1
        },
        {
          label: 'Lost',
          data: data.map(d => d.lost),
          borderColor: '#FF8042',
          tension: 0.1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  };

  const chartRef = useChart(config);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Lead Generation Trend</h3>
      <div className="h-72">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};
export default Trends_chart