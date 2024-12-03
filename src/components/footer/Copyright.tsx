import React from 'react';

const Copyright: React.FC = () => {
  return (
    <span className="text-[14px] font-medium leading-[20px] text-text-dark">
      {new Date().getFullYear()}, ZEUS Network All rights reserved.
    </span>
  );
};

export default Copyright;
