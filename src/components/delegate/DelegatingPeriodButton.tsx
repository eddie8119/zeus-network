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
      className={`flex flex-col gap-2 rounded-xl px-4 py-3 ${
        isSelected ? 'guardian-container-active-style' : 'guardian-container-style'
      }`}
      aria-label={`${epochs} epochs with ${apy}% APY`}
    >
      <span className="text-xs font-medium text-text-light">{epochs} Epochs</span>
      <strong className="text-sm font-semibold text-text-primary">{apy}%</strong>
    </button>
  );
};

export default DelegatingPeriodButton;
