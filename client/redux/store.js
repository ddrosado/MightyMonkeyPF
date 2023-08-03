import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './features/sportsSlice';
import usersReducer from './features/usersSlice';
import reviewsReducer from './features/reviewsSlice';

const store = configureStore({
  reducer: {
    sports: sportsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
  },
});

export default store;