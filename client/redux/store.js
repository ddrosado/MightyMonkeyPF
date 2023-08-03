import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './features/sportsSlice';
import usersReducer from './features/usersSlice';
import reviewsReducer from './features/reviewsSlice';
import bookingsSlice from './features/bookingsSlice';
import reviewsReducer from './features/reviewsSlice';

const store = configureStore({
  reducer: {
    sports: sportsReducer,
    users: usersReducer,
    bookings : bookingsSlice,
    reviews: reviewsReducer,
  },
});

export default store;