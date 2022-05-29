import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Typography, TextField, Button } from '@mui/material';
import { phonebookSelectors, phonebookOperations } from 'redux/phonebook';
import s from './AddContactForm.module.css';

const AddContactForm = () => {
  const contacts = useSelector(phonebookSelectors.getContacts);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    mode: 'onChange',
  });

  const onSubmitForm = ({ name, number }) => {
    const notUniqueContact = contacts.find(
      prevContact => prevContact.name === name,
    );

    if (notUniqueContact) {
      toast.error(` ${notUniqueContact.name} is already in contacts`);
      reset();
      return;
    }

    dispatch(phonebookOperations.addContact({ name, number }));
    reset();
  };

  return (
    <div className={s.page}>
      <Typography variant="h3" component="div" gutterBottom>
        Phonebook
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
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                'Name may contain only letters, apostrophe, dash and spaces',
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
          name="number"
          rules={{
            required: { value: true, message: 'Required' },
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          }}
          render={({ field }) => (
            <TextField
              margin="dense"
              label="Number"
              type="tel"
              name="number"
              fullWidth={true}
              value={field.value}
              onChange={e => field.onChange(e)}
              error={!!errors.number?.message}
              helperText={errors.number?.message}
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
        >
          Add contact
        </Button>
      </form>
    </div>
  );
};

export default AddContactForm;
