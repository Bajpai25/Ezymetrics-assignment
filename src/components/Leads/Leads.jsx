import React, { useState } from 'react';
import Trends_chart from "../Charts/Trends_chart";
import Leads_chart from "../Charts/Leads_chart";
import Report_filter from "../Filters/Report_filter";
import Summary from "../Metrics/Summary";
import Export_data from "../Export/Export_data";
import Dummy_data from "../data/Dummy_data";
import Helper from "../../utils/Helper";

// Set default prop value using destructuring
const Leads = ({ type = 'Leads Analytics' }) => {
  const [isLoading, setIsLoading] = useState('');
  const [filters, setFilters] = useState({
    dateRange: 'last30',
    reportType: 'all'
  });
  
  const exportHelper = Helper(Dummy_data);
  
  const handleExport = async (exportType) => {
    setIsLoading(exportType);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      switch(exportType) {
        case 'csv':
          await exportHelper.generateCSV();
          break;
        case 'pdf':
          await exportHelper.generatePDF();
          break;
        default:
          console.log('Invalid export type');
      }
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsLoading('');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex flex-wrap gap-6 justify-between items-center">
        <h1 className="text-2xl font-bold">
          {type}  {/* type will always have a value due to default prop */}
        </h1>
        <Export_data
          onExport={handleExport}
          isLoading={isLoading}
        />
      </div>

      {type !== 'Leads Report' && (
        <div className='flex flex-col gap-6'>
          <Report_filter onFilterChange={setFilters} />
          <Summary data={Dummy_data} />
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Trends_chart data={Dummy_data.monthly} />
        <Leads_chart data={Dummy_data.sources} />
      </div>
    </div>
  );
};

export default Leads;