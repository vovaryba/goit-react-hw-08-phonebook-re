import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebookReducer';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
