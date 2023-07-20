import { useAuth } from 'hooks';
import { HeaderNavBtn } from '../HeaderNavBtn/HeaderNavBtn';
import css from './Header.module.css';

export const Header = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <header className={`header ${css.header}`}>
      <nav className={css.leftNav}></nav>

      <nav className={css.rightNav}>
        {isLoggedIn ? (
          <HeaderNavBtn to="/logout" display="Log out" />
        ) : (
          <HeaderNavBtn to="/login" display="Log in" />
        )}
        {isLoggedIn ? (
          <HeaderNavBtn
            to="/contacts"
            display={`${user.email}`}
            inactive={true}
          />
        ) : (
          <HeaderNavBtn to="/register" display="Register" />
        )}
      </nav>
    </header>
  );
};
