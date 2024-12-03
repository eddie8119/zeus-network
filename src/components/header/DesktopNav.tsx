import React from 'react';
import { NavItem } from '../../types/navigation';

interface DesktopNavProps {
  navList: NavItem[];
  currentPath: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navList, currentPath }) => {
  return (
    <nav className="hidden space-x-3 lg:flex lg:flex-row">
      {navList.map(item => (
        <a
          href={`/${item.id}`}
          key={item.id}
          className={`${currentPath === item.id ? 'header-tab' : ''} header-tab-hover rounded-button flex items-center px-3 py-2 text-text-primary transition-colors`}
        >
          <img src={item.icon} alt={`${item.label} icon`} className="mr-2 h-[18px] w-[18px]" />
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNav;
