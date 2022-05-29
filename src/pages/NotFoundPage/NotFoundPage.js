import { Typography } from '@mui/material';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2" component="div">
        404 Page not found
      </Typography>
    </div>
  );
};

export default NotFoundPage;
