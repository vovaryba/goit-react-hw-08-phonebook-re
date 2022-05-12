import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import List from 'components/List';
import s from './PhonebookPage.module.css';

const PhonebookPage = () => {
  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <AddContactForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <List />
    </>
  );
};

export default PhonebookPage;
