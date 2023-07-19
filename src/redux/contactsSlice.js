import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContactById, addContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = state => {
  state.isLoading = true;
};
const deleteContactByIdPending = state => {
  state.isLoading = true;
  // state.contacts = [
  //   { name: 'x', number: 'x', id: 'x', deleting: true },
  //   ...state.contacts.filter(item => item.id !== action.payload.id),
  //   {
  //     ...state.contacts.filter(item => item.id == action.payload.id)[0],
  //     deleting: true,
  //   },
  // ];
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [deleteContactById.pending]: deleteContactByIdPending,
    [deleteContactById.rejected]: handleRejected,
    [deleteContactById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload.id
      );
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = [...state.contacts, action.payload];
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
