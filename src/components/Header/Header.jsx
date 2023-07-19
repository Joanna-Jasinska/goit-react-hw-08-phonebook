import { HeaderNavBtn } from '../HeaderNavBtn/HeaderNavBtn';
import css from './Header.module.css';
import { useEffect } from 'react';

export const Header = () => {
  // const handleScroll = (e) => {
  // add this to document onScroll
  //   const bottom = false;
  //   e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   return Number(bottom);
  // };
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');

  return (
    <header className={`header ${css.header} `}>
      <nav className={css.leftNav}>
        <HeaderNavBtn to="/contacts" display="Contacts ( Username@email )" />
        <HeaderNavBtn to="/register" display="Register" />
      </nav>

      <nav className={css.rightNav}>
        <HeaderNavBtn to="/login" display="Log in" />
        <HeaderNavBtn to="/" display="Log out /Home" />
      </nav>
    </header>
  );
};
