import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './features/sportsSlice';
import usersReducer from './features/usersSlice';
<<<<<<< HEAD
import reviewsReducer from './features/reviewsSlice';
=======
import bookingsSlice from './features/bookingsSlice';
>>>>>>> 26d294b7c928629c3c93f2d24bd2d4f9a77e25e2

const store = configureStore({
  reducer: {
    sports: sportsReducer,
    users: usersReducer,
<<<<<<< HEAD
    reviews: reviewsReducer,
=======
    bookings : bookingsSlice
>>>>>>> 26d294b7c928629c3c93f2d24bd2d4f9a77e25e2
  },
});

export default store;