import React from 'react';
import zeusLogo from '../../assets/zeus-logo.svg';

const Logo: React.FC = () => {
  return (
    <a href="/">
      <div className="flex items-center space-x-2">
        <img src={zeusLogo} alt="Zeus Guardian" className="h-[23px] w-[35px]" />
        <div>
          <h1 className="zeus-node-gradient">ZEUS NODE</h1>
          <p className="text-text-secondary text-17 font-extrabold">GUARDIAN</p>
        </div>
      </div>
    </a>
  );
};

export default Logo;
