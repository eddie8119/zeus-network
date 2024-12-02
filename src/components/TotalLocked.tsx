import React, { useState, useEffect } from 'react';
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

interface TokenItemProps {
  className: string;
  lebal: string;
}

const TokenItem: React.FC<TokenItemProps> = ({ className, lebal }) => {
  return (
    <div className="flex items-center gap-1">
      <div className={`${className} h-[10px] w-[10px] rounded-full`}></div>
      <span className="text-[12px] font-normal text-[#9CA0B0]">{lebal}</span>
    </div>
  );
};

const allData = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      label: 'ZEUS',
      data: [26, 27, 27, 26, 27, 26, 27, 29, 27, 26, 27, 27],
      borderColor: '#FD83FF',
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: 'BTC',
      data: [27, 26, 27, 26, 27, 28, 27, 28, 26, 27, 27, 28],
      borderColor: '#FFEB83',
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
      border: {
        display: false,
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
      border: {
        display: false,
      },
    },
  },
};

const TotalLocked: React.FC = () => {
  const [chartData, setChartData] = useState(allData);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // For mobile, only show last 4 months
        setChartData({
          labels: allData.labels.slice(8),
          datasets: allData.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.slice(8),
          })),
        });
      } else {
        // For desktop, show all months
        setChartData(allData);
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="mt-[48px] grid w-full grid-cols-1 sm:mt-8">
      <header className="mb-3 p-2">
        <h2 className="text-[18px] font-medium leading-6 text-text-primary">
          Total $ZEUS , $BTC Locked
        </h2>
      </header>
      <div className="outer-container-style flex w-full flex-col p-3 pt-4">
        <div className="mb-2 flex items-center gap-2">
          <TokenItem className="bg-primary-btc" lebal="BTC" />
          <TokenItem className="bg-primary-zeus" lebal="$ZEUS (In 100k)" />
        </div>
        <article className="article-container-style h-[240px] w-full rounded-xl px-3 py-5">
          <Line data={chartData} options={options} />
        </article>
      </div>
    </section>
  );
};

export default TotalLocked;
