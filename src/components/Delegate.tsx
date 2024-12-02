import React, { useState, useEffect } from 'react';
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

const balance: number = 1000000;
const guardiansList: GuardianOption[] = [
  { id: 0, name: 'Guardian1', amount: 5000000 },
  { id: 1, name: 'Guardian2', amount: 33000000 },
  { id: 2, name: 'Guardian3', amount: 4400000 },
  { id: 3, name: 'Guardian4', amount: 20000000 },
  { id: 4, name: 'Guardian5', amount: 16000000 },
  { id: 5, name: 'Guardian6', amount: 18000000 },
  { id: 6, name: 'Guardian7', amount: 19000000 },
];

const Delegate: React.FC = () => {
  const [selectedGuardian, setSelectedGuardian] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [apy, setApy] = useState<number>(0);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(0);
  const [calculateRewards, setCalculateRewards] = useState<number>(0);

  useEffect(() => {
    const value = Math.round(amount * (1 + apy / 100));
    setCalculateRewards(value);
  }, [amount, apy]);

  return (
    <section className="outer-container-style-desk mt-[49px] grid w-full grid-cols-1 sm:mt-8 sm:p-2 sm:pt-4">
      <header className="mb-3 p-2">
        <h2 className="text-[18px] font-medium leading-6 text-text-primary">Delegate</h2>
      </header>
      <div className="outer-container-style-mobile flex w-full flex-col gap-2 p-2 sm:flex-row sm:gap-3 sm:p-0">
        {/* Left Column - Deposit and Period Selection */}
        <div className="flex flex-col gap-4 sm:w-1/2">
          <article className="article-container-style flex flex-col gap-3 p-4">
            {/* Deposit Input */}
            <form>
              <div className="mb-2 flex h-[18px] items-center justify-between">
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
              <DepositInput amount={amount} setAmount={setAmount} balance={balance} />
            </form>
          </article>

          {/*  */}
          <div className="hidden sm:block">
            <div className="flex flex-col gap-3">
              <DelegatingPeriod
                calculateRewards={calculateRewards}
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
                setApy={setApy}
              />
              <DelegateButton disabled={false} onClick={() => {}} />
            </div>
          </div>
        </div>

        {/* Right Column - Guardian Selection */}
        <article className="article-container-style flex flex-1 flex-col p-4 sm:w-1/2">
          <header className="mb-4">
            <h2 className="article-container-title">Select a Guardian</h2>
          </header>
          <div className="flex max-h-[360px] flex-col gap-2 overflow-y-scroll sm:max-h-[330px]">
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

        <div className="flex flex-col gap-2 sm:hidden">
          <DelegatingPeriod
            calculateRewards={calculateRewards}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            setApy={setApy}
          />
          <DelegateButton disabled={false} onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default Delegate;
