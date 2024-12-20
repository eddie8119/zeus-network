import React, { useRef, useState } from 'react';
import DelegateIcon from '../assets/header/Delegate.svg';
import DelegationsIcon from '../assets/header/Delegations.svg';
import DocIcon from '../assets/header/Doc.svg';
import GuardiansIcon from '../assets/header/Guardians.svg';
import { useClickOutside } from '../hooks/useClickOutside';
import { useNavigation } from '../hooks/useNavigation';
import { NavItem } from '../types/navigation';

import ConnectButton from './header/ConnectButton';
import DesktopNav from './header/DesktopNav';
import EpochButton from './header/EpochButton';
import Logo from './header/Logo';
import MenuButtonMobileArea from './header/MenuButtonMobileArea';
import MobileNav from './header/MobileNav';

const navList: NavItem[] = [
  {
    id: 'delegate',
    icon: DelegateIcon,
    label: 'Delegate',
  },
  {
    id: 'delegations',
    icon: DelegationsIcon,
    label: 'My Delegations',
  },
  {
    id: 'guardians',
    icon: GuardiansIcon,
    label: 'Guardians',
  },
  {
    id: 'doc',
    icon: DocIcon,
    label: 'Doc',
  },
];

const Header: React.FC = () => {
  const { currentPath } = useNavigation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useClickOutside(popupRef, buttonRef, toggleMenu, setToggleMenu);

  return (
    <>
      <header className="sticky top-0 z-[999] bg-background-primary pt-3 sm:pt-6">
        <div className="article-container-style h-14 p-2 pl-4 lg:h-16 lg:p-3 lg:pl-5">
          <div className="header-footer-container flex items-center justify-between">
            {/* left section  */}
            <div className="flex items-center space-x-8">
              <Logo />
              <DesktopNav navList={navList} currentPath={currentPath} />
            </div>

            {/* right section */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <EpochButton className="hidden lg:flex" />
              <ConnectButton className="hidden lg:flex" />

              {/* menu buttons - mobile */}
              <MenuButtonMobileArea
                buttonRef={buttonRef}
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
              />
            </div>
          </div>
        </div>

        {/* navigation - mob */}
        {toggleMenu && (
          <MobileNav popupRef={popupRef} navList={navList} currentPath={currentPath} />
        )}
      </header>

      {/* backdrop */}
      {toggleMenu && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setToggleMenu(false)}
        />
      )}
    </>
  );
};

export default Header;
