export interface StatsItemProps {
  icon: string;
  label: string;
  value: string | number;
  showToken?: boolean;
  isSecond?: boolean;
}

export interface RemainingTime {
  days: number;
  hours: number;
  mins: number;
}

export interface EpochStats {
  totalLocked: number;
  totalDelegators: number;
  currentEpoch: number;
  progress: number;
}
