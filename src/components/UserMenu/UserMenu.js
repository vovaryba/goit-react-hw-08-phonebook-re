import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import s from './UserMenu.module.css';
import defaultAvatar from './default-avatar.jpg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img
        className={s.avatar}
        src={defaultAvatar}
        alt="Green Dragon"
        width="32"
      />
      <span>Welcome, {name}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log off
      </button>
    </div>
  );
};

export default UserMenu;
