import React from 'react';
import PoweredBy from './footer/PoweredBy';
import SocialLinks from './footer/SocialLinks';
import FooterLinks from './footer/FooterLinks';
import Copyright from './footer/Copyright';

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto mt-[49px] w-full py-8 sm:mt-[84px] sm:p-8 sm:pt-9">
      <div className="header-footer-container flex flex-col space-y-8 sm:flex-row sm:justify-between sm:space-y-0">
        {/* left section  */}
        <div className="flex flex-col items-center space-y-8 sm:items-start sm:space-y-6">
          <PoweredBy />
          <SocialLinks />
        </div>

        {/* right section  */}
        <div className="flex flex-col items-center space-y-2 text-sm sm:items-end sm:space-y-6">
          <FooterLinks />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
