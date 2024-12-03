import React from 'react';
import TokenItem from './total-locked/TokenItem';
import ChartContainer from './total-locked/ChartContainer';

const TotalLocked: React.FC = () => {
  return (
    <section className="mt-[48px] grid w-full grid-cols-1 sm:mt-8">
      <header className="mb-3 p-2">
        <h2 className="text-[18px] font-medium leading-6 text-text-primary">
          Total $ZEUS , $BTC Locked
        </h2>
      </header>
      <div className="outer-container-style flex w-full flex-col p-3 pt-4">
        <div className="mb-2 flex items-center gap-2">
          <TokenItem className="bg-primary-btc" label="BTC" />
          <TokenItem className="bg-primary-zeus" label="$ZEUS (In 100k)" />
        </div>
        <ChartContainer />
      </div>
    </section>
  );
};

export default TotalLocked;
