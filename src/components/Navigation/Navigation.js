import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from 'redux/auth/authSelectors';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.activated : s.link);

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={setActive}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
