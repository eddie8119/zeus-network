import React from 'react';
import zeusToken from '../../assets/zeus-token.svg';
import { StatsItemProps } from '../../types/epoch';

interface StatsContainerProps {
  stats: StatsItemProps[];
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

const StatsContainer: React.FC<StatsContainerProps> = ({ stats }) => {
  return (
    <article className="outer-container-style flex px-3 py-4 sm:p-1">
      <div className="epochInfo-stats-container-style-desk relative flex w-full before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-[1px] before:-translate-y-1/2 before:bg-text-dark before:opacity-15 before:content-[''] sm:p-4 sm:before:hidden">
        {stats.map((stat, index) => (
          <StatsItem key={`${stat.label}-${index}`} {...stat} />
        ))}
      </div>
    </article>
  );
};

export default StatsContainer;
