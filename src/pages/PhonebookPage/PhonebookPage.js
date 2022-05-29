import { Typography, Box } from '@mui/material';
import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import List from 'components/List';

const PhonebookPage = () => {
  return (
    <>
      <AddContactForm />

      <Typography variant="h3" component="div" gutterBottom>
        Contacts
      </Typography>
      <Box
        sx={{
          '& > :not(style)': { marginTop: 2 },
          width: 360,
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Filter />
        <List />
      </Box>
    </>
  );
};

export default PhonebookPage;
