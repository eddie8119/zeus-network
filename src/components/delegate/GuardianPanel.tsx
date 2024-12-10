import React from 'react';
import { guardianAmountTotal } from '../../config/delegateConfig';
import ProgressBar from '../common/ProgressBar';

interface GuardianPanelProps {
  name: string;
  amount: number;
  isSelected: boolean;
  onClick: () => void;
}

const GuardianPanel: React.FC<GuardianPanelProps> = ({ name, amount, isSelected, onClick }) => {
  const progressBarNumber = (amount / guardianAmountTotal) * 100;

  return (
    <button
      onClick={onClick}
      className={`btn-active flex items-center justify-between rounded-xl px-4 py-3 ${
        isSelected
          ? 'guardian-container-active-style text-text-primary'
          : 'guardian-container-style text-text-medium'
      }`}
    >
      <p className="text-[16px] font-semibold leading-6">{name}</p>
      <ProgressBar
        progress={progressBarNumber}
        width="45px"
        height="10px"
        active={isSelected}
        className="lg:hidden"
        barClassName="gradient-data-progress"
      />
      <p className="hidden text-[14px] font-medium lg:block">
        $ZEUS {amount.toLocaleString()} / {guardianAmountTotal.toLocaleString()}
      </p>
    </button>
  );
};

export default GuardianPanel;
