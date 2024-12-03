import React from 'react';
import ProgressBar from '../common/ProgressBar';

interface GuardianButtonProps {
  key: number;
  name: string;
  amount: number;
  isSelected: boolean;
  onClick: () => void;
}

const guardianAmountTotal = 40000000;

const GuardianButton: React.FC<GuardianButtonProps> = ({
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
        className="sm:hidden"
      />
      <p className="hidden text-[14px] font-medium sm:block">
        $ZEUS {amount.toLocaleString()} / {guardianAmountTotal.toLocaleString()}
      </p>
    </button>
  );
};

export default GuardianButton;
