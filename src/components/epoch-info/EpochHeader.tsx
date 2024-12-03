import React from 'react';
import chevronRight from '../../assets/epochInfo/chevron-right.svg';
import { RemainingTime } from '../../types/epoch';

interface EpochHeaderProps {
  currentEpoch: number;
  remainingTime: RemainingTime;
}

const EpochHeader: React.FC<EpochHeaderProps> = ({ currentEpoch, remainingTime }) => {
  const { days, hours, mins } = remainingTime;

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-1">
        <h2 className="text-base font-bold text-text-primary">Epoch {currentEpoch}</h2>
        <img src={chevronRight} alt="chevron right" className="h-[18px] w-[18px]" />
      </div>
      <p className="text-[14px] font-medium text-text-light">
        {days} days {hours} hours {mins} mins remaining
      </p>
    </header>
  );
};

export default EpochHeader;
