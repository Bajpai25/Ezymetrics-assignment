import React from 'react';

 const Summary = ({ data }) => {
  const totalLeads = data.monthly.reduce((sum, month) => sum + month.newLeads, 0);
  const totalConverted = data.monthly.reduce((sum, month) => sum + month.converted, 0);
  const conversionRate = ((totalConverted / totalLeads) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-sm text-gray-600">Total Leads</h3>
        <p className="text-2xl font-semibold">{totalLeads}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-sm text-gray-600">Converted Leads</h3>
        <p className="text-2xl font-semibold">{totalConverted}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-sm text-gray-600">Conversion Rate</h3>
        <p className="text-2xl font-semibold">{conversionRate}%</p>
      </div>
    </div>
  );
};
export default Summary