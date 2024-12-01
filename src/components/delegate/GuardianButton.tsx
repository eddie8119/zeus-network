import React from 'react';

interface GuardianButtonProps {
  key: number;
  name: string;
  amount: number;
  isSelected: boolean;
  onClick: () => void;
}

const GuardianButton: React.FC<GuardianButtonProps> = ({
  key,
  name,
  amount,
  isSelected,
  onClick,
}) => {
  return (
    <button
      key={key}
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl p-3 ${
        isSelected ? 'guardian-container-active-style' : 'guardian-container-style'
      }`}
    >
      <span className="text-sm font-medium text-text-primary">{name}</span>
      <span className="text-sm text-text-light">
        $ZEUS {amount.toLocaleString()} / {amount.toLocaleString()}
      </span>
    </button>
  );
};

export default GuardianButton;
