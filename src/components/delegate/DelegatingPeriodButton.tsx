import React from 'react';

interface DelegatingPeriodButtonProps {
  epochs: number;
  apy: number;
  isSelected: boolean;
  onClick: () => void;
}

const DelegatingPeriodButton: React.FC<DelegatingPeriodButtonProps> = ({
  epochs,
  apy,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col gap-2 rounded-xl px-4 py-3 ${
        isSelected ? 'guardian-container-active-style' : 'guardian-container-style'
      }`}
      aria-pressed={isSelected}
    >
      <span className="text-text-light text-xs font-medium">{epochs} Epochs</span>
      <strong className="text-sm font-semibold text-text-primary">{apy}%</strong>
    </button>
  );
};

export default DelegatingPeriodButton;