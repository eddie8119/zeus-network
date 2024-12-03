import React from 'react';
import tick from '../../assets/header/tick.svg';

interface ConnectButtonProps {
  className: string;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ className }) => {
  return (
    <button
      className={`btn-active connected-btn h-10 items-center justify-center space-x-2 rounded-xl px-4 ${className}`}
    >
      <img src={tick} alt="tick" className="h-[18px] w-[18px]" />
      <p className="text-[16px] font-medium text-text-primary">Connected</p>
    </button>
  );
};

export default ConnectButton;
