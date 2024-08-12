import { useEffect, useState } from 'react';
import { HamburgerMenuIcon } from '../svg/HamburgerMenuIcon';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  console.log(isMenuOpen)
  return (
    <div className={`navbar ${isMenuOpen && 'navbar--open'}`}>
      {/* <img src='./img/logo-mobile.png' className='navbar__logo' />
      <button
        className={`navbar__hamburger-menu-wrapper ${
          isMenuOpen && 'navbar__hamburger-menu-wrapper--open'
        }`}
        type='button'
        onClick={() => setIsMenuOpen((prev) => !prev)}>
        <HamburgerMenuIcon
          className='navbar__hamburger-menu'
          width={30}
          height={30}
          isOpen={isMenuOpen}
        />
      </button> */}
    </div>
  );
};
