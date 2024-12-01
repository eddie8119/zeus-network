import React from 'react';
import zeusToken from '../../assets/zeus-token.svg';

interface DepositInputProps {
  amount: number;
  setAmount: (value: number) => void;
}

const DepositInput: React.FC<DepositInputProps> = ({ amount, setAmount }) => {
  return (
    <div className="input-container flex items-center gap-4 p-2 pr-3">
      <div className="bg-background-tab flex items-center gap-2 rounded-lg p-2 pr-3">
        <img src={zeusToken} alt="ZEUS token" className="h-6 w-6" />
        <span className="text-sm font-medium">ZEUS</span>
      </div>
      <div className="flex items-center">
        <input
          id="deposit"
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="w-full bg-transparent text-right text-base font-semibold text-text-primary outline-none"
          aria-label="Deposit amount"
        />
        <button
          type="button"
          className="gradient-btn rounded-xl px-4 py-2 text-[14px] font-semibold leading-[20px] text-black"
          aria-label="Set maximum amount"
        >
          MAX
        </button>
      </div>
    </div>
  );
};

export default DepositInput;
