import { createSlice } from '@reduxjs/toolkit';

export const userContact = createSlice({
  name: 'user',
  initialState: {
    contact: {
      name: '',
      number: '',
    },
  },
  reducers: {
    AddName(state, action) {
      state.contact.name = action.payload;
    },
    AddNumber(state, action) {
      state.contact.number = action.payload;
    },
  },
});

export const { AddName, AddNumber } = userContact.actions;

// export default counterSlice.reducer;
