import { HeaderNavBtn } from '../HeaderNavBtn/HeaderNavBtn';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <header className={`header ${css.header}`}>
      <nav className={css.rightNav}>
        <HeaderNavBtn to="/login" display="Log in" />
        <HeaderNavBtn to="/register" display="Register" />
      </nav>
    </header>
  );
};
