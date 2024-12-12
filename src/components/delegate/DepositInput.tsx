import React, { useCallback } from 'react';
import zeusToken from '../../assets/zeus-token.svg';
import { useNumberFormat } from '../../hooks/useNumberFormat';

interface DepositInputProps {
  amount: number | undefined;
  setAmount: (value: number) => void;
  balance: number;
}

const DepositInput: React.FC<DepositInputProps> = ({ amount, setAmount, balance }) => {
  const { formatNumber, parseNumber } = useNumberFormat();

  const handleDepositChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const parsedValue = parseNumber(value);
      setAmount(Math.min(parsedValue, balance));
    },
    [setAmount, parseNumber, balance]
  );

  const handleMaxClick = useCallback(() => {
    setAmount(balance);
  }, [setAmount, balance]);

  return (
    <div className="input-container group flex max-h-14 items-center gap-4 p-2 pr-3">
      <div className="flex items-center gap-2 rounded-lg bg-background-tab p-2 pr-3 transition-all duration-200 ease-in-out group-hover:bg-transparent">
        <img src={zeusToken} alt="ZEUS token" className="h-6 w-6" />
        <span className="text-sm font-medium">ZEUS</span>
      </div>
      <div className="flex flex-1 items-center space-x-3">
        <input
          id="deposit"
          type="text"
          inputMode="decimal"
          value={amount !== undefined ? formatNumber(amount) : ''}
          onChange={handleDepositChange}
          className="input-inner-text w-full bg-transparent text-right text-[16px] font-semibold leading-[22px] outline-none transition-colors group-hover:text-text-primary"
          aria-label="Deposit amount"
          placeholder="0"
        />
        <button
          type="button"
          className="gradient-btn btn-active rounded-xl px-4 py-2 text-[14px] font-semibold leading-[20px] text-black"
          aria-label="Set maximum amount"
          onClick={handleMaxClick}
        >
          MAX
        </button>
      </div>
    </div>
  );
};

export default DepositInput;
