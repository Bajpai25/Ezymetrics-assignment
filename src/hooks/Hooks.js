import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const useChart = (config) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [config]);

  return chartRef;
};