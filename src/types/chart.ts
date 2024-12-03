import { ChartOptions } from 'chart.js';

export interface TokenItemProps {
  className: string;
  label: string;
}

export interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  tension: number;
  pointRadius: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export type ChartOptionsType = ChartOptions<'line'>;
