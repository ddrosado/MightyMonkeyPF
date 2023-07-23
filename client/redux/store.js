import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices';

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export default store;