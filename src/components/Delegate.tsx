import React, { useState, useEffect } from 'react';
import DelegatingPeriod from './delegate/DelegatingPeriod';
import DelegateButton from './delegate/DelegateButton';
import GuardianSection from './delegate/GuardianSection';
import DepositSection from './delegate/DepositSection';

import { balance, guardiansList } from '../config/delegateConfig';

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
        {/* left column - deposit and period selection */}
        <div className="flex flex-col gap-4 sm:w-1/2">
          <DepositSection amount={amount} setAmount={setAmount} balance={balance} />

          {/* desktop period selection */}
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

        {/* right column - guardian selection */}
        <GuardianSection
          guardiansList={guardiansList}
          selectedGuardian={selectedGuardian}
          setSelectedGuardian={setSelectedGuardian}
        />

        {/* mobile period selection */}
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
