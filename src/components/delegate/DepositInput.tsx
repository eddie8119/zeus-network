import React from 'react';
import zeusToken from '../../assets/zeus-token.svg';
import { useNumberFormat } from '../../hooks/useNumberFormat';

interface DepositInputProps {
  amount: number;
  setAmount: (value: number) => void;
}

const DepositInput: React.FC<DepositInputProps> = ({ amount, setAmount }) => {
  const { formatNumber, parseNumber } = useNumberFormat();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //移除輸入值中的所有逗號
    const rawValue = e.target.value.replace(/,/g, '');
    if (rawValue === '') {
      setAmount(0);
      return;
    }
    const numValue = parseNumber(rawValue);
    if (!isNaN(numValue)) {
      setAmount(numValue);
    }
  };

  return (
    <div className="input-container group flex items-center gap-4 p-2 pr-3">
      <div className="flex items-center gap-2 rounded-lg bg-background-tab p-2 pr-3 group-hover:bg-transparent">
        <img src={zeusToken} alt="ZEUS token" className="h-6 w-6" />
        <span className="text-sm font-medium">ZEUS</span>
      </div>
      <div className="flex flex-1 items-center space-x-3">
        <input
          id="deposit"
          type="text"
          inputMode="numeric"
          value={formatNumber(amount)}
          onChange={handleChange}
          className="input-inner-text w-full bg-transparent text-right text-[16px] font-semibold leading-[22px] outline-none"
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
