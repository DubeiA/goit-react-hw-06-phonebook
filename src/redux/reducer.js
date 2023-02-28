import { createSlice } from '@reduxjs/toolkit';

// const contact = [];

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
  },
});

export const { AddContact } = userContact.actions;

// export default counterSlice.reducer;
