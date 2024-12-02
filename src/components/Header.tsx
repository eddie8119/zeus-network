import React, { useState } from 'react';
import zeusLogo from '../assets/zeus-logo.svg';
import tick from '../assets/header/tick.svg';
import menu from '../assets/header/menu.svg';
import DelegateIcon from '../assets/header/Delegate.svg';
import DelegationsIcon from '../assets/header/Delegations.svg';
import GuardiansIcon from '../assets/header/Guardians.svg';
import DocIcon from '../assets/header/Doc.svg';

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
        <div className="article-container-style flex h-14 items-center justify-between p-2 pl-4">
          {/* Left section  */}
          <div className="flex items-center space-x-8">
            <a href="/">
              <div className="flex items-center space-x-2">
                <img src={zeusLogo} alt="Zeus Guardian" className="h-[23px] w-[35px]" />
                <div>
                  <h1 className="zeus-node-style">ZEUS NODE</h1>
                  <p className="text-text-secondary text-17 font-extrabold">GUARDIAN</p>
                </div>
              </div>
            </a>

            {/* Navigation - desk */}
            <nav className="hidden flex-col space-x-3 md:flex md:flex-row">
              {navList.map(item => (
                <a
                  href={`/${item.id}`}
                  key={item.id}
                  className={`${currentPath === item.id ? 'header-tab' : ''} header-tab-hover flex items-center rounded-button px-3 py-2 text-text-primary transition-colors`}
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
          <div className="flex items-center space-x-4">
            {/* Epoch Switch - 隱藏在手機版 */}
            <div className="hidden items-center space-x-2 md:flex">
              <div className="relative">
                <div className="h-[34px] w-[110px] rounded-full border border-white/20 bg-background-secondary">
                  <div className="absolute left-1 top-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary-main"></div>
                  </div>
                </div>
              </div>
              <span className="text-text-secondary text-sm">Epoch 20</span>
            </div>

            {/* Connect Button - 隱藏在手機版 */}
            <button className="hidden items-center rounded-full border border-primary-main bg-primary-main/10 px-4 py-1.5 text-primary-main transition-colors hover:bg-primary-main/20 md:flex">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary-main"></span>
              Connected
            </button>

            {/* Mobile Menu Buttons*/}
            <div className="flex space-x-2 md:hidden">
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

        {/* Navigation - mob */}
        {toggleMenu && (
          <nav className="article-container-style absolute mt-4 w-full flex-col space-y-2 p-3 md:hidden">
            {navList.map(item => (
              <a
                href={`/${item.id}`}
                key={item.id}
                className={`${currentPath === item.id ? 'header-tab' : ''} header-tab-hover flex items-center rounded-button px-3 py-2 text-text-primary transition-colors`}
              >
                <img src={item.icon} alt={`${item.label} icon`} className="mr-2 h-[18px] w-[18px]" />
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      
      {/* Backdrop */}
      {toggleMenu && (
        <div 
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setToggleMenu(false)}
        />
      )}
    </>
  );
};

export default Header;
