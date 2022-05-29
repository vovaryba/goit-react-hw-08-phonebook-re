import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from '@mui/material';
import {
  PersonOutlineOutlined,
  DeleteOutlineOutlined,
} from '@mui/icons-material';
import { phonebookSelectors, phonebookOperations } from 'redux/phonebook';

const ContactsList = () => {
  const contacts = useSelector(phonebookSelectors.getFilteredContacts);
  const isLoading = useSelector(phonebookSelectors.getIsLoading);
  const error = useSelector(phonebookSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {contacts.length > 0 && !isLoading && (
        <List>
          {contacts.map(contact => (
            <ListItem key={contact.id} sx={{ padding: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
                <PersonOutlineOutlined />
              </ListItemIcon>
              <ListItemText primary={contact.name} secondary={contact.number} />
              <Button
                color="error"
                variant="text"
                type="button"
                startIcon={<DeleteOutlineOutlined />}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ContactsList;
