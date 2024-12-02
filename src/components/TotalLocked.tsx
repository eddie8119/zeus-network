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

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
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
        color: '#9CA0B0',
        font: {
          size: 11,
        },
      },
    },
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'ZEUS',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: '#7B61FF',
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'BTC',
      data: [8, 12, 6, 9, 4, 7],
      borderColor: '#F7931A',
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
          Total $ZEUS , $BTC locked
        </h2>
      </header>
      <div className="outer-container-style flex w-full flex-col p-3 pt-4">
        <article className="article-container-style flex h-[240px] flex-col gap-3 p-4">
          {/* <Line data={data} options={options} /> */}
        </article>
      </div>
    </section>
  );
};

export default TotalLocked;
