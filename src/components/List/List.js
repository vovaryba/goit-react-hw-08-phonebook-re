import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from 'redux/phonebook';
import s from './List.module.css';

const List = () => {
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
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={s.button}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
