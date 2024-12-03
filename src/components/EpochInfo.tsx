import React from 'react';
import zeusToken from '../assets/zeus-token.svg';
import chevronRight from '../assets/epochInfo/chevron-right.svg';
import lock from '../assets/epochInfo/lock.svg';
import userProfile from '../assets/epochInfo/user-profile.svg';
import ProgressBar from './common/ProgressBar';

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
    <article
      className={`flex w-1/2 flex-col gap-1 ${isSecond ? 'pl-3' : ''} sm:flex-row sm:items-center sm:gap-3`}
    >
      <header className="flex h-[18px] items-center gap-1 sm:gap-2">
        <img src={icon} alt={label} className="h-3 w-3 sm:h-[18px] sm:w-[18px]" />
        <span className="text-[12px] font-medium uppercase leading-[18px] text-text-dark sm:text-[16px] sm:normal-case sm:text-text-medium">
          {label}
        </span>
      </header>
      <div className="flex items-center gap-1">
        {showToken && <img src={zeusToken} alt="zeus token" className="h-[18px] w-[18px]" />}
        <strong className="text-[16px] font-semibold text-text-light sm:text-[20px] sm:text-text-primary">
          {value.toLocaleString()}
        </strong>
      </div>
    </article>
  );
};

const remainingTime = {
  days: 4,
  hours: 21,
  mins: 40,
};
const totalLocked = 29382938;
const totalDelegators = 289;

const EpochInfo: React.FC = () => {
  return (
    <section className="mt-12 grid w-full grid-cols-1 gap-3">
      {/* epoch remaining */}
      <div className="grid grid-cols-1 gap-3 px-2 lg:hidden">
        {/* epoch header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <h2 className="text-base font-bold text-text-primary">Epoch 20</h2>
            <img src={chevronRight} alt="chevron right" className="h-[18px] w-[18px]" />
          </div>
          <p className="text-sm font-normal text-text-light">
            {remainingTime.days} days {remainingTime.hours} hours {remainingTime.mins} mins
            remaining
          </p>
        </header>
        <ProgressBar progress={80} height="8px" className="w-full" />
      </div>

      {/* stats container */}
      <article className="outer-container-style flex px-3 py-4 sm:p-1">
        <div className="epochInfo-stats-container-style-desk relative flex w-full before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-[1px] before:-translate-y-1/2 before:bg-text-dark before:opacity-15 before:content-[''] sm:p-4 sm:before:hidden">
          <StatsItem icon={lock} label="Total $ZEUS Locked" value={totalLocked} showToken={true} />
          <StatsItem
            icon={userProfile}
            label="Total Delegators"
            value={totalDelegators}
            isSecond={true}
          />
        </div>
      </article>
    </section>
  );
};

export default EpochInfo;
