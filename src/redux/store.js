import { configureStore } from '@reduxjs/toolkit';
import { userContact } from './contactSlice';

export const store = configureStore({
  reducer: {
    user: userContact.reducer,
  },
});
