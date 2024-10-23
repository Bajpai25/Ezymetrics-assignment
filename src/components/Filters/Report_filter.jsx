import React, { useState } from 'react';

 const Report_filter = ({ onFilterChange }) => {
  const [dateRange, setDateRange] = useState('last30');
  const [reportType, setReportType] = useState('all');

  const handleFilterChange = (type, value) => {
    if (type === 'date') setDateRange(value);
    if (type === 'type') setReportType(value);
    onFilterChange({ 
      dateRange: type === 'date' ? value : dateRange, 
      reportType: type === 'type' ? value : reportType 
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <select
            className="w-full p-2 border rounded-md"
            value={dateRange}
            onChange={(e) => handleFilterChange('date', e.target.value)}
          >
            <option value="last7">Last 7 Days</option>
            <option value="last30">Last 30 Days</option>
            <option value="last90">Last 90 Days</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Report Type
          </label>
          <select
            className="w-full p-2 border rounded-md"
            value={reportType}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="all">All Metrics</option>
            <option value="leads">Lead Generation</option>
            <option value="conversion">Conversion Rates</option>
            <option value="source">Lead Sources</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Report_filter