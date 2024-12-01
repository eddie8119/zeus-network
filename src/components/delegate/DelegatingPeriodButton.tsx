import React from 'react';

interface DelegatingPeriodButtonProps {
  key: number;
  epochs: number;
  apy: number;
  isSelected: boolean;
  onClick: () => void;
}

const DelegatingPeriodButton: React.FC<DelegatingPeriodButtonProps> = ({
  key,
  epochs,
  apy,
  isSelected,
  onClick,
}) => {
  return (
    <button
      key={key}
      onClick={onClick}
      className={`flex flex-col gap-2 rounded-xl px-4 py-3 text-[14px] leading-[18px] ${
        isSelected
          ? 'guardian-container-active-style text-text-primary'
          : 'guardian-container-style text-text-medium'
      }`}
      aria-label={`${epochs} epochs with ${apy}% APY`}
    >
      <span className="font-medium">{epochs} Epochs</span>
      <strong className="font-bold">{apy}%</strong>
    </button>
  );
};

export default DelegatingPeriodButton;
