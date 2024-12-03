import React from 'react';
import EpochHeader from './epoch-info/EpochHeader';
import StatsContainer from './epoch-info/StatsContainer';
import ProgressBar from './common/ProgressBar';
import { remainingTime, epochStats, statsConfig } from '../config/epochConfig';

const EpochInfo: React.FC = () => {
  return (
    <section className="mt-12 grid w-full grid-cols-1 gap-3">
      {/* epoch remaining */}
      <div className="grid grid-cols-1 gap-3 px-2 lg:hidden">
        <EpochHeader currentEpoch={epochStats.currentEpoch} remainingTime={remainingTime} />
        <ProgressBar progress={epochStats.progress} height="8px" className="w-full" />
      </div>

      {/* stats container */}
      <StatsContainer stats={statsConfig} />
    </section>
  );
};

export default EpochInfo;
