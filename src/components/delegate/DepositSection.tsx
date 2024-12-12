import React from 'react';
import zeusToken from '../../assets/zeus-token.svg';
import DepositInput from './DepositInput';

export interface DepositSectionProps {
  setAmount: (amount: number) => void;
  balance: number;
}

const DepositSection: React.FC<DepositSectionProps> = ({ setAmount, balance }) => {
  return (
    <article className="article-container-style flex flex-col gap-3 p-4">
      <form>
        <div className="mb-3 flex h-[18px] items-center justify-between">
          <label
            htmlFor="deposit"
            className="text-[16px] font-semibold leading-4 text-text-primary"
          >
            Deposit
          </label>
          <div className="flex text-[14px] text-text-medium">
            <p className="font-semibold">Balance</p>
            <img src={zeusToken} alt="ZEUS token" className="ml-2 mr-1 h-[18px] w-[18px]" />
            <p className="font-medium">{balance.toLocaleString()}</p>
          </div>
        </div>
        <DepositInput setAmount={setAmount} balance={balance} />
      </form>
    </article>
  );
};

export default DepositSection;
