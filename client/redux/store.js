import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './features/sportsSlice';
import usersReducer from './features/usersSlice';

const store = configureStore({
  reducer: {
    sports: sportsReducer,
    users: usersReducer
  },
});

export default store;