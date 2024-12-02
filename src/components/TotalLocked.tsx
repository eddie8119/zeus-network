import React from 'react';
import { Line } from 'react-chartjs-2';
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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
      align: 'start' as const,
      labels: {
        boxWidth: 8,
        boxHeight: 8,
        padding: 20,
        color: '#9CA0B0',
        font: {
          size: 11,
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#9CA0B0',
        font: {
          size: 11,
        },
      },
    },
    y: {
      grid: {
        color: '#2B2B33',
      },
      ticks: {
        stepSize: 1,
        color: '#9CA0B0',
        font: {
          size: 11,
        },
      },
    },
  },
};

const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      label: 'ZEUS',
      data: [26, 27, 27, 26, 27, 26, 27, 29, 27, 26, 27, 28],
      borderColor: '#FD83FF',
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'BTC',
      data: [27, 26, 27, 26, 27, 28, 27, 28, 26, 27, 28, 28],
      borderColor: '#FFEB83',
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const TotalLocked: React.FC = () => {
  return (
    <section className="mt-[48px] grid w-full grid-cols-1 md:mt-8">
      <header className="mb-3 p-2">
        <h2 className="text-[18px] font-medium leading-6 text-text-primary">
          Total $ZEUS , $BTC Locked
        </h2>
      </header>
      <div className="outer-container-style flex w-full flex-col p-3 pt-4">
        <article className="article-container-style flex h-[240px] flex-col gap-3 p-4">
          <Line data={data} options={options} />
        </article>
      </div>
    </section>
  );
};

export default TotalLocked;
