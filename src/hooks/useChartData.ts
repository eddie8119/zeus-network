import { useState, useEffect } from 'react';
import { ChartData } from '../types/chart';

export const useChartData = (initialData: ChartData) => {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;      
      if (isMobile) {
        // for mobile, only show last 4 months
        setChartData({
          labels: initialData.labels.slice(8),
          datasets: initialData.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.slice(8),
          })),
        });
      } else {
        // for desktop, show all months
        setChartData(initialData);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialData]);

  return chartData;
};
