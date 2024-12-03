import React from 'react';
import footerZeusLogo from '../../assets/footer/footer-zeus-logo.svg';

const PoweredBy: React.FC = () => {
  return (
    <div className="flex items-center text-[16px] text-base leading-[24px] text-text-light">
      <span>Powered by</span>
      <img src={footerZeusLogo} alt="Zeus Network" className="ml-3 mr-2 h-[10px] w-4" />
      <span>ZEUS Network</span>
    </div>
  );
};

export default PoweredBy;
