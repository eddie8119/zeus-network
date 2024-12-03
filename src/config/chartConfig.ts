import { ChartData, ChartOptionsType } from '../types/chart';

export const chartData:ChartData = {
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

export const chartOptions: ChartOptionsType = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top',
      align: 'start',
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
