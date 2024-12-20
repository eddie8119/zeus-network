import React, { useCallback, useEffect, useState } from 'react';
import zeusToken from '../../assets/zeus-token.svg';
import { useDebounce } from '../../hooks/useDebounce';
import { useNumberFormat } from '../../hooks/useNumberFormat';

interface DepositInputProps {
  setAmount: (value: number) => void;
  balance: number;
}

const DepositInput: React.FC<DepositInputProps> = ({ setAmount, balance }) => {
  const { formatNumber, inputFormatNumber, parseNumber } = useNumberFormat();
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce(inputValue);

  // 當防抖值改變時更新 amount
  useEffect(() => {
    const parsedValue = parseNumber(debouncedValue);
    setAmount(Math.min(parsedValue, balance));
  }, [debouncedValue, setAmount, parseNumber, balance]);

  const handleDepositChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const parsedInputValue = parseNumber(value);
      if (parsedInputValue > balance) {
        return setInputValue(formatNumber(balance));
      }

      setInputValue(value);
    },
    [balance, parseNumber, formatNumber]
  );

  const handleMaxClick = useCallback(() => {
    setAmount(balance);
    setInputValue(formatNumber(balance));
  }, [setAmount, balance, formatNumber]);

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
          value={inputFormatNumber(inputValue)}
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
