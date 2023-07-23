import { createSlice } from '@reduxjs/toolkit';
import { getSports } from '../actions/sportsActions';

const initialState = {
  sports: 0,
  error: "",
};

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {
    increment: (state) => {
      state.sports += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSports.fulfilled, (state, action) => { 
        state.error = "";
        state.sports = action.payload;
      })
    },
  });

export const { increment } = sportsSlice.actions;
export default sportsSlice.reducer;