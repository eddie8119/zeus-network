import React from 'react';
import zeusToken from '../../assets/zeus-token.svg';

interface DepositInputProps {
  amount: number;
  setAmount: (value: number) => void;
}

const DepositInput: React.FC<DepositInputProps> = ({ amount, setAmount }) => {
  return (
    <div className="input-container group flex items-center gap-4 p-2 pr-3">
      <div className="flex items-center gap-2 rounded-lg bg-background-tab p-2 pr-3 group-hover:bg-transparent">
        <img src={zeusToken} alt="ZEUS token" className="h-6 w-6" />
        <span className="text-sm font-medium">ZEUS</span>
      </div>
      <div className="flex flex-1 items-center space-x-3">
        <input
          id="deposit"
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="input-inner-text w-full bg-transparent text-right text-[16px] font-semibold leading-[22px] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          aria-label="Deposit amount"
          placeholder="0"
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
