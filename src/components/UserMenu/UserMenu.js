import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import { authOperations, authSelectors } from 'redux/auth';
import s from './UserMenu.module.css';
import defaultAvatar from './default-avatar.jpg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <Avatar alt="Green Dragon" src={defaultAvatar} />
      <span className={s.text}>Welcome, {name}</span>
      <Button
        color="inherit"
        variant="outlined"
        type="button"
        endIcon={<LogoutOutlined />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <span>Log off</span>
      </Button>
    </div>
  );
};

export default UserMenu;
