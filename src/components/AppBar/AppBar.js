import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import * as authSelectors from 'redux/auth/authSelectors';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.appBar}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>

      <main className={s.container}>
        <Outlet />
      </main>
    </>
  );
};

export default AppBar;
