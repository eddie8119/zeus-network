import React, { useState } from 'react';
import zeusToken from '../assets/zeus-token.svg';
import GuardianButton from './delegate/GuardianButton';
import DelegatingPeriod from './delegate/DelegatingPeriod';
import DelegateButton from './delegate/DelegateButton';
import DepositInput from './delegate/DepositInput';

interface GuardianOption {
  id: number;
  name: string;
  amount: number;
}

const guardiansList: GuardianOption[] = [
  { id: 0, name: 'Guardian1', amount: 40000000 },
  { id: 1, name: 'Guardian2', amount: 40000000 },
  { id: 2, name: 'Guardian3', amount: 40000000 },
  { id: 3, name: 'Guardian4', amount: 40000000 },
  { id: 4, name: 'Guardian5', amount: 40000000 },
  { id: 5, name: 'Guardian6', amount: 40000000 },
  { id: 6, name: 'Guardian7', amount: 40000000 },
  { id: 7, name: 'Guardian8', amount: 40000000 },
];

const Delegate: React.FC = () => {
  const [selectedGuardian, setSelectedGuardian] = useState<number>(0);
  const [amount, setAmount] = useState<number>(1300);
  const balance: number = 1000000;

  return (
    <section className="grid w-full grid-cols-1">
      <header className="hiddem mb-3 p-2 md:block">
        <h2 className="text-[18px] font-medium leading-6 text-text-primary">Delegate</h2>
      </header>
      <div className="outer-container-style grid w-full grid-cols-1 gap-2 p-2 lg:grid-cols-2 lg:gap-3">
        {/* Left Column - Deposit and Period Selection */}
        <div className="gap- flex flex-col gap-4">
          <article className="article-container-style flex flex-col gap-3 p-[18px]">
            {/* Deposit Input */}
            <form className=" ">
              <div className="mb-2 flex h-[18px] items-center justify-between">
                <label
                  htmlFor="deposit"
                  className="text-[16px] font-semibold leading-4 text-text-primary"
                >
                  Deposit
                </label>
                <div className="flex text-[14px] text-text-medium">
                  <p className="font-semibold">Balance</p>
                  <img src={zeusToken} alt="ZEUS token" className="h-[18px] w-[18px]" />
                  <p className="font-medium">{balance.toLocaleString()}</p>
                </div>
              </div>
              <DepositInput amount={amount} setAmount={setAmount} balance={balance} />
            </form>
          </article>

          {/*  */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-3">
              <DelegatingPeriod />
              <DelegateButton disabled={true} onClick={() => {}} />
            </div>
          </div>
        </div>

        {/* Right Column - Guardian Selection */}
        <article className="article-container-style flex max-h-[353px] flex-col gap-4 p-4 md:max-h-[388px]">
          <header className="">
            <h2 className="article-container-title">Select a Guardian</h2>
          </header>
          <div className="flex flex-col gap-2 overflow-y-scroll">
            {guardiansList.map(guardian => (
              <GuardianButton
                key={guardian.id}
                name={guardian.name}
                amount={guardian.amount}
                isSelected={selectedGuardian === guardian.id}
                onClick={() => setSelectedGuardian(guardian.id)}
              />
            ))}
          </div>
        </article>
        <div className="flex flex-col gap-2 md:hidden">
          <DelegatingPeriod />
          <DelegateButton disabled={true} onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default Delegate;
