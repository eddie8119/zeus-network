import React from 'react';
import ProgressBar from './../common/ProgressBar';

interface EpochButtonProps {
  className: string;
}

const EpochButton: React.FC<EpochButtonProps> = ({ className }) => {
  return (
    <button
      className={`${className} btn-active epoch-container-desk h-10 items-center justify-center rounded-xl px-4 lg:space-x-3`}
    >
      <ProgressBar progress={80} width="40px" />
      <span className="text-[14px] font-semibold text-text-light">Epoch 20</span>
    </button>
  );
};

export default EpochButton;
