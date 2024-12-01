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
      className={`flex items-center justify-between rounded-xl px-4 py-3 text-text-medium ${
        isSelected ? 'guardian-container-active-style' : 'guardian-container-style'
      }`}
    >
      <p className="text-[16px] font-semibold leading-6">{name}</p>
      <p className="text-[14px] font-medium">
        $ZEUS {amount.toLocaleString()} / {amount.toLocaleString()}
      </p>
    </button>
  );
};

export default GuardianButton;
