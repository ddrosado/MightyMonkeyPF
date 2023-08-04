import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './features/sportsSlice';
import usersReducer from './features/usersSlice';
import reviewsReducer from './features/reviewsSlice';
import bookingsSlice from './features/bookingsSlice';
import plansSlice from './features/plansSlice';


const store = configureStore({
  reducer: {
    sports: sportsReducer,
    users: usersReducer,
    bookings : bookingsSlice,
    reviews: reviewsReducer,
    plans: plansSlice
  },
});

export default store;