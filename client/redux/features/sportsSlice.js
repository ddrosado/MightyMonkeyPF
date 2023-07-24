import { createSlice } from '@reduxjs/toolkit';
import { getSports } from '../actions/sportsActions';

const initialState = {
  sports: [],
  error: "",
};

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.sports = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSports.fulfilled, (state, action) => {
        state.error = "";
        state.sports = action.payload;
      })
      .addCase(getSports.rejected, (state, action) => {
        state.error = 'Error occurred while fetching sports data.';
        state.sports = [];
      });
  },
});

export const { increment } = sportsSlice.actions;
export default sportsSlice.reducer;