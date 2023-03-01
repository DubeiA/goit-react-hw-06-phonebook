import { createSlice } from '@reduxjs/toolkit';

export const userContact = createSlice({
  name: 'user',
  initialState: [],

  reducers: {
    AddContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: contact,
        };
      },
    },
    DeleteContact(state, action) {
      const index = state.findIndex(userId => userId.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { AddContact, DeleteContact } = userContact.actions;
