import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HomeOutlined, ListAltOutlined } from '@mui/icons-material';
import { authSelectors } from 'redux/auth';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.activated : s.link);

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={setActive}>
        <HomeOutlined />
        <span className={s.text}>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={setActive}>
          <ListAltOutlined />
          <span className={s.text}>Phonebook</span>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
