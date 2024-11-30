import React from 'react';

interface GuardianButtonProps {
  id: number;
  name: string;
  amount: number;
  isSelected: boolean;
  onClick: () => void;
}

const GuardianButton: React.FC<GuardianButtonProps> = ({ id, name, amount, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl p-3 ${
        isSelected ? 'guardian-container-active-style' : 'guardian-container-style'
      }`}
      aria-pressed={isSelected}
    >
      <span className="text-sm font-medium text-text-primary">{name}</span>
      <span className="text-text-light text-sm">
        $ZEUS {amount.toLocaleString()} / {amount.toLocaleString()}
      </span>
    </button>
  );
};

export default GuardianButton;
