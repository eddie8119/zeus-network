import React from 'react';
import menu from '../../assets/header/menu.svg';
import tick from '../../assets/header/tick.svg';

interface MenuButtonMobileAreaProps {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const MenuButtonMobileArea: React.FC<MenuButtonMobileAreaProps> = ({
  toggleMenu,
  setToggleMenu,
  buttonRef,
}) => {
  return (
    <div className="flex space-x-2 lg:hidden">
      <button
        ref={buttonRef}
        onClick={() => setToggleMenu(!toggleMenu)}
        className="menu-btn btn-active flex h-10 w-10 items-center justify-center rounded-xl"
      >
        <img src={menu} alt="Menu" className="h-[18px] w-[18px]" />
      </button>
      <button className="btn-active connected-btn flex h-10 w-10 items-center justify-center rounded-xl">
        <img src={tick} alt="tick" className="h-[18px] w-[18px]" />
      </button>
    </div>
  );
};

export default MenuButtonMobileArea;
