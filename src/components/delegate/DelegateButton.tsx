import React from 'react';

interface DelegateButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const DelegateButton: React.FC<DelegateButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="gradient-btn h-10 w-full py-[9px] text-[16px] font-semibold leading-[22px] text-black disabled:opacity-50 md:h-[50px]"
      aria-label="Confirm delegation"
    >
      Delegate
    </button>
  );
};

export default DelegateButton;
