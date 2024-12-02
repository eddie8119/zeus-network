import React from 'react';
import Discord from '../assets/footer/Discord.svg';
import XTwitter from '../assets/footer/XTwitter.svg';
import footerZeusLogo from '../assets/footer/footer-zeus-logo.svg';

interface LinkItem {
  id: string;
  label: string;
  link: string;
}

const linksList: LinkItem[] = [
  {
    id: 'terms',
    label: 'Terms of Service',
    link: '/terms',
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    link: '/privacy',
  },
  {
    id: 'disclaimer',
    label: 'Disclaimer',
    link: '/disclaimer',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto mt-[49px] w-full py-8 sm:mt-[84px] sm:p-8 sm:pt-9">
      <div className="flex flex-col space-y-8 sm:flex-row sm:justify-between sm:space-y-0">
        {/* Left Section  */}
        <div className="flex flex-col items-center space-y-8 sm:items-start sm:space-y-6">
          <div className="flex items-center text-[16px] text-base leading-[24px] text-text-light">
            <span>Powered by</span>
            <img src={footerZeusLogo} alt="Zeus Network" className="ml-3 mr-2 h-[10px] w-4" />
            <span>ZEUS Network</span>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://twitter.com/zeus" target="_blank" rel="noopener noreferrer">
              <img
                src={XTwitter}
                alt="Twitter"
                className="h-[16px] w-[18px] transition-all hover:brightness-200"
              />
            </a>
            <a href="https://discord.gg/zeus" target="_blank" rel="noopener noreferrer">
              <img
                src={Discord}
                alt="Discord"
                className="h-[16px] w-[21px] transition-all hover:brightness-200"
              />
            </a>
          </div>
        </div>

        {/* Right Section  */}
        <div className="flex flex-col items-center space-y-2 text-sm sm:items-end sm:space-y-6">
          {/* Links */}
          <div className="flex space-x-5">
            {linksList.map(item => (
              <a
                key={item.id}
                href={item.link}
                className="text-[16px] font-medium leading-[24px] text-text-light hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Copyright */}
          <span className="text-[14px] font-medium leading-[20px] text-text-dark">
            2024, ZEUS Network All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
