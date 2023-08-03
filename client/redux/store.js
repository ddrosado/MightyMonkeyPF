import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './features/sportsSlice';
import usersReducer from './features/usersSlice';

import reviewsReducer from './features/reviewsSlice';

import bookingsSlice from './features/bookingsSlice';


const store = configureStore({
  reducer: {
    sports: sportsReducer,
    users: usersReducer,

    reviews: reviewsReducer,

    bookings : bookingsSlice

  },
});

export default store;