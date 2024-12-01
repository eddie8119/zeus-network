import React, { useState, useEffect } from 'react';
import DelegatingPeriodButton from './DelegatingPeriodButton';
import info from '../../assets/info.svg';
import zeusToken from '../../assets/zeus-token.svg';
import lineChartUp from '../../assets/epochInfo/line-chart-up-filled.svg';
import { useNumberFormat } from '../../hooks/useNumberFormat';

interface DelegatingPeriodProps {
  calculateRewards: number;
  selectedPeriod: number;
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
  const { formatNumber, parseNumber } = useNumberFormat();

  return (
    <article className="article-container-style flex flex-col p-4 md:max-h-[388px]">
      <header className="mb-5 flex items-center justify-between">
        <div className="flex space-x-2">
          <h2 className="article-container-title">Select Delegating Period</h2>
          <img src={info} alt="info" className="h-[18px] w-[18px]" />
        </div>
        <span className="flex text-[14px] font-medium text-text-medium">Basic APY: 5%</span>
      </header>

      <div className="mb-3 grid grid-cols-2 gap-2 md:grid-cols-4" aria-label="Delegating periods">
        {periodsList.map(period => (
          <DelegatingPeriodButton
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
          <p className="text-[14px] font-semibold text-text-primary">Estimated Rewards</p>
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
