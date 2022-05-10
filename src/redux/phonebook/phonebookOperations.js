import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from 'services/phonebook-api';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.addContact(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.deleteContact(contactId);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
