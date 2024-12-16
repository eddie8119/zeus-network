import React from 'react';
import { NavItem } from '../../types/navigation';

interface MobileNavProps {
  navList: NavItem[];
  currentPath: string;
  popupRef: React.RefObject<HTMLDivElement>;
}

const MobileNav: React.FC<MobileNavProps> = ({ navList, currentPath, popupRef }) => {
  return (
    <nav
      ref={popupRef}
      className="article-container-style absolute mt-4 w-full flex-col space-y-2 p-3 lg:hidden"
    >
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

export default MobileNav;
