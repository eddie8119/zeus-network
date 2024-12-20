import React from 'react';
import lineChartUp from '../../assets/epochInfo/line-chart-up-filled.svg';
import info from '../../assets/info.svg';
import zeusToken from '../../assets/zeus-token.svg';
import { useNumberFormat } from '../../hooks/useNumberFormat';
import DelegatingPeriodPanel from './DelegatingPeriodPanel';

interface DelegatingPeriodProps {
  calculateRewards: number;
  selectedPeriod: number | undefined;
  setSelectedPeriod: (value: number) => void;
  setApy: (value: number) => void;
}

interface PeriodOption {
  id: number;
  epochs: number;
  apy: number;
}

const periodsList: PeriodOption[] = [
  { id: 0, epochs: 3, apy: 5 },
  { id: 1, epochs: 6, apy: 5.75 },
  { id: 2, epochs: 12, apy: 15 },
  { id: 3, epochs: 24, apy: 40 },
];

const DelegatingPeriod: React.FC<DelegatingPeriodProps> = ({
  calculateRewards,
  selectedPeriod,
  setSelectedPeriod,
  setApy,
}) => {
  const { formatNumber } = useNumberFormat();

  return (
    <article className="article-container-style flex flex-col p-4">
      <header className="mb-5 flex items-center justify-between">
        <div className="flex space-x-2">
          <h2 className="article-container-title whitespace-nowrap leading-[20px]">
            Select Delegating Period
          </h2>
          <button>
            <img src={info} alt="info" className="h-[17px] w-[17px]" />
          </button>
        </div>
        <span className="text-[14px] font-medium leading-[20px] text-text-medium">
          Basic APY: 5%
        </span>
      </header>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Delegating periods">
        {periodsList.map(period => (
          <DelegatingPeriodPanel
            key={period.id}
            epochs={period.epochs}
            apy={period.apy}
            isSelected={selectedPeriod === period.id}
            onClick={() => {
              setSelectedPeriod(period.id);
              setApy(period.apy);
            }}
          />
        ))}
      </div>

      <div className="background-panel flex w-full items-center justify-between rounded-xl px-4 py-[13px]">
        <div className="flex space-x-2">
          <img src={lineChartUp} alt="line chart up" className="h-[18px] w-[18px]" />
          <p className="text-[14px] font-semibold text-text-primary lg:text-[16px]">
            Estimated Rewards
          </p>
        </div>
        <div className="flex space-x-2">
          <img src={zeusToken} alt="ZEUS token" className="h-[24px] w-[24px]" />
          <p className="text-[18px] font-semibold text-text-primary">
            {formatNumber(calculateRewards)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default DelegatingPeriod;
