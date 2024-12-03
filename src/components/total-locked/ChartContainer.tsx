import React from 'react';
import { Line } from 'react-chartjs-2';
import { useChartData } from '../../hooks/useChartData';
import { chartData, chartOptions } from '../../config/chartConfig';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartContainer: React.FC = () => {
  const currentChartData = useChartData(chartData);

  return (
    <article className="article-container-style h-[240px] w-full rounded-xl px-3 py-5">
      <Line data={currentChartData} options={chartOptions} />
    </article>
  );
};

export default ChartContainer;
