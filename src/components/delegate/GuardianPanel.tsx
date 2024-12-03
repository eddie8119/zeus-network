import React from 'react';
import ProgressBar from '../common/ProgressBar';
import { guardianAmountTotal } from '../../config/delegateConfig';

interface GuardianPanelProps {
  key: number;
  name: string;
  amount: number;
  isSelected: boolean;
  onClick: () => void;
}

const GuardianPanel: React.FC<GuardianPanelProps> = ({
  key,
  name,
  amount,
  isSelected,
  onClick,
}) => {
  const progressBarNumber = (amount / guardianAmountTotal) * 100;

  return (
    <button
      key={key}
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
      />
      <p className="hidden text-[14px] font-medium lg:block">
        $ZEUS {amount.toLocaleString()} / {guardianAmountTotal.toLocaleString()}
      </p>
    </button>
  );
};

export default GuardianPanel;
