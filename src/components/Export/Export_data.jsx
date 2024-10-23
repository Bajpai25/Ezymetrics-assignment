import React from 'react';
import { Download, FileText, Loader } from 'lucide-react';

const Export_data = ({ onExport, isLoading }) => (
  <div className="flex gap-2">
    <button
      onClick={() => onExport('pdf')}
      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      disabled={isLoading}
    >
      {isLoading==='pdf' ? (
        <Loader className="animate-spin mr-2" size={16} />
      ) : (
        <FileText size={16} className="mr-2" />
      )}
      Export PDF
    </button>
    <button
      onClick={() => onExport('csv')}
      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      disabled={isLoading}
    >
      {isLoading==='csv' ? (
        <Loader className="animate-spin mr-2" size={16} />
      ) : (
        <Download size={16} className="mr-2" />
      )}
      Export CSV
    </button>
  </div>
);
export default Export_data