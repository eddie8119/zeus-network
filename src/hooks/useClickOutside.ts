import { useEffect } from 'react';

export const useClickOutside = (
  popupRef: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLElement>,
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, popupRef, buttonRef, setIsOpen]);
};
