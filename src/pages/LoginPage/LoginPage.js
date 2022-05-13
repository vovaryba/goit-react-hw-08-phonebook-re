import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmitForm = ({ email, password }) => {
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <>
      <h2>Authorization page</h2>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className={s.form}
        autoComplete="off"
      >
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            {...register('email', {
              required: { value: true, message: 'Required' },
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'Enter the correct email',
              },
            })}
          />
        </label>
        {errors.email && <p className={s.error}>{errors.email.message}</p>}
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            {...register('password', {
              required: { value: true, message: 'Required' },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z]).{6,}/,
                message:
                  'Password must contain at least 6 lowercase letters and numbers',
              },
            })}
          />
        </label>
        {errors.password && (
          <p className={s.error}>{errors.password.message}</p>
        )}
        <button type="submit" className={s.button}>
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginPage;
