import { useSelector, useDispatch } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { phonebookActions, phonebookSelectors } from 'redux/phonebook';

const Filter = () => {
  const value = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <div>
      <TextField
        value={value}
        onChange={onChange}
        type="text"
        name="name"
        label="Find contacts by name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
      />
    </div>
  );
};

export default Filter;
