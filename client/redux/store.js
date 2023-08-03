import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './features/sportsSlice';
import usersReducer from './features/usersSlice';

import reviewsReducer from './features/reviewsSlice';

<<<<<<< HEAD
import reviewsReducer from './features/reviewsSlice';
=======
import bookingsSlice from './features/bookingsSlice';
=========
import reviewsReducer from './features/reviewsSlice';
>>>>>>>>> Temporary merge branch 2

const store = configureStore({
  reducer: {
    sports: sportsReducer,
    users: usersReducer,
<<<<<<<<< Temporary merge branch 1
    bookings : bookingsSlice
=========
    reviews: reviewsReducer,
>>>>>>>>> Temporary merge branch 2
  },
});

export default store;