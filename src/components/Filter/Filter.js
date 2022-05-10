import { useSelector, useDispatch } from 'react-redux';
import { phonebookActions, phonebookSelectors } from 'redux/phonebook';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
