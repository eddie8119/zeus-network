import React from 'react';
import { TokenItemProps } from '../../types/chart';

const TokenItem: React.FC<TokenItemProps> = ({ className, label }) => {
  return (
    <div className="flex items-center gap-1">
      <div className={`${className} h-[10px] w-[10px] rounded-full`}></div>
      <span className="text-[12px] font-normal text-[#9CA0B0]">{label}</span>
    </div>
  );
};

export default TokenItem;
