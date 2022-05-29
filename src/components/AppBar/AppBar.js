import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import s from './AppBar.module.css';

const AppHeader = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.appBar}>
        <AppBar position="static">
          <Toolbar className={s.root}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </header>

      <main className={s.container}>
        <Outlet />
      </main>
    </>
  );
};

export default AppHeader;
