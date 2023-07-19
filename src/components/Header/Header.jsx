import { useEffect } from 'react';
// import { selectUser } from 'redux/auth/selectors';
import { useAuth } from 'hooks';
import { HeaderNavBtn } from '../HeaderNavBtn/HeaderNavBtn';
// import { useSelector } from 'react-redux';
import css from './Header.module.css';

export const Header = () => {
  const { user, isLoggedIn } = useAuth();
  // const handleScroll = (e) => {
  // add this to document onScroll
  //   const bottom = false;
  //   e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   return Number(bottom);
  // };
  // const header = document.querySelector('.header');
  // const footer = document.querySelector('.footer');

  return (
    <header className={`header ${css.header} `}>
      <nav className={css.leftNav}>
        {isLoggedIn ? (
          <HeaderNavBtn to="/contacts" display={`${user.email}`} />
        ) : (
          <HeaderNavBtn to="/register" display="Register" />
        )}
      </nav>

      <nav className={css.rightNav}>
        {isLoggedIn ? (
          <HeaderNavBtn to="/logout" display="Log out" />
        ) : (
          <HeaderNavBtn to="/login" display="Log in" />
        )}
      </nav>
    </header>
  );
};
