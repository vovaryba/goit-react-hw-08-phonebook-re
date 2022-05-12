import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const setActive = ({ isActive }) => (isActive ? s.activated : s.link);

const AuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink to="/register" className={setActive}>
        Registration
      </NavLink>
      <NavLink to="/login" className={setActive}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
