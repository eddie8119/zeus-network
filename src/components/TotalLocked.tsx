import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const months = ['SEP', 'OCT', 'NOV', 'DEC'];

const data = {
  labels: months,
  datasets: [
    {
      label: 'BTC',
      data: [25, 28, 25, 25],
      borderColor: '#FFB800',
      backgroundColor: '#FFB800',
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: '$ZEUS',
      data: [25, 29, 26, 25],
      borderColor: '#FF00FF',
      backgroundColor: '#FF00FF',
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'start' as const,
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        padding: 20,
        color: '#A3A3A3',
      },
    },
    title: {
      display: true,
      text: 'Total $ZEUS, $BTC locked',
      align: 'start' as const,
      color: '#FFFFFF',
      font: {
        size: 14,
        weight: '500',
      },
      padding: {
        bottom: 30,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#A3A3A3',
      },
    },
    y: {
      grid: {
        color: '#27272A',
      },
      ticks: {
        color: '#A3A3A3',
      },
    },
  },
};

const TotalLocked: React.FC = () => {
  return (
    <div className="article-container-style flex h-[240px] w-full flex-col p-4">
      {/* <Line data={data} options={options} /> */}
    </div>
  );
};

export default TotalLocked;
