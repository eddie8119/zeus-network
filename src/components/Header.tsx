import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { BiShieldQuarter, BiTimeFive, BiDonateHeart } from 'react-icons/bi';
import { IconType } from 'react-icons';
import zeusLogo from '../assets/zeus-logo.png';
import check from '../assets/header/check.svg';
import menu from '../assets/header/menu.svg';

interface NavItem {
  id: string;
  icon: IconType;
  label: string;
  iconSize?: string;
}

const navList: NavItem[] = [
  {
    id: 'delegate',
    icon: BiDonateHeart,
    label: 'Delegate',
    iconSize: 'text-xl',
  },
  {
    id: 'delegations',
    icon: BiTimeFive,
    label: 'My Delegations',
    iconSize: 'text-xl',
  },
  {
    id: 'guardians',
    icon: BiShieldQuarter,
    label: 'Guardians',
    iconSize: 'text-xl',
  },
  {
    id: 'doc',
    icon: FaRegFileAlt,
    label: 'Doc',
    iconSize: 'text-lg',
  },
];

const Header: React.FC = () => {
  return (
    <header className="article-container-style sticky top-0">
      <div className="flex h-14 items-center justify-between p-2 pl-4">
        {/* Left section - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={zeusLogo} alt="Zeus Guardian" className="h-[23px] w-[35px]" />
            <div>
              <h1 className="bg-clip-text text-[11px] font-medium text-gradient-text">ZEUS NODE</h1>
              <p className="text-17 font-extrabold text-text-secondary">GUARDIAN</p>
            </div>
          </div>

          {/* Navigation - 隱藏在手機版 */}
          <nav className="hidden space-x-2 md:flex">
            {navList.map(item => (
              <button
                key={item.id}
                className="flex items-center rounded-button px-4 py-2 text-text-primary transition-colors hover:bg-white/10"
              >
                <item.icon className={`mr-2 ${item.iconSize}`} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right section - Epoch and Connect */}
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
            <span className="text-sm text-text-secondary">Epoch 20</span>
          </div>

          {/* Connect Button - 隱藏在手機版 */}
          <button className="hidden items-center rounded-full border border-primary-main bg-primary-main/10 px-4 py-1.5 text-primary-main transition-colors hover:bg-primary-main/20 md:flex">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary-main"></span>
            Connected
          </button>

          {/* Mobile Menu Buttons*/}
          <div className="flex space-x-2 md:hidden">
            <button className="article-container-style flex h-10 w-10 items-center justify-center rounded-xl">
              <img src={menu} alt="Menu" className="h-[18px] w-[18px]" />
            </button>
            <button className="article-container-style border-gradient-main flex h-10 w-10 items-center justify-center rounded-xl">
              <img src={check} alt="Check" className="h-[11px] w-[13px]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
