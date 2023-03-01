import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: [],
  filter: '',
};

export const userContact = createSlice({
  name: 'user',
  initialState,

  reducers: {
    AddContact: {
      reducer(state, action) {
        state.contact.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: contact,
        };
      },
    },
    DeleteContact(state, action) {
      const index = state.contact.findIndex(
        userId => userId.id === action.payload
      );
      state.contact.splice(index, 1);
    },

    SearchByName: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { AddContact, DeleteContact, SearchByName } = userContact.actions;
