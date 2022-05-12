import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/authOperations';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
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
    <>
      <h2>Registration page</h2>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className={s.form}
        autoComplete="off"
      >
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            {...register('name', {
              required: { value: true, message: 'Required' },
              pattern: {
                value: /^[a-zA-Z0-9]+(([' -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/,
                message:
                  'Name may contain only letters, numbers, apostrophe, dash and spaces',
              },
            })}
          />
        </label>
        {errors.name && <p className={s.error}>{errors.name.message}</p>}
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
                value: /^(?=.*[0-9])(?=.*[a-z]).{7,}/,
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
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
