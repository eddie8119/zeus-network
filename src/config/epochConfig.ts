import { RemainingTime, EpochStats } from '../types/epoch';
import lock from '../assets/epochInfo/lock.svg';
import userProfile from '../assets/epochInfo/user-profile.svg';

export const remainingTime: RemainingTime = {
  days: 4,
  hours: 21,
  mins: 40,
};

export const epochStats: EpochStats = {
  totalLocked: 29382938,
  totalDelegators: 289,
  currentEpoch: 20,
  progress: 80,
};

export const statsConfig = [
  {
    icon: lock,
    label: 'Total $ZEUS Locked',
    value: epochStats.totalLocked,
    showToken: true,
  },
  {
    icon: userProfile,
    label: 'Total Delegators',
    value: epochStats.totalDelegators,
    isSecond: true,
  },
];
