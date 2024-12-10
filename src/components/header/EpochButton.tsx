import React, { useEffect, useRef, useState } from 'react';
import ProgressBar from './../common/ProgressBar';
import EpochPopup from './EpochPopup';

interface EpochButtonProps {
  className: string;
}

const EpochButton: React.FC<EpochButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} btn-active epoch-container-desk h-10 items-center justify-center rounded-xl px-4 lg:space-x-3`}
      >
        <ProgressBar progress={80} width="40px" />
        <span className="text-[14px] font-semibold text-text-light">Epoch 20</span>
      </button>

      {isOpen && <EpochPopup popupRef={popupRef} className="lg:block" />}
    </div>
  );
};

export default EpochButton;
