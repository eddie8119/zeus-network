import React from 'react';
import GuardianPanel from './GuardianPanel';
import { GuardianOption } from '../../types/delegate';

export interface GuardianSectionProps {
  guardiansList: GuardianOption[];
  selectedGuardian: number;
  setSelectedGuardian: (id: number) => void;
}

const GuardianSection: React.FC<GuardianSectionProps> = ({
  guardiansList,
  selectedGuardian,
  setSelectedGuardian,
}) => {
  return (
    <article className="article-container-style flex flex-1 flex-col p-4 sm:w-1/2">
      <header className="mb-4">
        <h2 className="article-container-title">Select a Guardian</h2>
      </header>
      <article className="flex max-h-[360px] w-full flex-col gap-2 overflow-y-scroll sm:max-h-[340px]">
        {guardiansList.map(guardian => (
          <GuardianPanel
            key={guardian.id}
            name={guardian.name}
            amount={guardian.amount}
            isSelected={selectedGuardian === guardian.id}
            onClick={() => setSelectedGuardian(guardian.id)}
          />
        ))}
      </article>
    </article>
  );
};

export default GuardianSection;
