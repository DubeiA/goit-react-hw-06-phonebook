import { configureStore } from '@reduxjs/toolkit';
import { userContact } from './reducer';

export const store = configureStore({
  reducer: {
    user: userContact.reducer,
  },
});
