import { createSlice } from '@reduxjs/toolkit';
import { getBookings, postBooking } from '../actions/bookingAction';

const initialState = {
  bookings: [],
  bookingsCopy: [],
  loading: false,
  error: null,
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    filterBookings: (state, action) => {
      const { sport, date, search } = action.payload;
      let filteredBookings = state.bookings;
  
      if (sport !== "all") {
          filteredBookings = filteredBookings.filter(book => book.court?.sport?.name === sport);
      }
  
      if (date !== "all") {
          filteredBookings = filteredBookings.filter(book => book.date == date);
      }
  
      filteredBookings = filteredBookings.filter(book =>
          book.court.sport?.name.toLowerCase().includes(search.toLowerCase()) ||
          book.court.name.toLowerCase().includes(search.toLowerCase()) ||
          book.user.name.toLowerCase().includes(search.toLowerCase())
      );
  
      state.bookingsCopy = filteredBookings;
  }
},
  extraReducers: (builder) => {
    builder
      .addCase(getBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bookings = action.payload;
        state.bookingsCopy = action.payload;
      })
      .addCase(getBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.bookings.push(action.payload);
        state.bookingsCopy.push(action.payload);
      })
      .addCase(postBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;