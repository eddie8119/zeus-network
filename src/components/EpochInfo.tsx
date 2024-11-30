import React from 'react';
import zeusToken from '../assets/zeus-token.svg';
import chevronRight from '../assets/epochInfo/chevron-right.svg';
import lock from '../assets/epochInfo/lock.svg';
import userProfile from '../assets/epochInfo/user-profile.svg';

interface StatsItemProps {
  icon: string;
  label: string;
  value: string | number;
  showToken?: boolean;
  isSecond?: boolean;
}

const StatsItem: React.FC<StatsItemProps> = ({
  icon,
  label,
  value,
  showToken = false,
  isSecond = false,
}) => {
  return (
    <article className={`flex w-1/2 flex-col gap-1 ${isSecond ? 'pl-3' : ''}`}>
      <header className="flex h-[18px] items-center gap-1">
        <img src={icon} alt={label} className="h-3 w-3" />
        <span className="text-text-dark text-xs font-medium">{label}</span>
      </header>
      <div className="flex items-center gap-1">
        {showToken && <img src={zeusToken} alt="zeus token" className="h-[18px] w-[18px]" />}
        <strong className="text-base font-semibold text-text-primary">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </strong>
      </div>
    </article>
  );
};

let remainingTime = {
  days: 4,
  hours: 21,
  mins: 40,
};
let totalLocked = 29382938;
let totalDelegators = 289;

const EpochInfo: React.FC = () => {
  return (
    <section className="mt-12 grid w-full grid-cols-1 gap-3">
      <div className="grid grid-cols-1 gap-3 px-2">
        {/* Epoch Header */}
        <div className="flex items-center justify-between">
          <header className="flex items-center space-x-1">
            <h2 className="text-base font-bold text-text-primary">Epoch 20</h2>
            <img src={chevronRight} alt="chevron right" className="h-[18px] w-[18px]" />
          </header>
          <p className="text-text-light text-sm font-normal">
            {remainingTime.days} days {remainingTime.hours} hours {remainingTime.mins} mins
            remaining
          </p>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container h-2 w-full overflow-hidden rounded-full">
          <div className="gradient-primary-color h-full w-4/5 rounded-full" />
        </div>
      </div>

      {/* Stats Container */}
      <article className="article-container-style flex px-3 py-4">
        <StatsItem icon={lock} label="TOTAL $ZEUS LOCKED" value={totalLocked} showToken={true} />
        <StatsItem
          icon={userProfile}
          label="TOTAL DELEGATORS"
          value={totalDelegators}
          isSecond={true}
        />
      </article>
    </section>
  );
};

export default EpochInfo;
