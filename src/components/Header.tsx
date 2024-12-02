import React, { useState } from 'react';
import zeusLogo from '../assets/zeus-logo.svg';
import tick from '../assets/header/tick.svg';
import menu from '../assets/header/menu.svg';
import DelegateIcon from '../assets/header/Delegate.svg';
import DelegationsIcon from '../assets/header/Delegations.svg';
import GuardiansIcon from '../assets/header/Guardians.svg';
import DocIcon from '../assets/header/Doc.svg';
import ProgressBar from './common/ProgressBar';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  iconSize?: string;
}

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
  const currentPath = window.location.pathname.slice(1);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-[999] bg-background-primary pt-3">
        <div className="article-container-style h-14 p-2 pl-4">
          <div className="header-footer-container flex items-center justify-between">
            {/* Left section  */}
            <div className="flex items-center space-x-8">
              <a href="/">
                <div className="flex items-center space-x-2">
                  <img src={zeusLogo} alt="Zeus Guardian" className="h-[23px] w-[35px]" />
                  <div>
                    <h1 className="zeus-node-gradient">ZEUS NODE</h1>
                    <p className="text-text-secondary text-17 font-extrabold">GUARDIAN</p>
                  </div>
                </div>
              </a>

              {/* Navigation - desk */}
              <nav className="hidden space-x-3 lg:flex lg:flex-row">
                {navList.map(item => (
                  <a
                    href={`/${item.id}`}
                    key={item.id}
                    className={`${currentPath === item.id ? 'header-tab' : ''} header-tab-hover rounded-button flex items-center px-3 py-2 text-text-primary transition-colors`}
                  >
                    <img
                      src={item.icon}
                      alt={`${item.label} icon`}
                      className="mr-2 h-[18px] w-[18px]"
                    />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Epoch - desk */}
              <button className="btn-active epoch-container-desk hidden h-10 items-center justify-center rounded-xl px-4 lg:flex lg:space-x-3">
                <ProgressBar progress={80} width="40px" />
                <span className="text-[14px] font-semibold text-text-light">Epoch 20</span>
              </button>

              {/* Connect Button - desk */}
              <button className="btn-active connected-btn hidden h-10 items-center justify-center space-x-2 rounded-xl px-4 lg:flex">
                <img src={tick} alt="tick" className="h-[18px] w-[18px]" />
                <p className="text-[16px] font-medium text-text-primary">Connected</p>
              </button>

              {/* Menu Buttons - Mobile */}
              <div className="flex space-x-2 lg:hidden">
                <button
                  onClick={() => setToggleMenu(!toggleMenu)}
                  className="menu-btn flex h-10 w-10 items-center justify-center rounded-xl"
                >
                  <img src={menu} alt="Menu" className="h-[18px] w-[18px]" />
                </button>
                <button className="connected-btn flex h-10 w-10 items-center justify-center rounded-xl">
                  <img src={tick} alt="tick" className="h-[18px] w-[18px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - mob */}
        {toggleMenu && (
          <nav className="article-container-style absolute mt-4 w-full flex-col space-y-2 p-3 lg:hidden">
            {navList.map(item => (
              <a
                href={`/${item.id}`}
                key={item.id}
                className={`${currentPath === item.id ? 'header-tab' : ''} header-tab-hover rounded-button flex items-center px-3 py-2 text-text-primary transition-colors`}
              >
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="mr-2 h-[18px] w-[18px]"
                />
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Backdrop */}
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
