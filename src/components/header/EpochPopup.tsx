import React from 'react';
import clock from '../../assets/header/clock.svg';
import chevronRight from '../../assets/epochInfo/chevron-right.svg';

interface EpochPopupProps {
  popupRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const EpochPopup: React.FC<EpochPopupProps> = ({ popupRef, className }) => {
  return (
    <div
      ref={popupRef}
      className={`epoch-popup guardian-container-style hidden px-5 py-4 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <img src={clock} alt="clock" className="h-[18px] w-[18px]" />
            <p className="text-[16px] font-semibold leading-[18.2px] text-text-primary">
              80% complete
            </p>
          </div>
          <p className="text-[14px] font-medium text-text-light">
            4 days 21 hours 40 mins remaining
          </p>
        </div>
        <a
          href="/"
          className="view-more-gradient view-more-gradient flex items-center text-[16px] font-semibold leading-[18.2px]"
        >
          <span>View More</span>
          <img src={chevronRight} alt="chevron right" className="h-[18px] w-[18px]" />
        </a>
      </div>
    </div>
  );
};

export default EpochPopup;
