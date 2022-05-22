import { useForm, Controller } from 'react-hook-form';
import { Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmitForm = ({ name, email, password }) => {
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <div className={s.page}>
      <Typography variant="h2" component="div" gutterBottom>
        Registration page
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className={s.form}
        autoComplete="off"
      >
        <Controller
          control={control}
          name="name"
          rules={{
            required: { value: true, message: 'Required' },
            pattern: {
              value: /^[a-zA-Z0-9]+(([' -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/,
              message:
                'Name may contain only letters of the Latin alphabet, numbers, apostrophe, dash and spaces',
            },
          }}
          render={({ field }) => (
            <TextField
              margin="dense"
              label="Name"
              type="text"
              name="name"
              fullWidth={true}
              value={field.value}
              onChange={e => field.onChange(e)}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{
            required: { value: true, message: 'Required' },
            pattern: {
              value:
                /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
              message: 'Enter the correct email',
            },
          }}
          render={({ field }) => (
            <TextField
              margin="dense"
              label="Email"
              type="email"
              name="email"
              fullWidth={true}
              value={field.value}
              onChange={e => field.onChange(e)}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: 'Required' },
            pattern: {
              value: /^(?=.*[0-9])(?=.*[a-z]).{6,}/,
              message:
                'Password must contain at least 6 lowercase letters and numbers',
            },
          }}
          render={({ field }) => (
            <TextField
              margin="dense"
              label="Password"
              type="password"
              name="password"
              fullWidth={true}
              value={field.value}
              onChange={e => field.onChange(e)}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth={true}
          disableElevation={true}
          sx={{ marginTop: 2 }}
          onClick={() => dispatch(authOperations.logOut())}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
