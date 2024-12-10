import { useEffect, useState } from 'react';
import { ChartData } from '../types/chart';
import { useIsMobile } from './useIsMobile';

export const useChartData = (initialData: ChartData) => {
  const [chartData, setChartData] = useState(initialData);
  const { isMobile } = useIsMobile();

  useEffect(() => {
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
  }, [isMobile, initialData]);

  return chartData;
};
