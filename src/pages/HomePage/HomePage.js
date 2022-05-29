import { Typography } from '@mui/material';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2" component="div">
        Welcome, this is the start page
      </Typography>
    </div>
  );
};

export default HomePage;
